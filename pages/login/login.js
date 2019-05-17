// pages/login/login.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  },
  bindgetuserinfo:function(e){
    console.log(e);
    var userName = e.detail.userInfo.nickName;
    var openId = app.globalData.userInfo.openId;
    console.log(openId);
     
    if (e.detail.errMsg =="getUserInfo:ok"){

        wx.request({
          url: 'http://localhost:8080//addUser',
          method: 'GET',
          data: {
            userName: userName,
            openId: openId
          },
          success(res) {
            console.log(res);
            if (res.data == "ok") {
              wx.switchTab({
                url: '/pages/home/home',
              })
            } else {
              wx.showToast({
                title: '授权失败',
              })
            }

          }
        })

      }
       
      
      

  }
})