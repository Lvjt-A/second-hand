// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  data: {
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: '',
    },
    value:0,
    scrollH: 0,
    imgWidth: 0,
    loadingCount: 0,
    images: [],
    col1: [],
    col2: [],
    hasUserInfo: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),
  },
  onLoad: function () {
    wx.getSystemInfo({
      success: (res) => {
        let ww = res.windowWidth;
        let wh = res.windowHeight;
        let imgWidth = ww * 0.48;
        let scrollH = wh;

        this.setData({
          scrollH: scrollH,
          imgWidth: imgWidth
        });

        //加载首组图片
        this.loadImages();
      }
    })
  },

  onImageLoad: function (e) {
    let imageId = e.currentTarget.id;
    let oImgW = e.detail.width;         //图片原始宽度
    let oImgH = e.detail.height;        //图片原始高度
    let imgWidth = this.data.imgWidth;  //图片设置的宽度
    let scale = imgWidth / oImgW;        //比例计算
    let imgHeight = oImgH * scale;      //自适应高度

    let images = this.data.images;
    let imageObj = null;

    for (let i = 0; i < images.length; i++) {
      let img = images[i];
      if (img.id === imageId) {
        imageObj = img;
        break;
      }
    }

    imageObj.height = imgHeight;

    let loadingCount = this.data.loadingCount - 1;
    let col1 = this.data.col1;
    let col2 = this.data.col2;

    //判断当前图片添加到左列还是右列
    if (col1.length <= col2.length) {
      col1.push(imageObj);
    } else {
      col2.push(imageObj);
    }

    let data = {
      loadingCount: loadingCount,
      col1: col1,
      col2: col2
    };

    //当前这组图片已加载完毕，则清空图片临时加载区域的内容
    if (!loadingCount) {
      data.images = [];
    }

    this.setData(data);
  },
  gradedetail()
  {
    wx.navigateTo({
      url: '/packageA/pages/business/business',
    })
  },
  
  onImageTap: function(e) {
    const goodId = e.currentTarget.dataset.goodid;
    const selectedImage = this.data.images.find(item => item.goodId === goodId);
    if (selectedImage) {
      wx.navigateTo({
        url: selectedImage.url
      });
    }
  },
  jump1:function(event){
    this.setData({value:1}),
    wx.navigateTo({
      url: '/packageA/pages/business/food/food?value='+this.data.value,
      success(){
        console.log('页面one跳转成功')
      }
    })
  },
  jump2:function(event){
    this.setData({value:2}),
    wx.navigateTo({
      url: '/packageA/pages/business/makeup/makeup?value='+this.data.value,
      success(){
        console.log('页面two跳转成功')
      }
    })
  },
  jump3:function(event){
    this.setData({value:3}),
    wx.navigateTo({
      url: '/packageA/pages/business/study/study?value='+this.data.value,
      success(){
        console.log('页面three跳转成功')
      }
    })
  },
  jump4:function(event){
    this.setData({value:4}),
    wx.navigateTo({
      url: '/packageA/pages/book/book?value='+this.data.value,
      success(){
        console.log('页面four跳转成功')
      }
    })
  },
  jump5:function(event){
    this.setData({value:5}),
    wx.navigateTo({
      url: '/packageA/pages/chair/chair?value='+this.data.value,
      success(){
        console.log('页面four跳转成功')
      }
    })
  },
  jump6:function(event){
    this.setData({value:6}),
    wx.navigateTo({
      url: '/packageA/pages/business/clothes/clothes?value='+this.data.value,
      success(){
        console.log('页面four跳转成功')
      }
    })
  },
  jump7:function(event){
    this.setData({value:7}),
    wx.navigateTo({
      url: '/packageA/pages/business/cap/cap?value='+this.data.value,
      success(){
        console.log('页面four跳转成功')
      }
    })
  },
  jump8:function(event){
    this.setData({value:8}),
    wx.navigateTo({
      url: '/packageA/pages/business/business?value='+this.data.value,
      success(){
        console.log('页面four跳转成功')
      }
    })
  },
  search()
  {
    wx.navigateTo({
      url: '/packageA/pages/search/search',
    })
  },
  
  goodstudy()
  {
    wx.navigateTo({
      url: '/packageA/pages/business/clothes/clothes',
    })
  },
  catestudy()
  {
    wx.navigateTo({
      url: '/packageA/pages/cateList/study/study',
    })
  },
  gotocap(){
    wx.navigateTo({
      url: '/packageA/pages/business/cap/cap',
    })
  },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail
    const { nickName } = this.data.userInfo
    this.setData({
      "userInfo.avatarUrl": avatarUrl,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  onInputChange(e) {
    const nickName = e.detail.value
    const { avatarUrl } = this.data.userInfo
    this.setData({
      "userInfo.nickName": nickName,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
})
