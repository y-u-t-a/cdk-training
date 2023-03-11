import { STSClient, GetCallerIdentityCommand } from "@aws-sdk/client-sts"

export async function handler(event, context) {
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