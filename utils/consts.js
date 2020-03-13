// 首页导航URL
const home_navigate_urls = {
  goods_detail: "/goodsDetail",
  point_check_in: "/point/check_in",
  coupon_list: "/coupon/list"
};


// 数据缓存Keys
const storage_keys = {
  token: "user_token",
};

// 我的-订单配置
const orderInfo = [
  {
    title: "待付款",
    icon: "/images/member/orderform_pay.png",
    valueKey:"count_id_no_pay",
    type: 1
  },
  {
    title: "待发货",
    icon: "/images/member/orderform_ship.png",
    valueKey: "count_id_no_transfer",
    type: 2
  },
  {
    title: "待收货",
    icon: "/images/member/delivering.png",
    valueKey: "count_id_no_confirm",
    type: 3
    
  },
  {
    title: "待评价",
    icon: "/images/member/orderform.png",
    valueKey: "count_id_close",
    type: 4
  }
];

// 我的-功能配置
const functionInfo = [
  {
    title: "我的余额",
    value: "0 元",
    icon: "/images/member/profile_tegral.png",
  },
  {
    title: "我的积分",
    value: "3 积分",
    icon: "/images/member/jifen.png",
    url: "/pages/points/list/points_list_page"
  },
  {
    title: "我的礼券",
    icon: "/images/member/profile_ticket.png",
    url: "/pages/coupon/my/my_coupon_page"
  },
  {
    title: "我的收藏",
    icon: "/images/member/profile_collection.png",
  },
  {
    title: "我的地址",
    icon: "/images/member/profile_address.png",
  },
  {
    title: "",
    icon: "",
  }
];

// 订单列表状态配置
const orderTypeConfig = [
  {
    title: "全部",
    type: "",
  },
  {
    title: "待付款",
    type: "0",
  },
  {
    title: "待发货",
    type: "1",
  },
  {
    title: "待收货",
    type: "2",
  },
  {
    title: "待评价",
    type: "3",
  }
];



const is_iphone_x_11 = false;

function safe_bottom_height() {
  console.log(this.is_iphone_x_11);
  return this.is_iphone_x_11 ? 68 : 0;
}

function safe_bottom_height_rpx() {
  return this.is_iphone_x_11 ? "68rpx" : "0rpx";
}

exports.home_navigate_urls = home_navigate_urls;
exports.storage_keys = storage_keys;
exports.orderInfo = orderInfo;
exports.functionInfo = functionInfo;
exports.orderTypeConfig = orderTypeConfig;

exports.safe_bottom_height = safe_bottom_height;
exports.safe_bottom_height_rpx = safe_bottom_height_rpx;
exports.is_iphone_x_11 = is_iphone_x_11;