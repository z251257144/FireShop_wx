
// app登录用户
const login_user = {
  isLogin: false,
  token: '',
  avatarUrl: '',
  id: 0,
  isIdcardCheck: false,
  isSeller: false,
  levelRenew: false,
  mobile: "",
  source: 1,
  sourceStr: "",
  status: 0,
  statusStr: "",
};

function loginUserFromJson(json) {
  var model = login_user;
  model.isLogin = true;
  model.avatarUrl = json.avatarUrl;
  model.id = json.id;
  model.isIdcardCheck = json.isIdcardCheck;
  model.isSeller = json.isSeller;
  model.isSeller = json.isSeller;
  model.levelRenew = json.levelRenew;
  model.mobile = json.mobile;
  model.source = json.source;
  model.sourceStr = json.sourceStr;
  model.status = json.status;
  model.statusStr = json.statusStr;
  return model;
}

function clearUser(json) {
  var model = login_user;
  return model;
}

exports.user = login_user;
exports.loginUserFromJson = loginUserFromJson;
exports.clearUser = clearUser;