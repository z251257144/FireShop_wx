// pages/member/login/login.js

const verificater = require('../../../utils/verificater.js');
const server = require('../../../servers/user_server.js')
const consts = require('../../../utils/consts.js');
const userModel = require('../../../model/login_user_model.js')

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    mobile: '',
    password: '',
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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  mobileInput: function (e) {
    console.log(e.detail.value);
    this.data.mobile = e.detail.value;
  },

  passwordInput: function (e) {
    this.data.password = e.detail.value;
  },

  // 手机号登录
  mobileLogin: function (e) {
    console.log("mobile = " + this.data.mobile);
    console.log("password = " + this.data.password);

    if (!(verificater.number.mobile).test(this.data.mobile)) {
      wx.showToast({
        title: '请输入有效的手机号码',
        icon: 'none'
      })

      return;
    }

    if (this.data.password.length == 0) {
      wx.showToast({
        title: '请输入密码',
        icon: 'none'
      })

      return;
    }

    this.fetchMobileLogin();
  },

  // 请求登录-手机号
  fetchMobileLogin: function() {
    wx.showLoading({
      title: '加载中',
    })

    var that = this;
    server.fetchMobileLogin(
      this.data.mobile,
      this.data.password,
      (res) => {
        that.fetchUserDetail(res.token);
      },
      (err) => {
        wx.hideLoading();
        console.log("err = " + err);
      },
    );
  },

  // 请求用户信息
  fetchUserDetail: function (token) {
    var that = this;
    server.fetchUserDetail(
      token,
      (res) => {
        wx.hideLoading();
        that.showLoginSuccess(token, res);
      },
      (err) => {
        wx.hideLoading();
        console.log("err = " + err);
      },
    );
  },

  // 登录成功
  showLoginSuccess: function(token, res) {
    console.log("res = " + res);

    let model = userModel.loginUserFromJson(res.base);
    app.globalData.user = model;
    app.globalData.user.token = token;

    wx.setStorage({
      key: consts.storage_keys.token,
      data: token,
    })
    wx.showToast({
      title: '登录成功',
    });

    // var that = this;
    setTimeout(function() {
      wx.navigateBack({
        
      })
    }, 1500);
  },

  showAuto: function (e) {
    var that = this;
    // 判断是否已经授权
    wx.getSetting({
      withSubscriptions: true,
      success: (res) => {
        console.log(res);
        if (res.authSetting['scope.userInfo']) {//授权了，可以获取用户信息了
          wx.getUserInfo({
            success: (res) => {
              console.log(res)
            }
          })
        } else {//未授权，跳到授权页面
          // wx.redirectTo({
          //   url: '../authorize/authorize',//授权页面
          // })
        }
      }
    })
  },

  userLogin: function(e) {
    var that = this;
    wx.login({
      success: function (res) {
        if (res.code) {
          console.log("res.code:" + res.code);
          var d = that.globalData; //这里存储了appid、secret、token串  
          server.fetchUserLogin(res.code,
            function (data) {
              console.log("data:   " + data);
            },
            function (err) {
              console.log("error:   " + err);
            }
          );
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  }
})