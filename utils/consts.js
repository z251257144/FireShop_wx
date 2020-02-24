// 首页导航URL
const home_navigate_urls = {
  goods_detail: "/goodsDetail",
};

const is_iphone_x_11 = false;

function safe_bottom_height() {
  console.log(this.is_iphone_x_11);
  return this.is_iphone_x_11 ? 68 : 0;
}

function safe_bottom_height_rpx() {
  return this.is_iphone_x_11 ? "68rpx" : "0rpx";
}

exports.home_navigate_urls = home_navigate_urls;
exports.safe_bottom_height = safe_bottom_height;
exports.safe_bottom_height_rpx = safe_bottom_height_rpx;
exports.is_iphone_x_11 = is_iphone_x_11;