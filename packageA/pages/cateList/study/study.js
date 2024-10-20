// pages/cateList/study/study.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
//商品对象url列表
goodList:[
  {
    id:0,
    url:"/p3/study1.jpg",
    name: "线圈本",
  },
  {
    id:1,
    url:"/p6/b1.jpg",
    name: "大话数据结构",
  }
],
  },
  goto1(){
    wx.navigateTo({
      url: '/pages/business/study/study',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {goods_id} = options;
    console.log(goods_id);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})