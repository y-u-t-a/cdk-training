# cdk-training
AWS CDK の勉強

## CDK プロジェクトを作成する流れ

```bash
npx cdk init app --language=typescript
```

使用するモジュールのインストール

```bash
npm i <モジュール名>
```
 
モジュール名は [リファレンス](https://docs.aws.amazon.com/cdk/api/latest/docs/aws-construct-library.html) をページ内検索して特定する。

よく使いそうなモジュール

- @aws-cdk/aws-apigateway
- @aws-cdk/aws-apigatewayv2
- @aws-cdk/aws-apigatewayv2-integrations
- @aws-cdk/aws-events
- @aws-cdk/aws-events-targets
- @aws-cdk/aws-iam
- @aws-cdk/aws-lambda
- @aws-cdk/aws-lambda-event-sources
- @aws-cdk/aws-lambda-nodejs
- @aws-cdk/aws-lambda-python
- @aws-cdk/aws-logs
- @aws-cdk/aws-s3
- @aws-cdk/aws-stepfunctions
- @aws-cdk/aws-stepfunctions-tasks