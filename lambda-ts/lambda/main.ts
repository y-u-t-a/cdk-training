export async function handler() {
  const axios = require('axios')
  const response = await (await axios.get("https://my-json-server.typicode.com/typicode/demo/posts")).data
  console.log(response)
  return {
    status: 200,
    time: `${new Date()}`
  }
}