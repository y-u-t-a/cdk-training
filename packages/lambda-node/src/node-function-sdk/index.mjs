import { GetCallerIdentityCommand, STSClient } from '@aws-sdk/client-sts'

const client = new STSClient()

export async function handler() {
  const command = new GetCallerIdentityCommand()
  const response = await client.send(command)
  return {
    result: {
      Account: response.Account,
      UserId: response.UserId,
      Arn: response.Arn,
    },
  }
}
