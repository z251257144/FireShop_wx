// pages/order/detail/order_detail.js

const server = require('../../../servers/order_server.js');
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    orderInfo: null,
    goods: [],
    address: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.id = options.id;
    this.fetchOrderDetail();
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

  onPullDownRefresh: function() {
    this.fetchOrderDetail();
  },

  // 请求订单详情
  fetchOrderDetail: function() {
    var token = app.globalData.user.token;
    var that = this;
    server.fetchOrderDetail(token, this.data.id).then((res)=>{
      console.log(res);

      var orderInfo = res.orderInfo;
      that.setOrderStutasIcon(orderInfo);

      var address = res.logistics;
      that.setFullAddress(address);

      that.setData({
        orderInfo: orderInfo,
        goods: res.goods,
        address: address,
      })
    }).catch((err) => {
      wx.showToast({
        title: err.message,
      })
    }).finally(() => {
      wx.stopPullDownRefresh()
    });
  },

  //设置订单状态图标
  setOrderStutasIcon: function(orderInfo) {
    var status = parseInt(orderInfo.status);
         
    if (status == -1) {
      //-1 已关闭
      orderInfo.statusIcon = "/images/order/icon-ddgb.png";
    }
    else if (status == 0) {
      // 0 待支付
      orderInfo.statusIcon = "/images/order/icon-ddfk.png";
    }
    else if (status == 1) {
      // 1 已支付待发货
      orderInfo.statusIcon = "/images/order/icon-ddfh.png";
    }
    else if (status == 2) {
      //2 已发货待确认
      orderInfo.statusIcon = "/images/order/icon-ddfh.png";
    }
    else if (status == 3) {
      // 3 确认收货待评价
      orderInfo.statusIcon = "/images/order/icon-ddsh.png";
    }
    else if (status == 4) {
      // 4 已评价
      orderInfo.statusIcon = "/images/order/icon-jycg.png";
    }
  },

  //拼接地址
  setFullAddress: function (address) {
    if (address == null) {
      return;
    }

    var fullAddress = address.provinceStr + " " + address.cityStr + " " + address.areaStr + " " + address.address;
    address.fullAddress = fullAddress;
  }
})