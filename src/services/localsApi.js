import api from './api';

export async function getLocals(listId, token) {
  const response = await api.get(`/local/${listId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}

export async function postLocal(listId, body, token) {
  const response = await api.post(`/local/${listId}`, body, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}