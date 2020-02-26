const base_server = require('./base_server.js');

/**
 * 获取商品详情数据  
 */
function fetchGoodsDetail(id, onSuccess, onFailed) {
  var param = { "id": id };
  base_server.getRequest("shop/goods/detail", param, onSuccess, onFailed);
}

/**
 * 获取商品类别
 */
function fetchCategoryList(onSuccess, onFailed) {
  var param = {};
  base_server.getRequest("shop/goods/category/all", param, onSuccess, onFailed);
}

module.exports = {
  fetchGoodsDetail: fetchGoodsDetail,
  fetchCategoryList: fetchCategoryList
}