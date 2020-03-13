// pages/goods/goods_detail.js

const server = require('../../servers/goods_server.js')
const consts = require('../../utils/consts.js')
const pageUrl = require('../../utils/page_url.js')

var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    googsId: null,

    basicInfo: null,
    content: null,
    pics: null,

    // 商品收藏标识
    goodsFavorite: false,

    // 切换标识
    active: 0,

    safe_bottom_height: consts.safe_bottom_height(),

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.googsId);
    this.data.googsId = options.googsId;
    this.fetchGoodsDetail();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.fetchGoodsFavoriteCheck();
  },
  
  // 获取商品详情数据  
  fetchGoodsDetail: function () {
    server.fetchGoodsDetail(this.data.googsId, (res) => {

      var tempContent = res.content;
      tempContent = tempContent.replace(/\<img/gi, '<img style="width:100%;height:auto" ')

      this.setData({
        basicInfo: res.basicInfo,
        content: tempContent,
        pics: res.pics,
      })
    }, (error) => {
      console.log(error);
    });
  },

  // 检测是否已收藏
  fetchGoodsFavoriteCheck: function () {
    var isLogin = app.globalData.user.isLogin;
    if (!isLogin) {
      return;
    }


    var token = app.globalData.user.token;
    var that = this;
    server.fetchGoodsFavoriteCheck(token, this.data.googsId)
    .then((res) => {
      that.setData({
        goodsFavorite: true,
      })
    });
  },

  // 添加商品收藏
  fetchGoodsFavoriteAdd: function () {
    var token = app.globalData.user.token;
    var that = this;
    wx.showLoading();
    server.fetchGoodsFavoriteAdd(token, this.data.googsId)
    .then((res) => {
      that.setData({
        goodsFavorite: true,
      })
    }).catch((err) => {
      wx.showToast({
        title: err.msg,
      })
    }).finally(() => {
      wx.hideLoading()
    });
  },

  // 删除商品收藏
  fetchGoodsFavoriteDelete: function () {
    var token = app.globalData.user.token;
    var that = this;
    wx.showLoading();
    server.fetchGoodsFavoriteDelete(token, this.data.googsId)
    .then((res) => {
      that.setData({
        goodsFavorite: false,
      })
    }).catch((err) => {
      wx.showToast({
        title: err.msg,
      })
    }).finally(() => {
      wx.hideLoading()
    });
  },

  // 收藏按钮点击
  favoriteTap: function(e) {
    var isLogin = app.globalData.user.isLogin;
    if (!isLogin) {
      wx.navigateTo({
        url: pageUrl.user.login,
      })
      return;
    }

    if (this.data.goodsFavorite) {
      this.fetchGoodsFavoriteDelete();
    }
    else {
      this.fetchGoodsFavoriteAdd();
    }
  }

})