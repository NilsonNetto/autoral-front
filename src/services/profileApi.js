import api from './api';

export async function getProfile(token) {
  const response = await api.get('/profile', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}

export async function updateProfile(body, token) {
  const response = await api.put('/profile', body, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}

