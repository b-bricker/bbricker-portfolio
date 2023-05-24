# BBricker Portfolio

This project is a simple personal webpage.

## Project Structure

    .
    ├── .github                 # GitHub specific files and directories
        └── workflows           # GitHub Actions workflows
    ├── infra                   # AWS CDK code
        ├── bin                 # Primary container for CDK app
        ├── lib                 # Stacks and constructs used by CDK app
        └── resources           # OutDir for React app build command
    ├── public                  # Public resources for React app, such as favicons
    ├── src                     # Source files for the React app
    └── index.html              # Entry point for web app

## Developing

Local development primarily happens on the React web app code located in `./src`.

To run the development environment with live reloads run the command:

```bash
npm run dev
```

Any infrastructure changes should be made in the `./infra` directory. Keep in mind that the environment is set using environment variables, so it is necessary to set them like so:

```bash
CDK_DEFAULT_ACCOUNT=your_account_number
CDK_DEFAULT_REGION=us-east-1
```

At the moment, `us-east-1` is the only usable region due to the use of CloudFront.

During development the CDK can be synthed by running the following from the `./infra` directory:

```bash
npm run cdk-synth
```

## Deployment

Deployments are handled automatically by GitHub Actions whenever there is a push to branch `main`.

If required, the project can also be manually deployed by running the following from the project root:

```bash
npm run deploy
```

The above command installs dependencies and builds the React app before installing the CDK app dependencies, synthesizing the CloudFormation template, and deploying it.

## Attributions

The favicon image "[Cowboy Hat Face](https://github.com/twitter/twemoji/blob/master/assets/svg/1f920.svg)" is from the open source project [Twemoji](https://twemoji.twitter.com/). The graphics are copyright 2020 Twitter, Inc and other contributors and are licensed under [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/).
