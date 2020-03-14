// pages/points/list/points_list_page.js

const server = require('../../../servers/user_server.js');
const userUtil = require('../../../utils/user_util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    score: 0,
    page: 0,
    scoreList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchScoreList(0);
    this.fetchUserAmount();
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.fetchScoreList(0);
    this.fetchUserAmount();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.fetchScoreList(this.data.page+1);
  },

  // 积分明细记录 
  fetchScoreList: function(page) {
    var token = userUtil.currentUser().token;
    var that = this;
    server.fetchScoreList(token, page).then((res)=>{
      that.data.page = page;
      console.log(res);
      that.setData({
        scoreList: res.result
      })
    });
  },

  // 查看用户积分
  fetchUserAmount: function () {
    var token = userUtil.currentUser().token;
    var that = this;
    server.fetchUserAmount(token).then((res) => {
      that.setData({
        score: res.score
      });
    });
  },

})