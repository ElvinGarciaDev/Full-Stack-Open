import axios from 'axios'

const baseURL = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseURL)
    return response.data
}

const createAnecdotes = async (content) => {
    let obj = {
        "content": content,
        "votes": 0
    }
    const response = await axios.post(baseURL, obj)
    return response.data
}

export default {
    getAll,
    createAnecdotes
  }