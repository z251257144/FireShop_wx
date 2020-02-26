// 正则参考：https://blog.csdn.net/wa172126691/article/details/82991476

// 数字相关正则
const number = {
  mobile: /^1[345789]\d{9}$/, // 手机号
  length_6: /^\d{6}$/, //6位的数字
};

// 字符串相关正则
const string = {
  // 邮箱
  eamil: /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,
};

exports.number = number;
exports.string = string;