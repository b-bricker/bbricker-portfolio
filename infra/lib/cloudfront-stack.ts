import * as cdk from 'aws-cdk-lib';
import { Distribution, ViewerProtocolPolicy } from 'aws-cdk-lib/aws-cloudfront';
import { S3Origin } from 'aws-cdk-lib/aws-cloudfront-origins';
import { BlockPublicAccess, Bucket } from 'aws-cdk-lib/aws-s3';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

const assetPath = './resources/build';

export class CloudfrontStack extends cdk.Stack {
  appBucket: Bucket;
  distribution: Distribution;
  deployment: BucketDeployment;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.appBucket = new Bucket(this, 'app-bucket', {
      autoDeleteObjects: true,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    this.distribution = new Distribution(this, 'cloudfront-distribution', {
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
  }
}
