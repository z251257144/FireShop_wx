
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
function fetchOrderList(param, onSuccess, onFailed) {
  base_server.postRequest("order/list", param, onSuccess, onFailed);
}

/**
 * 获取订单详情
 */
function fetchOrderDetail(token, id, onSuccess, onFailed) {
  var param = { "token": token };
  base_server.postRequest("order/detail", param, onSuccess, onFailed);
}

module.exports = {
  fetchOrderStatistics: fetchOrderStatistics,
  fetchOrderList: fetchOrderList,
  fetchOrderDetail: fetchOrderDetail,
}