// 正则参考：https://blog.csdn.net/wa172126691/article/details/82991476

// 数字相关正则
const numberRegex = {
  phone: /^1[345789]\d{9}$/, // 手机号
  length_6: /^\d{6}$/, //6位的数字
};

// 字符串相关正则
const stringRegex = {
  // 邮箱
  eamil: /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,
};

// 判断是否符合正则表达式
function checkRegex(string, regEx) {

  console.log(string + "===" + regEx);
  if (string == null) {
    return false;
  }
  return regEx.test(string);
}


// 判断手机号
function checkPhone(phone) {
  return checkRegex(phone, numberRegex.phone);
}

// 判断邮箱
function checkEmail(email) {
  return checkRegex(email, stringRegex.eamil);
}

exports.number = numberRegex;
exports.string = stringRegex;
exports.checkPhone = checkPhone;
exports.checkEmail = checkEmail;