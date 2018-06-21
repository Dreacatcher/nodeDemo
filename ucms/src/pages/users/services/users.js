import request from '../../../utils/request';

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

export function patch(id, values) {
  return request(`/api/v1/users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(values),
  });
}

export function create(values) {
  return request('/api/v1/users', {
    method: 'POST',
    body: JSON.stringify(values),
  });
}
