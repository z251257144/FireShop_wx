// pages/coupon/my/my_coupon_page.js
const server = require('../../../servers/user_server.js');
const userUtil = require('../../../utils/user_util.js');

// 优惠券配置
const couponBarConfig = [
  {
    title: "已领券",
    status: "0",
  },
  {
    title: "已失效",
    status: "1,2",
  }
];


Page({

  /**
   * 页面的初始数据
   */
  data: {
    couponBarConfig: couponBarConfig,
    type: 0,
    coupons: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchMyCoupons();
  },

  // 获取可领取优惠券
  fetchMyCoupons: function () {
    var item = this.data.couponBarConfig[this.data.type];
    var token = userUtil.currentUser().token;
    var that = this;
    server.fetchMyCoupons(token, item.status).then((res) => {
      that.dealCouponList(res);
      console.log(res)
      that.setData({
        coupons: res
      });
    }).catch((err)=>{
      that.setData({
        coupons: []
      });
    });
  },

  // 处理优惠券数据
  dealCouponList: function (res){
    for (var i = 0; i < res.length; i++) {
      var item = res[i];
      item.enable = parseInt(item.status) == 0;
    }
  },

  // 状态切换
  typeChanged: function(e) {
    this.data.type = e.detail.index;
    this.fetchMyCoupons();
  },

  // 优惠券界面点击
  couponItemTap: function (e) {
    if (!userUtil.checkUserLogin()) {
      return;
    }

    // this.fetchCoupon(e.currentTarget.id);
  }
})