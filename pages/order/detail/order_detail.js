// pages/order/detail/order_detail.js

const server = require('../../../servers/order_server.js');
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    orderInfo: null,
    goods: [],
    address: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.id = options.id;
    this.fetchOrderDetail();
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

  onPullDownRefresh: function() {
    this.fetchOrderDetail();
  },

  // 请求订单详情
  fetchOrderDetail: function() {
    var token = app.globalData.user.token;
    server.fetchOrderDetail(token, this.data.id).then((res)=>{
      console.log(res);
      this.setData({
        orderInfo: res.orderInfo,
        goods: res.goods,
        address: res.logistics,
      })
    }).catch((err) => {
      wx.showToast({
        title: err.message,
      })
    }).finally(() => {
      wx.stopPullDownRefresh()
    });
  }
})