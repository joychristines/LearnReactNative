import axios from 'axios';
import { BACKEND_API_URL } from '@env';

const Api = axios.create({
  baseURL: BACKEND_API_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

export default Api;