// pages/category/category.js

const server = require('../../servers/goods_server.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    allCategoryList: null,
    leftCategoryList: null,
    rightCategoryList: null,

    leftIndex: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchCategoryList();
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

  // 获取商品类别
  fetchCategoryList: function () {

    var that = this;
    server.fetchCategoryList(
      (res) => {
        that.parseCategory(res);
      },
      (err) => {

      }
    );
  },

  // 处理目录数据
  parseCategory: function (list) {
    this.data.allCategoryList = list;
    var tempList = [];
    for (let i = 0; i < list.length; i++) {
      var item = list[i];
      if (item.level == 1) {
        tempList.push(item);
      }
    }
    this.setData({
      leftCategoryList: tempList,
    });

    this.leftChangeData(0);
  },

  // 一级目录点击
  leftChange: function (e) {
    var index = e.currentTarget.id;
    this.leftChangeData(index);
  },

  // 子目录数据处理
  leftChangeData: function (index) {
    var leftItem = this.data.leftCategoryList[index];
    var tempList = [];
    for (let i = 0; i < this.data.allCategoryList.length; i++) {
      var item = this.data.allCategoryList[i];
      if (item.level == 2 && item.pid == leftItem.id) {
        tempList.push(item);
      }
    }
    this.setData({
      leftIndex: index,
      rightCategoryList: tempList,
    });
  },

  rightCategoryTap: function (e) {
    
  }


})