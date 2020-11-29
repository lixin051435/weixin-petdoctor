// pages/register/register.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    symptom: '',
    baseURL: 'http://localhost:8888/petdoc/',
    pet: {},
    pets: [],
    date: '2020-01-01',
    doctorIcon: '',
    gender: "男",
    genders: ['男', '女'],
    doctor: {
      "doctorId": "",
      "doctorDescription": "",
      "doctorGender": "男",
      "doctorIcon": "",
      "doctorNickname": "",
      "doctorPassword": "",
      "doctorRealname": "",
      "doctorTitle": "",
      "lawyerField": ""
    }
  },
  selectPet(e) {
    let pets = this.data.pets;
    this.setData({
      pet: pets[e.detail.value]
    })
  },
  setOrderTime(e) {
    this.setData({
      date: e.detail.value
    })
  },
  selectGender(e) {
    let gender = this.data.genders[e.detail.value];
    this.data.doctor.doctorGender = gender;
    this.setData({
      gender: gender
    });
  },
  inputedit(e) {
    let dataset = e.currentTarget.dataset;
    let value = e.detail.value;
    let doctor = this.data.doctor;
    this.data[dataset.obj][dataset.item] = value;
    this.setData({
      doctor: this.data[dataset.obj]
    });
  },
  setSymptom(e) {
    this.setData({
      symptom: e.detail.value
    })
  },
  formSubmit(e) {
    let url = "/order/save";
    let doctor = this.data.doctor;
    let pet = this.data.pet;
    let user = wx.getStorageSync("session_user");
    let data = {
      userId: user.userId,
      petId: pet.petId,
      doctorId: doctor.doctorId,
      symptom: this.data.symptom,
      ordertime: this.data.date
    }
    app.wxRequest("post", url, data, (res) => {
      if (res) {
        wx.showToast({
          title: '提交成功',
          icon: 'success',
          duration: 2000
        });
        wx.navigateBack({
          changed: true
        }); //返回上一页
      } else {
        console.log("提交失败");
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let doctorId = options.doctorId;
    let that = this;
    if (doctorId != undefined) {
      app.wxRequest("get", "/doctor/get/" + doctorId, {}, (res) => {
        this.setData({
          doctor: res,
          gender: res.doctorGender,
          doctorIcon: res.doctorIcon || ''
        })
      })
    }

    let session_user = wx.getStorageSync("session_user");
    app.wxRequest("get", "/pet/findByUserId", {
      "userId": session_user
        .userId
    }, (res) => {
      this.setData({
        pets: res,
        pet: res[0]
      })
    })

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