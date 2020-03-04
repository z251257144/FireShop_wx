// pages/order/order_list/order_list.js

const server = require('../../../servers/user_server.js');
const consts = require('../../../utils/consts.js');
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderTypeConfig: consts.orderTypeConfig,
    orderTypeIndex: 0,
    page: 0,
    orderList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchOrderList()
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

  // 请求订单列表
  fetchOrderList: function () {
    var token = app.globalData.user.token;
    var param = { "token": token, "page": this.data.page};
    if (this.data.orderTypeConfig != null) {
      var typeItem = this.data.orderTypeConfig[this.data.orderTypeIndex];
      console.log(typeItem);
      param["status"] = typeItem["type"];
    }

    var that = this;
    server.fetchOrderList(
      param,
      function (res) {
        var list = res["orderList"];
        var goodsMap = res.goodsMap;
        for (let i = 0; i < list.length; i++) {
          var item = list[i];
          item["goodsList"] = goodsMap[item.id];
        }
        that.setData({
          orderList: list
        });
      },
      function (err) {}
    );
  },

  // 切换类型
  orderTypeChanged: function(e) {
    console.log(e.detail);
    this.data.orderTypeIndex = e.detail.index;
    this.fetchOrderList();
  } 

})