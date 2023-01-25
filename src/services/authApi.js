import api from './api';

export async function login(data) {
  const response = await api.post('/auth/login', { ...data });
  return response.data;
}

export async function signUp(data) {
  const response = await api.post('/auth/signup', { ...data });
  return response.data;
}