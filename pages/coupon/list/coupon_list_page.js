// pages/coupon/list/coupon_list_page.js

const server = require('../../../servers/user_server.js');
const userUtil = require('../../../utils/user_util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    coupons:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchDiscountsCoupons();
  },

  // 获取可领取优惠券
  fetchDiscountsCoupons: function() {
    var token = userUtil.currentUser().token;
    var that = this;
    server.fetchDiscountsCoupons(token).then((res)=>{
      console.log(res)
      that.setData({
        coupons: res
      });
    });
  },

  // 领取优惠券
  fetchCoupon: function(id) {
    var token = userUtil.currentUser().token;
    var that = this;
    wx.showLoading()
    server.fetchCoupon(token, id).then((res) => {
      console.log(res)
      wx.hideLoading()
      wx.showToast({
        title: "领取成功"
      })
    }).catch((err) => {
      wx.hideLoading()
      wx.showToast({
        title: err.msg,
        icon: "none"
      })
    });
  },

  // 优惠券界面点击
  couponItemTap: function(e) {
    if (!userUtil.checkUserLogin()) {
      return;
    }

    this.fetchCoupon(e.currentTarget.id);
  }
})