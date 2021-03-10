import { fetch } from '../utils';
/**
 * login
 */
// 请求接口
export async function userFirst(params) {
  return fetch('/api/pipeline/list', {
    body: params,
  });
}
