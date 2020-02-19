const base_server = require('./base_server.js');

/**
 * 获取轮播图数据  
 */
function fetchTopData(onSuccess, onFailed) {
  fetchBannerListData("top", onSuccess, onFailed);
}

/**
 * 获取Sale数据  
 */
function fetchSaleData(onSuccess, onFailed) {
  fetchBannerListData("sale", onSuccess, onFailed);
}

/**
 * 获取热门活动数据  
 */
function fetchHotData(onSuccess, onFailed) {
  fetchBannerListData("Hot", onSuccess, onFailed);
}

/**
 * 获取主页活动数据  
 */
function fetchBannerListData(type, onSuccess, onFailed) {
  var param = { "type": type };
  base_server.getRequest("banner/list", param, onSuccess, onFailed);
}

module.exports = {
  fetchTopData: fetchTopData,
  fetchSaleData: fetchSaleData,
  fetchHotData: fetchHotData
}