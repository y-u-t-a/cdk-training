# cdk-training
AWS CDK の勉強

## コマンド

プロジェクトルートでワークスペースを指定するオプション `-w` を付与して cdk コマンドを実行する

```sh
npm run cdk <cdk subcommand> -w <workspace>
```

## CDK プロジェクトを作成する流れ

CDK v2 からの手順。

```bash
npx cdk init app --language typescript
```

CDK v2 からは `aws-cdk-lib` にモジュールがまとめられるようになった。  
https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib-readme.html

一部の alpha 状態のリソースは個別にモジュールをインストールする必要がある。  

```bash
npm i <モジュール名>
```

モジュール名は [リファレンス](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-construct-library.html) をページ内検索して特定する。

よく使いそうなモジュール

- aws-cdk-lib/aws-apigateway
- aws-cdk-lib/aws-events
- aws-cdk-lib/aws-events-targets
- aws-cdk-lib/aws-iam
- aws-cdk-lib/aws-lambda
- aws-cdk-lib/aws-lambda-event-sources
- aws-cdk-lib/aws-lambda-nodejs
- @aws-cdk/aws-lambda-python-alpha
- aws-cdk-lib/aws-logs
- aws-cdk-lib/aws-s3
- aws-cdk-lib/aws-stepfunctions
- aws-cdk-lib/aws-stepfunctions-tasks

## Tips

各 Workspace にコマンドを実行。
コマンド例。

```sh
npm run cdk ls --workspaces
```
