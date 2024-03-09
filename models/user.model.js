const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  birthDay: {//生日
    type: String,
  },
  contactList: {
    type: Object,
  },
  educationStage: {
    type: String,
  },
  email: {//google帳戶的email
    type: String,
  },
  gender: {//性別
    type: String,
  },
  googleID: {//google帳戶的ID
    type: String,
  },
  name: {//名稱
    type: String,
    required: true,
  },
  createdDate: {//建立時間
    type: Date,
    default: Date.now,
  },
  updatedDate: {//更新時間
    type: Date,
    default: Date.now,
  },
  photoURL: {//google帳戶的照片
    type: String,
  },
  interestList: {//感興趣的領域
    type: Array,
  },
  isOpenLocation: {//公開居住地
    type: Boolean,
  },
  isOpenProfile: {//公開個人頁面
    type: Boolean,
  },
  isSubscribeEmail: {//訂閱訂電子報
    type: Boolean,
  },
  location: {//居住地
    type: String,
  },
  roleList: {//身份
    type: Array,
  },
  selfIntroduction: {//個人簡介
    type: String,
  },
  share: {//可以分享的事物
    type: String,
  },
  tagList: {//標籤
    type: Array,
  },
  wantToDoList: {//想和夥伴一起
    type: Array,
  },
});

module.exports = mongoose.model("User", userSchema);
