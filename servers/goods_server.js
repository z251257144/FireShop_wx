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

/**
 * 检测是否已收藏
 */
function fetchGoodsFavoriteCheck(token, id) {
  var param = { "token": token, "goodsId": id };
  return base_server.getPromise("shop/goods/fav/check", param);
}

/**
 * 添加商品收藏
 */
function fetchGoodsFavoriteAdd(token, id) {
  var param = { "token": token, "goodsId": id };
  return base_server.getPromise("shop/goods/fav/add", param);
}

/**
 * 删除商品收藏
 */
function fetchGoodsFavoriteDelete(token, id) {
  var param = { "token": token, "goodsId": id };
  return base_server.getPromise("shop/goods/fav/delete", param);
}

/**
 * 商品收藏列表
 */
function fetchGoodsFavoriteList(token, page) {
  var param = { "token": token, "page": page, "pageSize": 20 };
  return base_server.getPromise("shop/goods/fav/list", param);
}

module.exports = {
  fetchGoodsDetail: fetchGoodsDetail,
  fetchCategoryList: fetchCategoryList,
  fetchGoodsFavoriteCheck: fetchGoodsFavoriteCheck,
  fetchGoodsFavoriteAdd: fetchGoodsFavoriteAdd,
  fetchGoodsFavoriteDelete: fetchGoodsFavoriteDelete,
  fetchFavoriteList: fetchGoodsFavoriteList
}