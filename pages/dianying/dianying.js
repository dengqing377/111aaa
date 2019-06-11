// dianying.js
var postData = require("../../data/zi-data.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    myPostData: postData
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("456789");
    console.log(postData);
    console.log("dianying11111111");
    console.log(this.data);
    console.log("1231213212312312312312+options");
    console.log(options)
    var myid = options.id;
    this.setData({ myPostData: postData.postzi[myid] })
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