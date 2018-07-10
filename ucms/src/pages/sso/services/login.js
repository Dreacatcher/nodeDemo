import request from '../../../utils/request';

export function login(params) {
  return request({
    url:'/login',
    method: 'GET',
    body: params,
  });
}
