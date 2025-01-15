import axios from 'axios'

type Item = {
  id: string
  title: string
}
type Response = Item[]

export async function handler() {
  const response = await axios.get<Response>(
    'https://my-json-server.typicode.com/typicode/demo/posts',
  )
  console.log(
    `index:0 id: ${response.data?.[0].id} title: ${response.data?.[0].title}`,
  )

  return {
    status: 200,
    time: `${new Date()}`,
    data: response.data,
  }
}
