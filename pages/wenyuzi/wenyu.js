// wenyu.js
var postData=require("../../data/post-data.js");
Page({

  /**
   * 页面的初始数据
   */
  data:{
  slideImgArr:[
    "../../images/vr.png",
    "../../images/wx.png",
    "../../images/iqiyi.png"
  ],
  mypostData:postData.postList
  },
  
  openyuedu: function (event) {
    console.log("456");
    console.log(postData.postList[0].postId);
    console.log(event);
    var myid = event.currentTarget.dataset.postid;
    console.log("123");
    console.log(myid);
    wx.navigateTo({
      url: '../yuedu/yuedu?id='+myid,
    })
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data)
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