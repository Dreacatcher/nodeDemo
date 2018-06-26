import request from '../../../utils/request';

export function create(params) {
  return request('/api/v1/users',{
    method: 'put',
    data: params,
  });
}
