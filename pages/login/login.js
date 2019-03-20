<<<<<<< HEAD
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   text: "获取验证",
   time: 60,
   timer: null,
   mobile: null,
   captcha: null,
  },
  getCode(event) {
    if (!this.data.mobile) {
      this.showTip('请输入手机号码!');
      return false;
    }
    if (!this.checkMobile(this.data.mobile)) {
      return this.showTip('请输入正确的手机号码!');
    }
    
    if (this.data.time < 60) {
      return false;
    }
    this.countDown();
    let timer = setInterval(this.countDown, 1000);
    this.setData({
      timer: timer
    });
  },
  onUnload() {
    clearInterval(this.data.timer);
  },
  getMobile(e) {
    if (e.detail.value.length < 1) {
      this.setData({
        mobile: null,
      });
    } else {
      this.setData({
        mobile: e.detail.value
      });
    }
  },
  getCaptcha(e) {
    if (e.detail.value.length < 1) {
      this.setData({
        captcha: null,
      });
    } else {
      this.setData({
        captcha: e.detail.value
      });
    }
  },
  countDown() {
    console.log(this.data.time);
    if (this.data.time > 0) {
      this.data.time --;
      this.setData({
        text: this.data.time + '秒',
      });
    } else {
      // 清除定时器
      clearInterval(this.data.timer);
      this.setData({
        text: '获取验证',
      });
    }
  },
  submit(event) {
    if (!this.data.mobile) {
      return this.showTip('请输入手机号码!');
    }
    if (!this.checkMobile(this.data.mobile)) {
      return this.showTip('请输入正确的手机号码!');
    }
    if (!this.data.captcha) {
      return this.showTip('请输入验证码');
    }
    console.log('手机号码: ' + this.data.mobile);
    console.log('验证码: ' + this.data.captcha);
    // TODO: 接口验证

    // 页面跳装
    wx.switchTab({
      url: '../order/order'
    });
  },
  showTip(text, icon='none', duration=1000) {
    wx.showToast({
      title: text,
      icon: icon,
      duration: duration
    });
  },
  checkMobile(mobile) {
    let reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
    return reg.test(mobile)
  }
})
=======
//index.js
//获取应用实例
const App = getApp()

Page({
  data: {
    text: "获取验证",
    time: 60,
    timer: null,
    mobile: null,
    captcha: null,
  },
  onLaunch() {
    console.log(App.globalData.userInfo)
  },
  showDialog() {
    this.dialog.showDialog();
  },
  getCode(event) {
    if (!this.data.mobile) {
      this.showTip('请输入手机号码!');
      return false;
    }
    if (!this.checkMobile(this.data.mobile)) {
      return this.showTip('请输入正确的手机号码!');
    }

    if (this.data.time < 60) {
      return false;
    }
    this.countDown();
    let timer = setInterval(this.countDown, 1000);
    this.setData({
      timer: timer
    });
  },
  onUnload() {
    clearInterval(this.data.timer);
  },
  getMobile(e) {
    if (e.detail.value.length < 1) {
      this.setData({
        mobile: null,
      });
    } else {
      this.setData({
        mobile: e.detail.value
      });
    }
  },
  getCaptcha(e) {
    if (e.detail.value.length < 1) {
      this.setData({
        captcha: null,
      });
    } else {
      this.setData({
        captcha: e.detail.value
      });
    }
  },
  countDown() {
    console.log(this.data.time);
    if (this.data.time > 0) {
      this.data.time--;
      this.setData({
        text: this.data.time + '秒',
      });
    } else {
      // 清除定时器
      clearInterval(this.data.timer);
      this.setData({
        text: '获取验证',
      });
    }
  },
  submit(event) {
    if (!this.data.mobile) {
      return this.showTip('请输入手机号码!');
    }
    if (!this.checkMobile(this.data.mobile)) {
      return this.showTip('请输入正确的手机号码!');
    }
    if (!this.data.captcha) {
      return this.showTip('请输入验证码');
    }
    console.log('手机号码: ' + this.data.mobile);
    console.log('验证码: ' + this.data.captcha);
    // TODO: 接口验证

    // 页面跳装
    wx.switchTab({
      url: '../orders/orders'
    });
  },
  showTip(text, icon = 'none', duration = 1000) {
    wx.showToast({
      title: text,
      icon: icon,
      duration: duration
    });
  },
  checkMobile(mobile) {
    let reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
    return reg.test(mobile)
  },
})
>>>>>>> All
