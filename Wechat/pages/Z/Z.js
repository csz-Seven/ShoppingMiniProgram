// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    locationData: {
      scale: 15,
      latitude: '',
      longitude: '',
      markers: [],
      circles: []
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _this = this
    this.getdoubanTop();
    // 获取当前位置
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        console.log(res);
        _this.setData({
          locationData: {
            latitude: res.latitude,
            longitude: res.longitude,
            markers: [{
              latitude: res.latitude,
              longitude: res.longitude,
              width: 30,
              height: 30,
              iconPath: "/images/icon/wxb定位.png"
            }],
            circles: [{
              latitude: res.latitude,
              longitude: res.longitude,
              color: '#7cb5ec77',
              fillColor: '#7cb5ec88',
              radius: 270,
              strokeWidth: 1
            }]
          }
        })
      },
    })

// 调用微信地图-选择
    wx.chooseLocation({
      success: function(res) {},
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




  /**
   * 豆瓣TOP250 API获取
   * */
  getdoubanTop: function () {
    wx.request({
      url: "https://api.douban.com/v2/movie/in_theaters",

      /**
       * 错误写法 （返回400返回值）
      */
      // header: {
      //   'content-type': 'application/json' // 默认值
      // },

      header: {
        'content-type': 'text/json'
      },
      success: function (res) {
        console.log(res)
      },
      fail: function (err) {
        console.log(err)
      }
    })
  }
})