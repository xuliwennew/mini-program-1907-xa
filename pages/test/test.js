// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   * 状态数据，页面重新render
   */
  data: {
    title:"测试一下数据绑定",
    cources:[
      "react",
      "vue",
      "mina"
    ],
    users:[
      {
        name:"张三",
        hobby:[
          "跑路",
          "上树"
        ]
      },
      {
        name: "李四",
        hobby: [
          "上树",
          "健身"
        ]
      }
    ],
    flag:true 
  },

  show(e){
    console.log(e.currentTarget)
  },

  toggle(e){
    // this.data.flag = !this.data.flag
    this.setData({
      flag: !this.data.flag
    })
    console.log(this.data.flag)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10&x=&y=', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/text' // 默认值
      },
      success(res) {
        console.log(res.data)
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