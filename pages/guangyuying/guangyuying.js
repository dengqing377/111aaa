// guangyuying.js
var postData = require("../../data/tu-data.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    slideImgArr: [
      "../../images/dianying/nv.jpg",
      "../../images//dianying/jia.jpg",
      "../../images//dianying/ba.jpg"
    ],
    mypostData: postData.postList
  },
  opendianying: function (event) {
    console.log(event.currentTarget.dataset.postid);
    
    var myid = event.currentTarget.dataset.postid;
    
    wx.navigateTo({
      url: '../dianying/dianying?id=' + myid,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  }, openjialebi: function () {
    wx.navigateTo({
      url: '../dianying/dianying',
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