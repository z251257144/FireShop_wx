const consts = require('utils/consts.js');
const userUtil = require('utils/user_util.js');

App({

  globalData: {
    user: null
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    userUtil.getUserDetail();
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
})
