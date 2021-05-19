import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/v1/';

const getPublicContent = () => {
  return axios.get(API_URL + 'all');
};

const getUserBookDirectory = (userId) => {
  return axios.get(API_URL + `books/user/${userId}`, { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBookDirectory,
};
