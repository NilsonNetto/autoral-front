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

export async function postFinishLocal(listLocalId, token) {
  const response = await api.post(`/local/finished/${listLocalId}`, {}, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}

export async function putLocal(listLocalId, body, token) {
  const response = await api.put(`/local/${listLocalId}`, body, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}

export async function deleteLocal(listLocalId, token) {
  const response = await api.delete(`/local/${listLocalId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}