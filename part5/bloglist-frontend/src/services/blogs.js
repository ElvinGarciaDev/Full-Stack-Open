import axios from "axios";
const baseUrl = "http://localhost:3001/api/blogs";

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (data) => {

  const config = {
    headers: { Authorization: token },
  }

  const request = axios.post(baseUrl, data, config);
  return request.then((response) => response.data);
};

export default { getAll, create, setToken };
