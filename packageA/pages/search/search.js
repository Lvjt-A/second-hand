Page({

  /**
   * 页面的初始数据
   */
  data: {
    showSearch: false,
    inputFocus: false,
    dataArray:[
      {
        "articleid": "3490400c-9988-4b57-8f8a-92124cb9bef3",
        "title": "可爱毛绒小熊",
        "releasetime": "2024-2-17",
        "image": "/picture/1.jpg",
        url:"/packageA/pages/business/business"
      },
      {
        "articleid": "40b3e53f-d2c6-4f11-b1f7-965f6ce54800",
        "title": "饼干+扁桃仁",
        "releasetime": "2024-2-17",
        "image": "/p2/f1.jpg",
        url:"/packageA/pages/business/food/food"
      },
      {
        "articleid": "db100597-07b5-4470-9ed5-8e69b258dd48",
        "title": "理肤泉B5面膜",
        "releasetime": "2024-2-17",
        "image": "/p4/m1.jpg",
        url:"/packageA/pages/business/makeup/makeup"
      },
      {
        "articleid": "1b275828-aea7-46f9-9912-0668772d0cd5",
        "title": "线圈单词本",
        "releasetime": "2024-2-16",
        "image": "/p3/study1.jpg",
        url:"/packageA/pages/business/study/study"
      },
      {
        "articleid": "9f9edd79-92d0-4758-bdd0-c5a333c653fe",
        "title": "大话数据结构",
        "releasetime": "2024-2-16",
        "image": "/p6/b1.jpg",
        url:"/packageA/pages/book/book"
      },
      {
        "articleid": "1aac74b2-67a6-40e7-8967-b665f64df05c",
        "title": "学生宿舍椅子",
        "releasetime": "2024-2-14",
        "image": "/p8/c1.jpg",
        url:"/packageA/pages/chair/chair"
      },
      {
        "articleid": "eda6872f-8154-47d4-98b4-38057e35d41c",
        "title": "灰色连帽卫衣",
        "releasetime": "2024-2-13",
        "image": "/p1/c1.jpg",
        url:"/packageA/pages/business/clothes/clothes"
      },
      {
        "articleid": "eda6872f-8154-47d4-98b4-38057e35d41c",
        "title": "斐乐棒球帽",
        "releasetime": "2024-2-13",
        "image": "/p5/c1.jpg",
        url:"/packageA/pages/business/cap/cap"
      }
    ]
  },
  onFocus: function() {
    this.setData({
      inputFocus: true,
      showSearch: true,
      isshow:false
    });
  },
  onBlur: function(e) {
    this.setData({
      isshow:false,
      showSearch: true,
      searchResult:null,
      Searchtxt:e.detail.value
    })
    var txt=this.data.Searchtxt;
    var dataArray=this.data.dataArray
    console.log("开始搜索"+txt);
    const searchResult = this.fuzzySearch(dataArray, txt);
    console.log(searchResult);
    this.setData({
      searchResult:searchResult
    })
  },
  quxiao: function() {
    this.setData({
      showSearch: false,
    })
  },
  fuzzySearch(arr, searchText) {
      const filteredArray = arr.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(searchText.toLowerCase());
      const timeMatch = item.releasetime.toLowerCase().includes(searchText.toLowerCase());
      const textMatch = item.text && item.text.toLowerCase().includes(searchText.toLowerCase());
      return titleMatch || timeMatch || textMatch;
    });
    return filteredArray;
  },
  goto(){
    wx.navigateTo({
      url: '/packageA/pages/business/business',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
