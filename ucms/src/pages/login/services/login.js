import request from '../../../utils/request';

export function login(params) {
  return request('/api/v1/users',{
    method: 'GET',
    data: params,
  });
}
