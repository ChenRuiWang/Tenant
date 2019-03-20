// pages/checkout/checkout.js
const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: 0,
    date: null,
    start: null,
    images: [],
    showDialog: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let date = this.getFormatDate();
    
    
    this.setData({
      height: App.globalData.navHeight,
      start: date,
    });
  },
  getFormatDate() {
      const date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();

      if (month >= 1 && month <= 9) {
          month = "0" + month;
      }

      if (day >= 1 && day <= 9) {
          day = "0" + day;
      }
      
      return year + '-' + month + '-' + day;
  },
  bindDateChange(e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    });
  },
  chooseImage(e) {
    const self = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],  //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      success: res => {
        const images = this.data.images.concat(res.tempFilePaths);
        // 限制最多只能留下9张照片
        this.setData({
          images: images.length <= 9 ? images : images.slice(0, 9)
        });
      }
    });
  },
  handleImagePreview(e) {
    const idx = e.target.dataset.idx;
    const images = this.data.images;
    wx.previewImage({
      current: images[idx],  //当前预览的图片
      urls: images,  //所有要预览的图片
    });
  },
  removeImage(e) {
    const idx = e.target.dataset.idx;

    let images = this.data.images;
    images.splice(idx, 1);
    this.setData({
      images: images
    });
  },
  dialog() {
    this.setData({
      showDialog: !this.data.showDialog,
    });
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

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})