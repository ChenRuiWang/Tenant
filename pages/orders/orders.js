// pages/order/order.js
<<<<<<< HEAD
=======
const App = getApp();
>>>>>>> All
Page({
  /**
   * 页面的初始数据
   */
  data: {
    active: 1,
<<<<<<< HEAD
=======
    navH: null,
>>>>>>> All
    orders: [
      {
        'id': 1,
        'name': '第一笔',
        'time': '2018-5-1',
        'pay_status': 1,
        'real_deposit': 2000,
        'deposit': 2000,
        'rent': 2000,
        'estate': 20,
        'door': 20,
        'water': 20,
        'electric': 20,
        'repair': 20,
        'arrears': 20
      },
      {
        'id': 2,
        'name': '第二笔',
        'time': '2018-6-1',
        'pay_status': 1,
        'real_deposit': 2000,
        'deposit': 2000,
        'rent': 2000,
        'estate': 20,
        'door': 20,
        'water': 20,
        'electric': 20,
        'repair': 20,
        'arrears': 20
      },
      {
        'id': 3,
        'name': '第三笔',
        'time': '2018-6-1',
        'pay_status': 1,
        'real_deposit': 2000,
        'deposit': 2000,
        'rent': 2000,
        'estate': 20,
        'door': 20,
        'water': 20,
        'electric': 20,
        'repair': 20,
        'arrears': 20
      }
    ]
  },
  choose_type(e) {
    return this.setData({
      active: !this.data.active
    });
  },
  toggle(e) {
    let index = e.currentTarget.dataset.index;
    let orders = this.data.orders;
    let data = orders[index];
    data.flag = !data.flag;
    this.setData({
      orders: orders
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
<<<<<<< HEAD
  
=======
    this.setData({
      navH: App.globalData.navHeight
    });
>>>>>>> All
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