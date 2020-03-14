// pages/member/address-list/index.js

const server = require('../../../servers/user_server.js');
const userUtil = require('../../../utils/user_util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchAddressList();
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
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 获取所有的收货地址
   */
  fetchAddressList: function(e) {
    var token = userUtil.currentUser().token;
    var that = this;
    server.fetchAddressList(token).then((res) => {
      console.log(res);
      that.setData({
        addressList: res
      })
    });
  }

})