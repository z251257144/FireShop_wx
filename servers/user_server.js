

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
 * 签到
 */
function fetchScoreSign(token) {
  var param = { "token": token };
  return base_server.getPromise("score/sign", param);
}

/**
 * 今日签到记录
 */
function fetchScoreTodaySigned(token) {
  var param = { "token": token };
  return base_server.getPromise("score/today-signed", param);
}

/**
 * 查看用户资产
 */
function fetchUserAmount(token) {
  var param = { "token": token };
  return base_server.getPromise("user/amount", param);
}

/**
 * 积分明细记录
 */
function fetchScoreList(token, page) {
  var param = { "token": token, "page": page, "pageSize": 20 };
  return base_server.getPromise("score/logs", param);
}

/**
 * 获取可领取优惠券列表
 */
function fetchDiscountsCoupons(token) {
  var param = {};
  if (token != null) {
    param.token = token;
  }
  return base_server.getPromise("discounts/coupons", param);
}

/**
 * 领取优惠券
 */
function fetchCoupon(token, id) {
  var param = { "token": token, "id": id };
  return base_server.getPromise("discounts/fetch", param);
}

/**
 * 领取优惠券
 */
function fetchMyCoupons(token, status) {
  var param = { "token": token, "status": status };
  return base_server.getPromise("discounts/my", param);
}



module.exports = {
  fetchUserLogin: fetchUserLogin,
  fetchMobileLogin: fetchMobileLogin,
  fetchUserDetail: fetchUserDetail,
  fetchScoreSign: fetchScoreSign,
  fetchScoreTodaySigned: fetchScoreTodaySigned,
  fetchUserAmount: fetchUserAmount,
  fetchScoreList: fetchScoreList,
  fetchDiscountsCoupons: fetchDiscountsCoupons,
  fetchCoupon: fetchCoupon,
  fetchMyCoupons: fetchMyCoupons,
}