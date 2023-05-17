import * as cdk from 'aws-cdk-lib';
import {
  Certificate,
  CertificateValidation,
} from 'aws-cdk-lib/aws-certificatemanager';
import { Distribution, ViewerProtocolPolicy } from 'aws-cdk-lib/aws-cloudfront';
import { S3Origin } from 'aws-cdk-lib/aws-cloudfront-origins';
import { ARecord, HostedZone, RecordTarget } from 'aws-cdk-lib/aws-route53';
import { CloudFrontTarget } from 'aws-cdk-lib/aws-route53-targets';
import { BlockPublicAccess, Bucket } from 'aws-cdk-lib/aws-s3';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

const assetPath = './resources/build';
const hostedZoneDomainName = 'brickerfam.com';
const cloudfrontRecordName = 'ben';
const cloudfrontDomainName = `${cloudfrontRecordName}.${hostedZoneDomainName}`;

export class CloudfrontStack extends cdk.Stack {
  appBucket: Bucket;
  distribution: Distribution;
  deployment: BucketDeployment;
  certificate: Certificate;
  aRecord: ARecord;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const importedHostedZone = HostedZone.fromLookup(this, 'hosted-zone', {
      domainName: hostedZoneDomainName,
    });

    this.certificate = new Certificate(this, 'cloudfront-certificate', {
      domainName: cloudfrontDomainName,
      validation: CertificateValidation.fromDns(importedHostedZone),
    });

    this.appBucket = new Bucket(this, 'app-bucket', {
      autoDeleteObjects: true,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    this.distribution = new Distribution(this, 'cloudfront-distribution', {
      domainNames: [cloudfrontDomainName],
      certificate: this.certificate,
      defaultBehavior: {
        origin: new S3Origin(this.appBucket),
        viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
      defaultRootObject: 'index.html',
      errorResponses: [
        {
          httpStatus: 404,
          responseHttpStatus: 200,
          responsePagePath: '/index.html',
        },
      ],
    });

    this.deployment = new BucketDeployment(this, 'bucket-deployment', {
      sources: [Source.asset(assetPath)],
      destinationBucket: this.appBucket,
      distribution: this.distribution,
      distributionPaths: ['/*'],
    });

    this.aRecord = new ARecord(this, 'distribution-alias-record', {
      zone: importedHostedZone,
      recordName: 'ben',
      target: RecordTarget.fromAlias(new CloudFrontTarget(this.distribution)),
    });
  }
}
