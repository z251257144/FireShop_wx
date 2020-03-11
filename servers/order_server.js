
const base_server = require('./base_server.js');

/**
 * 订单统计
 */
function fetchOrderStatistics(token, onSuccess, onFailed) {
  var param = { "token": token };
  base_server.postRequest("order/statistics", param, onSuccess, onFailed);
}

/**
 * 订单列表
 */
function fetchOrderList(param) {
  return base_server.postPromise("order/list", param);
}

/**
 * 获取订单详情
 */
function fetchOrderDetail(token, id) {
  var param = { "token": token, "id": id };
  return base_server.postPromise("order/detail", param);
}

module.exports = {
  fetchOrderStatistics: fetchOrderStatistics,
  fetchOrderList: fetchOrderList,
  fetchOrderDetail: fetchOrderDetail,
}