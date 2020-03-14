// pages/goods/favorite/index.js

const server = require('../../../servers/goods_server.js')
const userUtil = require('../../../utils/user_util.js')
const pageUrls = require('../../../utils/page_url.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 0,
    goods: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchFavoriteList(0);
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
    this.fetchFavoriteList(0);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.fetchFavoriteList(this.data.page+1);
  },

  // 商品收藏列表
  fetchFavoriteList: function (page) {
    var token = userUtil.currentUser().token;
    var that = this;
    server.fetchFavoriteList(token, page).then((res) => {
      that.data.page = page;
      that.setData({
        goods: res
      })
    }).finally(()=>{
      wx.stopPullDownRefresh()
      
    });
  },

  // 显示商品详情
  showGoodsDetail: function(e) {
    console.log(e)
    wx.navigateTo({
      url: pageUrls.goods.detail + "?googsId=" + e.currentTarget.id,
    })
  }

})