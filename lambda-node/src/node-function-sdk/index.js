const { STSClient, GetCallerIdentityCommand } = require("@aws-sdk/client-sts")

const handler = async (event, context) => {
  const client = new STSClient()
  const command = new GetCallerIdentityCommand()
  const response = await client.send(command)
  return {
    result: {
      Account :response.Account,
      UserId :response.UserId,
      Arn :response.Arn,
    }
  }
}

exports.handler = handler