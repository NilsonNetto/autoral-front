import api from './api';

export async function getItems(listLocalId, token) {
  const response = await api.get(`/item/${listLocalId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}

export async function postItem(listLocalId, body, token) {
  const response = await api.post(`/item/${listLocalId}`, body, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}