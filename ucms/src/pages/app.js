import request from '../utils/request';

export function fetch(params) {
  return request('/api/v1/users',{
    method: 'GET',
    data: params,
  });
}

export function remove(id) {
  return request(`/api/v1/users/${id}`, {
    method: 'DELETE',
  });
}