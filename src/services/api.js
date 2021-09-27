import axios from 'axios';

const api = axios.create({
  baseURL: '',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept, Authorization ',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, PATCH',
    'Access-Control-Max-Age': '86400',
    'Content-Type':
      'application/x-www-form-urlencoded, multipart/form-data, text/plain',
  },
});
export default api;
