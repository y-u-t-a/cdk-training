import { Construct } from 'constructs'
import { RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib'
import * as s3 from 'aws-cdk-lib/aws-s3'
import * as s3Deploy from 'aws-cdk-lib/aws-s3-deployment'
import { ArnPrincipal, Effect, PolicyStatement } from 'aws-cdk-lib/aws-iam'

export class StaticSite extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)
    const s3Bucket = new s3.Bucket(this, 'staticSiteBucket', {
      websiteIndexDocument: 'index.html',
      blockPublicAccess: {
        blockPublicAcls: false,
        blockPublicPolicy: false,
        ignorePublicAcls: false,
        restrictPublicBuckets: false,
      },
      removalPolicy: RemovalPolicy.DESTROY,
    })
    s3Bucket.addToResourcePolicy(
      new PolicyStatement({
        effect: Effect.ALLOW,
        principals: [new ArnPrincipal('*')],
        actions: ['s3:GetObject'],
        resources: [`${s3Bucket.bucketArn}/*`],
        // IPアドレス制限
        // conditions: {
        //   IpAddress: { "aws:SourceIp": "0.0.0.0/0" }
        // }
      }),
    )

    new s3Deploy.BucketDeployment(this, 'DeployWebsite', {
      destinationBucket: s3Bucket,
      sources: [s3Deploy.Source.asset('src')],
      retainOnDelete: false,
    })
  }
}
