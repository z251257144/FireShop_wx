
const userModel = require('../model/login_user_model.js')
const server = require('../servers/user_server.js')
const pageUrls = require('../utils/page_url.js');
const consts = require('../utils/consts.js')


// 获取用户登录状态
function isLogin() {
  var currentUser = getApp().globalData.user;
  if (currentUser == null) {
    return false;
  }

  return currentUser.isLogin;
}

// 获取当前登录用户信息
function currentUser() {
  return getApp().globalData.user;
}

// 检测用户是否登录，如果检测未登录，同时跳转到登录界面
function checkUserLogin () {
  console.log(getApp())

  var isLogin = this.isLogin();
  console.log(isLogin)
  if (!isLogin) {
    wx.navigateTo({
      url: pageUrls.user.login,
    })
  }

  return isLogin;
}

// 使用缓存的token请求用户信息
function getUserDetail() {
  var that = this;
  wx.getStorage({
    key: consts.storage_keys.token,
    success: function (token) {
      console.log("token = " + token.data);
      that.fetchUserDetail(token.data)
    },
  })
}

// 发送请求
function fetchUserDetail (token) {
  server.fetchUserDetail(
    token,
    (res) => {
      console.log("res = " + res);
      var model = userModel.loginUserFromJson(res.base);
      model.token = token;
      getApp().globalData.user = model;
      console.log("that.globalData.user = " + model.isLogin);
    },
    (err) => {
      console.log("err = " + err);
    },
  )
}


exports.isLogin = isLogin;
exports.currentUser = currentUser;
exports.checkUserLogin = checkUserLogin;
exports.getUserDetail = getUserDetail;
exports.fetchUserDetail = fetchUserDetail;
