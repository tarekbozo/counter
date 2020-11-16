import axios from 'axios';

const Github_API = axios.create({
  baseURL: 'https://api.github.com/repos',
});
export default Github_API;
