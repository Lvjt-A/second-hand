
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yuanjia:30,
    xianjia:10,
    array: ['证件','学习用品', '服装', '食品', '生活用品','美妆护肤','饰品'],
    objectArray: [
      {
        id: 0,
        name: '证件'
      },
      {
        id: 1,
        name: '学习用品'
      },
      {
        id: 2,
        name: '服装'
      },
      {
        id: 3,
        name: '食品'
      },
      {
        id: 4,
        name: '生活用品'
      },
      {
        id: 5,
        name: '美妆护肤'
      },
      {
        id: 6,
        name: '饰品'
      }
    ],
    index: 0,
    xuan:false,
    spmc:"",
    xxjs:"",
    lx:"",
    yj:"",
    xj:"",
    tempFilePathslist:[],

   imgList:[]
  },
 
   

  bindPickerChange(e){

    this.setData({
      xuan:true
    }),
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        index: e.detail.value
        
      })
  },
  upload(){
    const { imgList }=this.data;
    wx.chooseMedia({
 count:6-imgList.length,
     success:res=>{
      const {tempFiles}= res;
      tempFiles.forEach(item=>{
        imgList.unshift(item.tempFilePath);
      })
      this.setData({
        imgList
      })
    }

      
    })
  }
  ,
gotopolish: function () {
    var that = this;
    var tempFilePaths = that.data.tempFilePaths;
    wx.showModal({
      title: '发布成功！',
      success: function (res) {
        if (res.confirm) {
          console.log('确定');
          wx.navigateTo({
            url: '/packageA/pages/poblish/poblish',
          })
     
        } else if (res.cancel) {
          console.log('返回');
          return false;
        }
        that.setData({
          tempFilePaths
        });
      }
    })
  },
  dup(){
    this.setData({
      tempFilePaths:[],
      imgList:[],
      xuan:false
    })
  },
  listenerButtonPreviewImage: function (e) {
    let index = e.target.dataset.index;
    let that = this;
    wx.previewImage({
      current: that.data.tempFilePaths[index],
      urls: that.data.tempFilePaths,
    })
  },
  deleteImage: function (e) {
    var that = this;
    var tempFilePaths = that.data.tempFilePaths;
    var index = e.currentTarget.dataset.index;
    wx.showModal({
      title: '提示',
      content: '确定要删除此图片吗？',
      success: function (res) {
        if (res.confirm) {
          console.log('确定');
          tempFilePaths.splice(index, 1);
        } else if (res.cancel) {
          console.log('取消');
          return false;
        }
        that.setData({
          tempFilePaths
        });
      }
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









