// pages/addressAdd/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseURL: 'http://localhost:8888/petdoc/',
    categories: ['猫', '狗', '猪', '鼠', '乌龟', '鸟类', '其他'],
    category: '猫',
    petName: '',
    petIcon: '',
    addressIs: true,
    imgs: [], //本地图片地址数组
    picPaths: [], //网络路径

  },
  bindCategoryChange: function(e) {
    let category = this.data.categories[e.detail.value];
    this.setData({
      category: category
    })
  },
  bindKeyName: function(e) {
    this.setData({
      petName: e.detail.value
    })
  },
  chooseImageTap: function() {
    var that = this;
    wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      itemColor: "#00000",
      success: function(res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            that.chooseWxImage('album')
          } else if (res.tapIndex == 1) {
            that.chooseWxImage('camera')
          }
        }
      }
    })
  },
  // 图片本地路径
  chooseWxImage: function(type) {
    var that = this;
    var imgsPaths = that.data.imgs;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: [type],
      success: function(res) {
        that.upImgs(res.tempFilePaths[0], 0) //调用上传方法
      }
    })
  },
  //上传服务器
  upImgs: function(imgurl, index) {
    var that = this;
    wx.uploadFile({
      url: app.globalData.baseURL + '/upload/fileupload',
      filePath: imgurl,
      name: 'file',
      header: {
        'content-type': 'multipart/form-data'
      },
      formData: null,
      success: function(res) {
        let petIcon = res.data;
        that.setData({
          petIcon: petIcon
        })

      }
    })
  },

  submitFun: function() {
    let pet = {};
    pet.petName = this.data.petName;
    pet.petIcon = this.data.petIcon;
    pet.petCategory = this.data.category;

    let session_user = wx.getStorageSync("session_user");
    pet.userId = session_user.userId;
    app.wxRequest("post", "/pet/save", pet, (res) => {
      if (res) {
        wx.showToast({
          title: '添加成功',
          icon: 'success',
          duration: 2000
        });
        wx.navigateTo({
          url: '/pages/mypets/mypets'
        });

      } 
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (options.id) {
      this.setData({
        region: options.city.split(','),
        name: options.name,
        mobile: options.mobile,
        detailed: options.detailed,
        _id: options.id,
        addressIs: false
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})