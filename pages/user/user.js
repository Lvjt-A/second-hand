// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    login: false,
        avatarUrl: '',
        nickName: '',
        cellList: [
          {
              url: '/images/info.png',
              text: '基本资料',
              page: '/packageA/pages/infordetail/infordetail'
          },
          {
              url: '/images/pubnish.jpg',
              text: '我的发布',
              page: '/packageA/pages/poblish/poblish'
          },
          {
              url: '/images/trade.jpg',
              text: '交易订单',
              page: '/packageA/pages/tradedetai/tradedetail'
          },
          {
              url: '/images/quit.jpg',
              text: '退出登录'
          }
      ]
  },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail 
    this.setData({
      avatarUrl,
    })
     // 获取当前缓存的用户信息并更新头像
     let userInfo = wx.getStorageSync('userInfo') || {};
     userInfo.avatarUrl = avatarUrl;
     wx.setStorageSync('userInfo', userInfo);
   
  },
  onNickNameChange(e) {
    const { value } = e.detail;
    this.setData({
        nickName: value
    })

    // 获取当前缓存的用户信息并更新昵称
    let userInfo = wx.getStorageSync('userInfo') || {};
    userInfo.nickName = value;
    wx.setStorageSync('userInfo', userInfo);
},
  toDetail(e) {
    const { page } = e.currentTarget.dataset;
    if (page){
        wx.navigateTo({
            url: page,          
        })
    } else {
        wx.showModal({
          title: '提示',
          content: '确定退出吗?',
          success: (res) => {
              const { confirm} = res;
              if (confirm) {
                  wx.removeStorageSync('login');
                  wx.removeStorageSync('userInfo');
                  this.setData({
                      login: false
                  })
              }
          }
        })
    }
},
toLogin() {
  wx.getUserProfile({
    desc: '获取用户信息',
    success: (res) => {
        const { userInfo: { avatarUrl, nickName } } = res;
        // 获取缓存中的 userInfo，确保存储结构一致
        let userInfo = wx.getStorageSync('userInfo') || {};
        userInfo.avatarUrl = avatarUrl;
        userInfo.nickName = nickName;
        wx.setStorageSync('userInfo', userInfo); // 存储完整的 userInfo 对象
        wx.setStorageSync('login', true);
        this.setData({
            login: true,
            avatarUrl,
            nickName
        });
    }
  })
},


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const login = wx.getStorageSync('login');
    const userInfo = wx.getStorageSync('userInfo');
    if (userInfo) {
        const { avatarUrl, nickName } = userInfo;
        this.setData({
          avatarUrl: userInfo.avatarUrl || '',  // 从缓存中恢复头像
          nickName: userInfo.nickName || '微信用户',  // 从缓存中恢复昵称
        })
    }
    this.setData({
        login: !!login
    })
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
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
          select: 4
      })
  }
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
