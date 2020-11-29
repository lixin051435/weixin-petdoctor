// pages/register/register.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseURL: 'http://localhost:8888/petdoc/',
    userIcon: '',
    gender: "男",
    genders: ['男', '女'],
    user: {
      "userId": "",
      "userAddress": "",
      "userEmail": "",
      "userGender": "男",
      "userNickname": "",
      "userPassword": "",
      "userPhone": "",
      "userRealname": "",
      "userIcon": ""
    }
  },
  selectGender(e) {
    let gender = this.data.genders[e.detail.value];
    this.data.user.userGender = gender;
    this.setData({
      gender: gender
    });
  },
  inputedit(e) {
    let dataset = e.currentTarget.dataset;
    let value = e.detail.value;
    let user = this.data.user;
    this.data[dataset.obj][dataset.item] = value;
    this.setData({
      user: this.data[dataset.obj]
    });
  },
  formSubmit(e) {
    let url = "/user/save";
    let form = this.data.user;
    form.userIcon = this.data.userIcon;
    app.wxRequest("post", url, form, (res) => {
      if (res) {
        wx.showToast({
          title: '提交成功',
          icon: 'success',
          duration: 2000
        });
        // wx.navigateTo({
        //   url: '/pages/adminIndex/adminIndex',
        // })
      } else {
        console.log("提交失败");
      }
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
        that.setData({
          userIcon: res.data
        })

      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let userId = options.userId;
    let that = this;
    if (userId != undefined) {
      app.wxRequest("get", "/user/get/" + userId, {}, (res) => {
        this.setData({
          user: res,
          gender: res.userGender,
          userIcon:res.userIcon || ''
        })
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