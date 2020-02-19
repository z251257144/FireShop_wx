// pages/home/home/home.js

const server = require('../../../servers/home_server.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    topData: [],
    saleData: [],
    hotData: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 获取轮播图数据
    server.fetchTopData((res) => {
      this.setData({
        topData: res.data
      })
    })

    // 获取Sale数据  
    server.fetchSaleData((res) => {
      this.setData({
        saleData: res.data
      })
    })

    // 获取热门活动数据
    server.fetchHotData((res) => {
      this.setData({
        hotData: res.data
      })
    })
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

  swiperChange: function (e) {
    console.log(e.detail);
  }

  
})