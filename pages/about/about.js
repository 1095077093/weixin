// pages/about/about.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: app.globalData.userInfo.username,
    gender: app.globalData.userInfo.gender,
    userId:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   var that=this;
   var openId= app.globalData.userInfo.openId;
   console.log(openId)
   wx.request({
     url: 'http://localhost:8080//getUserByOpenId',
     data:{
       openId: openId
     },
     success(res){
       console.log(res.data.userId)
       that.setData({
         userId: res.data.userId
       })
     }
   })

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