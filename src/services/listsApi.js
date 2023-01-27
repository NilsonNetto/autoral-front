import api from './api';

export async function getLists(token) {
  const response = await api.get('/list', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}

