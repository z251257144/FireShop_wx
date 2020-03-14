// components/empty-view/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 空白界面文案
    title: {
      type: String,
      value: '暂无数据',
    },

    // 图片地址
    image: {
      type: String,
      value: '/images/order/no-order.png',
    },

    // 图片地址
    imageWidth: {
      type: Number,
      value: 108,
    },

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
