import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';

const getPublicContent = () => {
  return axios.get(API_URL + 'all');
};

const getUserBookDirectory = () => {
  return axios.get(API_URL + 'directory', { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBookDirectory,
};
