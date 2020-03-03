const consts = require('utils/consts.js');
const userModel = require('model/login_user_model.js')
const server = require('servers/user_server.js')

App({

  globalData: {
    user: userModel.user
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    this.fetchUserDetail();
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
    wx.getSystemInfo({
      success: res => {
        let modelmes = res.model;
        console.log(modelmes);
        if (modelmes.search('iPhone X') != -1 || modelmes.search('iPhone 11') != -1) {
          consts.is_iphone_x_11 = true;
        }
      }
    })
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },

  // 请求用户信息
  fetchUserDetail: function () {
    var that = this;
    wx.getStorage({
      key: consts.storage_keys.token,
      success: function (token) {
        console.log("token = " + token.data);
        server.fetchUserDetail(
          token.data,
          (res) => {
            console.log("res = " + res);
            var model = userModel.loginUserFromJson(res.base);
            model.token = token.data;
            that.globalData.user = model;
            console.log("that.globalData.user = " + that.globalData.user.isLogin);
          },
          (err) => {
            console.log("err = " + err);
          },
        );
      },
    })
  },


})
