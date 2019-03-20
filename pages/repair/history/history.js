// pages/repair/history/history.js
const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: null,
    items: [
      {
        'number': '第一次',
        'status': '未处理',
        'type': '水路管件',
        'choose': '水龙头',
        'photos': [],
        'reason': '无',
        'repairman': '章程',
        'phone': '17607475471'
      },
      {
        'number': '第二次',
        'status': '未处理',
        'type': '水路管件',
        'choose': '水龙头',
        'photos': [],
        'reason': '无',
        'repairman': '章程',
        'phone': '17607475471'
      },
      {
        'number': '第三次',
        'status': '未处理',
        'type': '水路管件',
        'choose': '水龙头',
        'photos': [],
        'reason': '无',
        'repairman': '章程',
        'phone': '17607475471'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      height: App.globalData.navHeight
    });
  },


  toggle(e) {
    let index = e.currentTarget.dataset.index;
    let items = this.data.items;
    let data = items[index];
    data.show = !data.show;
    this.setData({
      items: items
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