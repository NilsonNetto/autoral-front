import axios from 'axios';

const apiURL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: apiURL
});

export default api;