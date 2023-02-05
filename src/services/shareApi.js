import api from './api';

export async function getShared(token) {
  const response = await api.get('/share', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}

export async function getSharedOwned(token) {
  const response = await api.get('/share/owned', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}

export async function getShareRequests(token) {
  const response = await api.get('/share/requests', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}

export async function postShare(listId, body, token) {
  const response = await api.post(`/share/${listId}`, body, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}

export async function postAcceptShare(requestId, token) {
  const response = await api.post(`/share/accept/${requestId}`, {}, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}

export async function postRefuseShare(requestId, token) {
  const response = await api.post(`/share/refuse/${requestId}`, {}, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}

export async function postRemoveShare(requestId, token) {
  const response = await api.post(`/share/remove/${requestId}`, {}, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}