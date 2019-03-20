// pages/repair/repair.js
const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: 0,
    type: null,
    images: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      height: App.globalData.navHeight
    });
  },

  bindTypeInput(e) {
    this.setData({
      type: e.detail.value
    });
  },

  back(e) {
    wx.navigateBack({
      delta: 1
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
  
  },
  chooseImage(e) {
    const self = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],  //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      success: res => {
        const images = this.data.images.concat(res.tempFilePaths);
        // 限制最多只能留下3张照片
        this.setData({
          images: images.length <= 4 ? images : images.slice(0, 4)
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
  confirm() {
    wx.navigateTo({
      url: './success/success'
    });
  }
})