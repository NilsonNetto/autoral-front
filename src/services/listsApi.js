import api from './api';

export async function getLists(token) {
  const response = await api.get('/list', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}

export async function getListName(listId, token) {
  const response = await api.get(`/list/${listId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}

export async function postList(body, token) {
  const response = await api.post('/list', body, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}

export async function putList(listId, body, token) {
  const response = await api.put(`/list/${listId}`, body, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}

export async function deleteList(listId, token) {
  const response = await api.delete(`/list/${listId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}