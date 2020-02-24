// pages/member/member/member.js

const pageUrls = require('../../../utils/page_url.js')

const orderInfo = [
  {
    title: "待付款",
    icon: "/images/member/orderform_pay.png",
  },
  {
    title: "待发货",
    icon: "/images/member/orderform_ship.png",
  },
  {
    title: "待收货",
    icon: "/images/member/delivering.png",
  },
  {
    title: "待评价",
    icon: "/images/member/orderform.png",
  }
];

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
  },
  {
    title: "我的礼券",
    icon: "/images/member/profile_ticket.png",
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

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin: false,
    orderInfo: orderInfo,
    functionInfo: functionInfo,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  // 登录
  userLogin: function (e) {
    console.log(e);

    wx.navigateTo({
      url: pageUrls.user.login,
    })
  },

  // 登出
  userLogout: function (e) {
    console.log(e);
  },

  // 我的订单点击事件
  orderViewTap: function (e) {

  }
})