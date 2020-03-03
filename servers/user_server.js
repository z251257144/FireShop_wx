

const base_server = require('./base_server.js');

/**
 * 微信(小程序)用户注册[快速注册]
 */
function fetchUserLogin(code, onSuccess, onFailed) {
  var param = { "code": code };
  base_server.postRequest("user/wxapp/register/simple", param, onSuccess, onFailed);
}

/**
 * 手机号登录
 */
function fetchMobileLogin(mobile, pwd, onSuccess, onFailed) {
  var param = { "mobile": mobile, "pwd": pwd };
  param['deviceId'] = "23434234sfas";
  param['deviceName'] = 'wx';
  base_server.postRequest("user/m/login", param, onSuccess, onFailed);
}

/**
 * 查看用户详情
 */
function fetchUserDetail(token, onSuccess, onFailed) {
  var param = { "token": token};
  base_server.postRequest("user/detail", param, onSuccess, onFailed);
}

/**
 * 订单统计
 */
function fetchOrderStatistics(token, onSuccess, onFailed) {
  var param = { "token": token };
  base_server.postRequest("order/statistics", param, onSuccess, onFailed);
}

module.exports = {
  fetchUserLogin: fetchUserLogin,
  fetchMobileLogin: fetchMobileLogin,
  fetchUserDetail: fetchUserDetail,
  fetchOrderStatistics: fetchOrderStatistics
}