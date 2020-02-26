// pages/goods/goods_detail.js

const server = require('../../servers/goods_server.js')
const consts = require('../../utils/consts.js')

var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    googsId: null,

    basicInfo: null,
    content: null,
    pics: null,

    // 商品收藏标识
    goods_collect: false,

    // 切换标识
    active: 0,

    safe_bottom_height: consts.safe_bottom_height(),

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.googsId);
    this.data.googsId = options.googsId;
    this.fetchGoodsDetail();
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

  // 获取商品详情数据  
  fetchGoodsDetail: function () {
    server.fetchGoodsDetail(this.data.googsId,(res) => {

      var tempContent = res.content;
      tempContent = tempContent.replace(/\<img/gi, '<img style="width:100%;height:auto" ')

      this.setData({
        basicInfo: res.basicInfo,
        content: tempContent,
        pics: res.pics,
      })
    }, (error) => {
      console.log(error);
    });
  },
})