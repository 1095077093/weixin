// pages/update/update.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    lostTime: "2019-01-01",
    customItem: '全部',
    region: ['广东省', '广州市', '海珠区'],
    imgs: [],
    imgList: [],
    array: [{ "id": 10, "name": "寻物启事" }, { "id": 11, "name": "寻宠启事" }],
    address: '',
    lostDetail: '',
    category: '',
    itemId: 0

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(options.itemId);
    var that = this;
    wx.request({
      url: 'http://localhost:8080//getItemType',
      success(res) {
        console.log(res.data)
        that.setData({
          array: res.data
        })
      }
    })

    that.setData({
      itemId: options.itemId
    })

    //获取单个项目详情，在更新页面中显示
    wx.request({
      url: 'http://localhost:8080//getItemByItemIdResponse',
      data: {
        itemId: options.itemId
      },
      success(res) {
        console.log(res.data);

        that.setData({
          itemTitle: res.data.itemTitle,
          index: res.data.index,
          region: res.data.region,
          category: res.data.category,
          lostTime: res.data.lostTime,
          lostDetail: res.data.lostDetail,
          imgs: res.data.imgs,
          imgList: res.data.imgs,
          address: res.data.address
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

  },
  bindchangetype: function (e) {
    //console.log(e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindchangetime: function (e) {
    //console.log(e)
    this.setData({
      date: e.detail.value
    })
  },
  bindchangeregion: function (e) {
    //console.log(e)
    this.setData({
      region: e.detail.value
    })
  },
  //选择图片
  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      count: 3,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        console.log(res);
        that.setData({
          imgs: res.tempFilePaths
        })
        var imgList = that.data.imgList;
        imgList = [];
        for (var i = 0; i < res.tempFilePaths.length; i++) {
          //console.log(res.tempFilePaths[i]);

          wx.uploadFile({
            url: 'http://localhost:8080//imageUpload',
            filePath: res.tempFilePaths[i],
            name: 'file',
            success(res) {
              console.log(res);
              imgList.push(res.data);
            }
          })
        }

        //console.log(imgList);
        that.setData({
          imgList: imgList
        })
      },
    })
  },
  /**删除图片 */
  deleteImage: function (e) {
    //console.log(e);
    var that = this;
    wx.showModal({
      title: '删除图片',
      content: '是否删除',
      success(res) {
        if (res.confirm) {
          var image = that.data.tempFilePaths;
          image.splice(e.currentTarget.dataset.id, 1);
          that.setData({
            imgs: image
          })

        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  formSubmit: function (e) {
    console.log(e.detail.value);
    var that = this;
    console.log("提交");
    //console.log(e);

    var itemId = that.data.itemId;
    var title = e.detail.value.title;
    //console.log(title);
    var typeIndex = e.detail.value.typeIndex;
    var array = that.data.array;
    var typeId = array[typeIndex].typeId;
    //console.log(typeId);
    var category = e.detail.value.category;
    //console.log(category);
    var openId = app.globalData.userInfo.openId;
    //console.log(openId);
    var lostTime = e.detail.value.lostTime;
    //console.log(lostTime);
    var region = e.detail.value.region;
    //console.log(region);
    var address = e.detail.value.address;
    //console.log(address);
    var lostDetail = e.detail.value.lostDetail;
    //console.log(lostDetail);
    var imgs = that.data.imgList;

    wx.request({
      url: 'http://localhost:8080//updateItem',
      data: {
        itemId: itemId,
        itemTitle: title,
        typeId: typeId,
        category: category,
        openId: openId,
        lostTime: lostTime,
        region: region,
        address: address,
        lostDetail: lostDetail,
        imgs: imgs
      },
      method: 'post',
      success(res) {
        //console.log(res.data)
        if (res.data == 'ok') {
          wx.switchTab({
            url: '/pages/about/about',
          })
        }
      }
    })



  }
})