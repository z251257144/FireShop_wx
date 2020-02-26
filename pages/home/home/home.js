// pages/home/home/home.js

const server = require('../../../servers/home_server.js')
const consts = require('../../../utils/consts.js')
const pageUrls = require('../../../utils/page_url.js')

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
        topData: res
      })
    })

    // 获取Sale数据  
    server.fetchSaleData((res) => {
      this.setData({
        saleData: res
      })
    })

    // 获取热门活动数据
    server.fetchHotData((res) => {
      this.setData({
        hotData: res
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

  // 轮播图点击
  swiperTap: function (e) {
    var index = e.currentTarget.id;
    var data = this.data.topData[index];
    console.log(data);
    this.chechData(data);
  },

  // 功能界面点击
  saleViewTap: function (e) {
    var index = e.currentTarget.id;
    var data = this.data.saleData[index];
    console.log(data);
  },
  
  // 热门活动界面点击
  hotViewTap: function (e) {
    var index = e.currentTarget.id;
    var data = this.data.hotData[index];
    console.log(data);
  },

  chechData: function (data) {
    if (consts.home_navigate_urls.goods_detail == data.linkUrl) {
      this.showGoodsDetail(data.remark);
    }
    else {
      console.log("未找到对应URL：" + data.linkUrl);
    }
    
  },

  // 显示商品详情
  showGoodsDetail: function (id) {
    console.log(id);
    wx.navigateTo({
      url: pageUrls.goods.detail + "?googsId=" + id,
    })
  }

  
})