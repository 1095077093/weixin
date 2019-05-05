// pages/mydetail/mydetail.js
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
  deleteItem:function(e){
    console.log(ecurrentTarget.dataset.itemId)
    wx.showModal({
      title: '删除我的启事',
      content: '是否删除',
      success(res) {
        if (res.confirm) {
         wx.switchTab({
           url: '/pages/about/about',
         })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  updateItem: function(e){

    wx.navigateTo({
      url: '/pages/update/update',
    })

  }
})