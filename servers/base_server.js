
const baseUrl = 'https://api.it120.cc';

const appKey = 'aca1c7ec5f68a84eed653a654ef4639e';

/**
 * 请求头
 */
var header = {
  'content-type': 'application/x-www-form-urlencoded',
}

/**
 * function: 根据需求处理请求参数：添加固定参数配置等
 * @params 请求参数
 */
function dealParams(params) {
  console.log("请求参数:", params)
  return params;
}

/**
 * 供外部post请求调用  
 */
function post(url, params, onSuccess, onFailed) {
  console.log("请求方式：", "POST")
  request(url, params, "POST", onSuccess, onFailed);

}

/**
 * 供外部get请求调用
 */
function get(url, params, onSuccess, onFailed) {
  console.log("请求方式：", "GET")
  request(url, params, "GET", onSuccess, onFailed);
}

/**
 * function: 封装网络请求
 * @url URL地址
 * @params 请求参数
 * @method 请求方式：GET/POST
 * @onSuccess 成功回调
 * @onFailed  失败回调
 */

function request(url, params, method, onSuccess, onFailed) {
  console.log(method + '请求, url：' + url);

  if (url.indexOf("http") !== 0) {
    url = baseUrl + "/" + appKey + "/" + url
    console.log(url);
  }

  wx.request({
    url: url,
    data: dealParams(params),
    method: method,
    header: header,
    success: function (res) {
      wx.hideLoading();
      console.log('响应：', res.data);

      if (res.data) {
        /** start 根据需求 接口的返回状态码进行处理 */
        if (res.statusCode == 200) {
          onSuccess(res.data['data']); //request success
        } else {
          onFailed(res.data['msg']); //request failed
        }
        /** end 处理结束*/
      }
    },
    fail: function (error) {
      onFailed(""); //failure for other reasons
    }
  })
}

/**
 * post请求(Promise)
 */
function postPromise(url, params) {
  return new Promise((resolve, reject) => {
    request(url, params, "POST", resolve, reject);
  });
}

/**
 * get请求(Promise)
 */
function getPromise(url, params) {
  return new Promise((resolve, reject) => {
    request(url, params, "GET", resolve, reject);
  });
}


// 1.通过module.exports方式提供给外部调用
module.exports = {
  postRequest: post,
  getRequest: get,
  postPromise: postPromise,
  getPromise: getPromise,
}