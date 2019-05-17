// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:{
    "itemId": 1,
    "itemTitle": "fff",
    "user": {
      "userId": 1000,
      "userName": "wanghaha"
    },
    "category": "ffff",
    "itemType": {
      "typeId": 1000,
      "typeName": "寻人启事"
    },
    "region": "ffff",
    "address": "ffff",
    "lostTime": 1557197544000,
    "imgs": [
      "http://localhost:8888/img/img_1.jpg"
    ],
    "lostDetail": "ffff"
  }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    console.log(options.itemId);
    wx.request({
      url: 'http://localhost:8080//getItemByItemId',
      data: {
        itemId: options.itemId
      },
      success(res){
        console.log(res.data)
        that.setData({
          item:res.data
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