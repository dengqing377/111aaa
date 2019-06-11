// read.js
//在需要用到数据的页面  require(路径)引入
var postData=require("../../data/post-data.js");
Page({
  data:{
    // slideImg01:"../../images/vr.png",
    // slideImg02: "../../images/wx.png",
    // slideImg03:"../../images/iqiyi.png"
    slideImgArr:[
      "../../images/vr.png",
      "../../images/wx.png",
      "../../images/iqiyi.png"
    ],
    myPostData: postData.postList
  },
  openReadDetail:function(){
    wx.navigateTo({
      url: './redaDetail/readDetail',
    })
  }
})