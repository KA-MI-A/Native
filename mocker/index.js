const delay = require('mocker-api/lib/delay');
const user = require('./user.mock');
const dataArray = require('./dataArray.mock');
// 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true';

const proxy = {
  ...user,
  ...dataArray
};

module.exports = noProxy ? { ...proxy } : delay(proxy, 1000);
// module.exports = proxy;
