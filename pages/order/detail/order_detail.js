// pages/order/detail/order_detail.js

const server = require('../../../servers/order_server.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id
    });
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

  // 请求订单详情
  fetchOrderDetail: function() {
    
  }
})