import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/login'


const login = (userObj) => {
  const request = axios.post(baseUrl, userObj)
  return request.then(response => response.data)
}

export default { login }