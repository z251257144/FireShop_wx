// pages/member/address-add/index.js

const server = require('../../../servers/home_server.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 普通选择器列表设置,及初始化
    provinceList: [],
    provinceIndex: -1,

    cityIndex: -1,

    index: -1,

    show: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchProvinceList();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  //获取省份列表
  fetchProvinceList: function() {
    server.fetchProvinceList();
    var that = this;
    server.fetchProvinceList().then((res) => {
      console.log(res);
      that.setData({
        provinceList: res
      })
    });
  },

  // 选择国家函数
  changeProvince: function(e) {
    // this.setData({ 
    //   provinceIndex: e.detail.value 
    // });

      this.setData({ show: true });
    
  },

  onClose() {
    this.setData({ show: false });
  },

  // 保存地址
  saveAddress: function(e) {
    console.log(e);
  }
})