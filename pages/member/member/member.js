// pages/member/member/member.js

const pageUrls = require('../../../utils/page_url.js')
const server = require('../../../servers/user_server.js')
const userModel = require('../../../model/login_user_model.js')
const consts = require('../../../utils/consts.js')

const app = getApp();

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

  // 请求订单统计
  fetchOrderStatistics: function () {
    var isLogin = app.globalData.user.isLogin;
    if (!isLogin) {
      return;
    }


    var token = app.globalData.user.token;
    var that = this;
    server.fetchOrderStatistics(token,
      function (res) {
        for (let i = 0; i < consts.orderInfo.length; i++) {
          var item = consts.orderInfo[i];
          item.value = res[item.valueKey];
          if (i == 0) {
            item.value = 33;
          }
        }

        that.setData({
          orderInfo: consts.orderInfo
        });

        console.log(consts.orderInfo);
      }  
    );
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

  // 我的订单点击事件
  orderViewTap: function (e) {
    console.log(e);

    

  },

  // 菜单功能点击事件
  functionViewTap: function (e) {
    console.log(e);
  }
})