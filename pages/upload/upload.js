// pages/upload/upload.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    date:"2019-01-01",
    customItem: '全部',
    region: ['广东省', '广州市', '海珠区'],
    imgs:[],
    array: [{ "id": 10, "name": "寻物启事" }, { "id": 11, "name": "寻宠启事" }]
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
  formSubmit:function(e){
    console.log("提交")
  },
  /**重置 */
  formReset: function (e) {
    this.setData({

      index: 0,
      date: "2019-01-01",
      region: ['广东省', '广州市', '海珠区'],
      tempFilePaths: [],
    })

  },
  bindchangetype:function(e){
    //console.log(e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindchangetime:function(e){
     //console.log(e)
     this.setData({
       date:e.detail.value
     })
  },
  bindchangeregion:function(e){
    //console.log(e)
    this.setData({
      region:e.detail.value
    })
  },
  chooseImage:function(e){
   var that=this;
    wx.chooseImage({
      count: 3,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        //console.log(res)
        that.setData({
          imgs: res.tempFilePaths
        })
      },
    })
  },
  /**删除图片 */
  deleteImage: function(e){
    //console.log(e);
    var that=this;
    wx.showModal({
      title: '删除图片',
      content: '是否删除',
      success(res) {
        if (res.confirm) {
          var image = that.data.imgs;
          image.splice(e.currentTarget.dataset.id, 1);
          that.setData({
            imgs: image
          })

        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})