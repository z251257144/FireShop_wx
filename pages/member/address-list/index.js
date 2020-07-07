// pages/member/address-list/index.js

const server = require('../../../servers/user_server.js')
const userUtil = require('../../../utils/user_util.js')
const pageUtil = require('../../../utils/page_url.js')

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
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.fetchAddressList();
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.fetchAddressList();
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
  },

  // 显示添加地址界面
  showAddressAdd: function(e) {
    wx.navigateTo({
      url: pageUtil.user.address_add,
    })
  }

})