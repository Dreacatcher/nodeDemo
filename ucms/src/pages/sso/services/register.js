import request from '../../../utils/request';

export function create(params) {
  debugger
  console.log('111111111')
  console.log(params)
  return request({
    url:'/users',
    method: 'POST',
    body: params,
  });
}
