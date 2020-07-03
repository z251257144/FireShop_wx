
Component({
  properties: {

  },

  data: {
    flag: false,
    wrapAnimate: 'wrapAnimate',
    bgOpacity: 0,
    frameAnimate: 'frameAnimate',
    value: [0],
    array: [],
    index: -1,
  },

  properties: {
    frameTitle: {
      type: String,
      value: '标题',
    }
  },

  methods: {
    show(array, index) {
      if (index == null || index < 0 ) {
        index = 0;
      }
      
      this.data.index = index;
      this.showFrame();
      this.setData({
        array:array,
        value: [index]
      });
    },

    showFrame() {
      this.setData({ flag: true, wrapAnimate: 'wrapAnimate', frameAnimate: 'frameAnimate' });
    },

    hideFrame() {
      const that = this;
      that.setData({ wrapAnimate: 'wrapAnimateOut', frameAnimate: 'frameAnimateOut' });
      setTimeout(() => {
        that.setData({ flag: false })
      }, 400)
    },

    catchNone() {
      //阻止冒泡
    },

    _confirmEvent() {
      this.hideFrame();
      // 点击事件带参传入父级
      this.triggerEvent('confirmSelect', this.data.index)
    },

    bindChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.data.index = e.detail.value;
    },
  }
})
