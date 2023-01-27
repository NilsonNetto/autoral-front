import api from './api';

export async function login(body) {
  const response = await api.post('/auth/login', body);
  return response.data;
}

export async function register(body) {
  const response = await api.post('/auth/register', body);
  return response.data;
}