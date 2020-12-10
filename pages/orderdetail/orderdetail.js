// pages/orderdetail/orderdetail.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isDoctor:'',
    baseURL: 'http://localhost:8888/petdoc/',
    imgUrls: [],
    info: {},
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    tabIs: true,
    specIs: false,
    data: null,
    solution:'暂无'
  },
  tabFun(e) {
    if (e.currentTarget.dataset.state == 1) {
      this.setData({
        tabIs: true
      })
    } else {
      this.setData({
        tabIs: false
      })
    }
  },
  setSolution(e){
    let solution = e.detail.value;
    this.setData({
      solution:solution
    })
  },
  submit(){
    let solution = this.data.solution;
    let form = this.data.info;
    form.solution = solution;
    form.orderstatus = 1;
    form.createtime = null;
    app.wxRequest("post", "/order/update", form, (res) => {
      wx.showModal({
        title: '提示',
        content: '治疗成功'
      });
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let isDoctor = options.isDoctor;
    let orderId = options.orderId;
    let that = this;
    if (orderId != undefined) {
      app.wxRequest("get", "/order/get/" + orderId, {}, (res) => {
        let icon = that.data.baseURL + res.petIcon;
        let imgs = [icon];
        that.setData({
          isDoctor:isDoctor,
          info: res,
          solution:res.solution || '暂无',
          imgUrls: imgs
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