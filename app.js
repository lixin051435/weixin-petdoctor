//app.js
App({
  globalData: {
    session_user: "session_user",
    session_doctor: "session_doctor",
    session_admin:"session_admin",
    userInfo: null,
    baseURL: 'http://localhost:8888/petdoc'
  },
  /**
   * 封装wx.request请求
   * method： 请求方式
   * url: 请求地址
   * data： 要传递的参数
   * callback： 请求成功回调函数
   * errFun： 请求失败回调函数
   **/
  wxRequest(method, url, data, callback) {
    wx.request({
      url: this.globalData.baseURL + url,
      method: method,
      data: data,
      header: {
        'content-type': method == 'GET' ? 'application/json' : 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      dataType: 'json',
      success: function (res) {
        callback(res.data);
      },
      fail: function (err) {
        console.log(err);
      }
    })
  }
})