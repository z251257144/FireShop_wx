// pages/member/address-add/index.js

const server = require('../../../servers/home_server.js')
const verificater = require('../../../utils/verificater.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    provinceList: [],
    provinceIndex: -1,

    cityList: [],
    cityIndex: -1,

    countyList: [],
    countyIndex: -1,

    name: null,
    mobile: null,
    address: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchProvinceList(false);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  // 选择省份函数
  changeProvince: function (e) {
    if (this.data.provinceList == null || this.data.provinceList.length == 0) {
      this.fetchProvinceList(true);
    }
    var res = this.data.provinceList.map(function (item, index, ary) {
      return item["name"];
    })
    this.selectComponent('#region-picker-province').show(res, this.data.provinceIndex);
  },

  //获取省份列表
  fetchProvinceList: function (loading) {
    if (loading) {
      wx.showLoading({
        title: '加载中...',
      })
    }

    var that = this;
    server.fetchProvinceList().then((res) => {
      that.setData({
        provinceList: res
      })
      if (loading) {
        that.changeProvince(null);
      }
    }).catch((err) => {
      if (loading) {
        wx.showToast({
          title: err.msg,
        })
      }
    }).finally(() => {
      wx.hideLoading();
    });
  },

  //确认省份选择
  confirmSelectProvince: function (e) {
    if (this.data.provinceIndex != e.detail) {
      this.setData({
        cityList: [],
        cityIndex: -1,
        countyList: [],
        countyIndex: -1,
      });
    }

    this.setData({
      provinceIndex: e.detail,
    });

    this.fetchCityList(false);
  },

  // 选择城市函数
  changeCity: function (e) {
    if (this.data.cityList == null || this.data.cityList.length == 0) {
      this.fetchCityList(true);
    }
    var res = this.data.cityList.map(function (item, index, ary) {
      return item["name"];
    })
    this.selectComponent('#region-picker-city').show(res, this.data.cityIndex);
  },

  //获取城市列表
  fetchCityList: function (loading) {
    if (this.data.provinceIndex < 0) {
      return;
    }
    if (loading) {
      wx.showLoading({
        title: '加载中...',
      })
    }

    var province = this.data.provinceList[this.data.provinceIndex];
    var that = this;
    server.fetchRegionList(province["id"]).then((res) => {
      that.setData({
        cityList: res
      })
      if (loading) {
        that.changeCity(null);
      }
    }).catch((err) => {
      if (loading) {
        wx.showToast({
          title: err.msg,
        })
      }
    }).finally(() => {
      wx.hideLoading();
    });
  },

  //确认城市选择
  confirmSelectCity: function (e) {
    if (this.data.cityIndex != e.detail) {
      this.setData({
        countyList: [],
        countyIndex: -1,
      });
    }

    this.setData({
      cityIndex: e.detail,
    });

    this.fetchCountyList(false);
  },

  // 选择区县函数
  changeCounty: function (e) {
    console.log(e);
    if (this.data.countyList == null || this.data.countyList.length == 0) {
      this.fetchCountyList(true);
    }
    var res = this.data.countyList.map(function (item, index, ary) {
      return item["name"];
    })
    this.selectComponent('#region-picker-county').show(res, this.data.countyIndex);
  },

  //获取区县列表
  fetchCountyList: function (loading) {
    console.log("fetchCountyList");
    if (this.data.cityIndex < 0) {
      return;
    }
    if (loading) {
      wx.showLoading({
        title: '加载中...',
      })
    }

    var city = this.data.cityList[this.data.cityIndex];
    var that = this;
    server.fetchRegionList(city["id"]).then((res) => {
      that.setData({
        countyList: res
      })
      if (loading) {
        that.changeCounty(null);
      }
    }).catch((err) => {
      if (loading) {
        wx.showToast({
          title: err.msg,
        })
      }
    }).finally(() => {
      wx.hideLoading();
    });
  },

  //确认区县选择
  confirmSelectCounty: function (e) {
    this.setData({
      countyIndex: e.detail,
    });
  },

  nameInput: function(e) {
    this.setData({
      name: e.detail.value,
    });
  },

  mobileInput: function (e) {
    this.setData({
      mobile: e.detail.value,
    });
  },

  addressInput: function (e) {
    this.setData({
      address: e.detail.value,
    });
  },

  // 保存地址
  saveAddress: function (e) {
    if (!this.checkAddressInfo()) {
      return;
    }
  },

  showMessage: function(message) {
    wx.showToast({
      title: message,
      icon: 'none'
    });
  },

  checkAddressInfo: function() {
    if (this.data.name == null || this.data.name.length == 0) {
      this.showMessage("请输入收件人姓名");
      return false;
    }

    if (!verificater.checkPhone(this.data.mobile)) {
      this.showMessage("请输入有效的手机");
      return false;
    }

    if (this.data.provinceIndex < 0) {
      this.showMessage("请选择省份");
      return false;
    }

    if (this.data.cityIndex < 0) {
      this.showMessage("请选择城市");
      return false;
    }

    if (this.data.countyIndex < 0) {
      this.showMessage("请选择区县");
      return false;
    }

    if (this.data.address == null || this.data.address.length == 0) {
      this.showMessage("请输入详细地址");
      return false;
    }

    return true;
  }


})