// pages/points/check_in/points_check_in_page.js

const server = require('../../../servers/user_server.js');
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    score: 0,
    hasCheck: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchScoreTodaySigned();
    this.fetchUserAmount();
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

  // 签到
  fetchScoreSign: function (e) {
    wx.showLoading()
    var token = app.globalData.user.token;
    var that = this;
    server.fetchScoreSign(token).then((res) => {
      that.setData({
        hasCheck: true
      });
      that.fetchUserAmount();
    }).catch((err) => {
      wx.showToast({
        title: err.message,
      })
    }).finally(() => {
      wx.stopPullDownRefresh()
    });
  },

  // 今日签到记录
  fetchScoreTodaySigned: function () {
    var token = app.globalData.user.token;
    var that = this;
    server.fetchScoreTodaySigned(token).then((res)=>{
      that.setData({
        hasCheck: true
      });
    });
  },

  // 查看用户积分
  fetchUserAmount: function () {
    var token = app.globalData.user.token;
    var that = this;
    server.fetchUserAmount(token).then((res) => {
      that.setData({
        score: res.score
      });
    });
  },


})