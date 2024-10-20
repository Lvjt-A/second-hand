// tradedetail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    orderCount: 2, 
    orders: [
      {
        imageUrl: '/images/trade1.jpg', // 订单图片的 URL
        price: 80, // 成交金额
        date: '2024-10-09 12:00:00', // 成交时间
        url:'/packageA/pages/business/watch/watch'
      },
      {
        imageUrl: '/images/trade2.jpg', // 订单图片的 URL
        price: 85, // 成交金额
        date: '2024-10-11 8:01:05', // 成交时间
        url:'/packageA/pages/business/shoes/shoes'
      }
    ]
  },
  goto1(){
    wx.navigateTo({
      url: '/packageA/pages/business/watch/watch',
    })
  },
  goto2(){
    wx.navigateTo({
      url: '/packageA/pages/business/shoes/shoes',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 这里可以加载订单数据
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {}
});
