import request from '../../../utils/request';

export function create(params) {
  return request('/users',{
    method: 'POST',
    data: params,
  });
}
