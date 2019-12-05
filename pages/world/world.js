// pages/world/world.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:{},
    pageIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._initPageData(this.data.pageIndex)
  },

  _initPageData(pid){
    wx.request({
      url: `http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${pid}&count=10&x=&y=`,  
      header: {
        'content-type': 'application/text' // 默认值
      },
      success:(res)=> {
        wx.hideLoading()
        console.log(res.data)
        if(this.data.pageIndex >0){
          this.setData({
            list: this.data.list.concat(res.data.subjects)
          })
        }else{
          this.setData({
            list: res.data.subjects
          })
        }
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
    wx.showLoading({
      title: '加载分页中...',
    })
    this.setData({
      pageIndex:++this.data.pageIndex
    })
    console.log(this.data.pageIndex)
    this._initPageData(this.data.pageIndex*10)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})