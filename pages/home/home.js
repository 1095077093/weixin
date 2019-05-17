// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 0,
    windowHeight: 0,
    page: {
      "hasNext": false,
      "pageNo": 1,
      "pageSize": 10,
      "items": [
        {
          "itemId": 1002,
          "itemTitle": "AAAAvvvvvvveeeeeeeeee",
          "user": {
            "userId": 1000,
            "userName": "admin"
          },
          "category": "ABC",
          "itemType": {
            "typeId": 1000,
            "typeName": "寻人启事"
          },
          "region": "ABC-DEF",
          "address": "ddddddddd",
          "lostTime": 1557039800000,
          "imgs": [
            ""
          ],
          "lostDetail": "fffffffffffff"
        }
      ]
    }
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
    var that=this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          windowHeight: res.windowHeight-45
        })

      },
    });

    
    var current = that.data.current;
    var pageNo = that.data.page.pageNo;
    var pageSize = that.data.page.pageSize;
    var typeName = '寻人启事';
    if (current == '0') {
      typeName = '寻人启事'
    } else if (current == '1') {
      typeName = '寻物启事'
    } else if (current == '2') {
      typeName = '寻宠启事'
    } else {
      typeName = '失物招领'
    }
    

    wx.request({
      url: 'http://localhost:8080//getItemInfo',
      data: {
        typeName: typeName ,
        pageNo: pageNo,
        pageSize: pageSize
      },
      success(res){
        console.log(res.data)
        that.setData({
          page: res.data
        })
      }
    })

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
    var that = this;
    var current = that.data.current;
    var pageNo = that.data.page.pageNo;
    var pageSize = that.data.page.pageSize;
    var typeName = '寻人启事';
    if (current == '0') {
      typeName = '寻人启事'
    } else if (current == '1') {
      typeName = '寻物启事'
    } else if (current == '2') {
      typeName = '寻宠启事'
    } else {
      typeName = '失物招领'
    }


    wx.request({
      url: 'http://localhost:8080//getItemInfo',
      data: {
        typeName: typeName,
        pageNo: pageNo,
        pageSize: pageSize
      },
      success(res) {
        console.log(res.data)
        that.setData({
          page: res.data
        })
      }
    })

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that=this;
    var hasNext = that.data.page.hasNext
    if (hasNext){

      var current = that.data.current;
      var pageNo = that.data.page.pageNo;
      var pageSize = that.data.page.pageSize;
      var typeName = '寻人启事';
      if (current == '0') {
        typeName = '寻人启事'
      } else if (current == '1') {
        typeName = '寻物启事'
      } else if (current == '2') {
        typeName = '寻宠启事'
      } else {
        typeName = '失物招领'
      }


      wx.request({
        url: 'http://localhost:8080//getItemInfo',
        data: {
          typeName: typeName,
          pageNo: pageNo+1,
          pageSize: pageSize
        },
        success(res) {
          console.log(res.data)
          var o_page = that.data.page.items
          var n_page = res.data
          var page=o_items.concat(n_items)
          that.setData({
            page: page
          })
        }
      })

    }else{
      wx.showToast({
        title: '加载全部',
      })
    }

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  click_nav: function(e){
    var that = this;
    
    var current = e.currentTarget.dataset.current;
    console.log(current)
   
    var pageNo = 1;
    var pageSize = that.data.page.pageSize;
    var typeName = '寻人启事';
    if (current == '0') {
      typeName = '寻人启事'
    } else if (current == '1') {
      typeName = '寻物启事'
    } else if (current == '2') {
      typeName = '寻宠启事'
    } else {
      typeName = '失物招领'
    }
    console.log(typeName)
    wx.request({
      url: 'http://localhost:8080//getItemInfo',
      data: {
        typeName: typeName,
        pageNo: pageNo,
        pageSize: pageSize
      },
      success(res) {
        console.log(res.data)
        that.setData({
          page: res.data
        })
      }
    })

    this.setData({
      current: e.currentTarget.dataset.current
    })

  },
  bindchange: function(e){
    //console.log(e.detail.current)
    var that = this;

    var current = e.detail.current;
    console.log(current)

    var pageNo = 1;
    var pageSize = that.data.page.pageSize;
    var typeName = '寻人启事';
    if (current == '0') {
      typeName = '寻人启事'
    } else if (current == '1') {
      typeName = '寻物启事'
    } else if (current == '2') {
      typeName = '寻宠启事'
    } else {
      typeName = '失物招领'
    }
    console.log(typeName)
    wx.request({
      url: 'http://localhost:8080//getItemInfo',
      data: {
        typeName: typeName,
        pageNo: pageNo,
        pageSize: pageSize
      },
      success(res) {
        console.log(res.data)
        that.setData({
          page: res.data
        })
      }
    });
    

    this.setData({
      current: e.detail.current
    })
  }
})