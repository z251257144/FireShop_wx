// pages/member/member/member.js

const pageUrls = require('../../../utils/page_url.js')
const server = require('../../../servers/user_server.js')
const orderServer = require('../../../servers/order_server.js');
const userModel = require('../../../model/login_user_model.js')
const consts = require('../../../utils/consts.js')
const userUtil = require('../../../utils/user_util.js')

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: app.globalData.user,
    avatarUrl: "/images/member/my_account0.png",
    orderInfo: consts.orderInfo,
    functionInfo: consts.functionInfo,
    orderCount: {}
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
    this.setData({
      user: app.globalData.user,
    });
    this.fetchOrderStatistics();
  },

  // 请求订单统计
  fetchOrderStatistics: function () {
    if (!userUtil.isLogin()) {
      return;
    }


    var token = userUtil.currentUser().token;
    var that = this;
    orderServer.fetchOrderStatistics(token,
      function (res) {
        that.dealOrderBadge(res);
        that.setData({
          orderInfo: consts.orderInfo
        });
      },
      function (err) {
      }  
    );
  },

  // 处理订单数量角标
  dealOrderBadge: function (res) {
    for (let i = 0; i < consts.orderInfo.length; i++) {
      var item = consts.orderInfo[i];
      item.value = res[item.valueKey];

      if (item.value < 10) {
        item.valueWidth = "30rpx";
      }
      else if (item.value < 100) {
        item.valueWidth = "45rpx";
      }
      else {
        item.valueWidth = "60rpx";
      }
    }
  },

  // 登录
  userLogin: function (e) {
    wx.navigateTo({
      url: pageUrls.user.login,
    })
  },

  // 登出
  userLogout: function (e) {
    var that = this;
    wx.showModal({
      title: '是否退出登录？',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          that.clearLoginInfo();
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  // 清除用户缓存
  clearLoginInfo: function () {
    let model = userModel.clearUser;
    app.globalData.user = model;
    this.setData({
      user: app.globalData.user,
    });
    wx.removeStorage({
      key: consts.storage_keys.token,
      success: function(res) {},
    })
  },

  // 显示全部订单
  showAllOrder: function (e) {
    if (!userUtil.checkUserLogin()) {
      return;
    }
    
    wx.navigateTo({
      url: pageUrls.order.list,
    })
  },

  // 我的订单点击事件
  orderViewTap: function (e) {
    if (!userUtil.checkUserLogin()) {
      return;
    }

    var index = e.currentTarget.id;
    var item = this.data.orderInfo[index];
    wx.navigateTo({
      url: pageUrls.order.list + "?index=" + item.type,
    })
  },

  // 菜单功能点击事件
  functionViewTap: function (e) {
    if (!userUtil.checkUserLogin()) {
      return;
    }
    
    var index = e.currentTarget.id;
    var item = this.data.functionInfo[index];
    if (item.url == null) {
      console.log("链接功能不存在");
      console.log(item);
      return;
    }

    wx.navigateTo({
      url: item.url,
    })
  }
})