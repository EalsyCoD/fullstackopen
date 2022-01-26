import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}


const createNew = async (content) => {
  const object = {content, votes: 0}
  const respose = await axios.post(baseUrl, object)
  return respose.data
}

export { getAll, createNew }