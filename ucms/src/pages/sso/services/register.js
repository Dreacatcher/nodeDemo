import request from '../../../utils/request';

export function create(params) {
  return request({
    url:'/users',
    method: 'POST',
    body: params,
  });
}
