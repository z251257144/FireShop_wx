// 商品相关页面URL
const goods_urls = {
  detail: "/pages/goods/detail/goods_detail",
  favorite: "/pages/goods/favorite/index"
};

// 用户相关页面URL
const user_urls = {
  login: "/pages/member/login/login",
  point_check_in: "/pages/points/check_in/points_check_in_page",
  point_list: "/pages/points/list/points_list_page",
  coupon_list: "/pages/coupon/list/coupon_list_page",
  my_coupon: "/pages/coupon/my/my_coupon_page",
  address_list: "/pages/member/address-list/index",
  address_add: "/pages/member/address-add/index",
  amount: "/pages/member/amount/index"
};

// 订单相关页面URL
const order_urls = {
  list: "/pages/order/order_list/order_list",
  detail: "/pages/order/detail/order_detail",
};

exports.goods = goods_urls;
exports.user = user_urls;
exports.order = order_urls;