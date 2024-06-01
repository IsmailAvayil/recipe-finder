import axios from 'axios';

const API_KEY = "7fcf08673e6e481e87c8e552e667df9b";

const axiosInstance = axios.create({
  baseURL: 'https://api.spoonacular.com',
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    apiKey: API_KEY,
  }
});
export default axiosInstance