
const baseUrl = 'https://api.it120.cc';

const appKey = 'aca1c7ec5f68a84eed653a654ef4639e';

/**
 * 请求头
 */
var header = {
  'content-type': 'application/x-www-form-urlencoded',
  // 'Authorization': "Bearer " + wx.getStorageSync("token"),
  // 'os': 'android',
  // 'version': '1.0.0',
  // 'device_token': 'ebc9f523e570ef14',
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
  console.log('请求url：' + url);

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


// 1.通过module.exports方式提供给外部调用
module.exports = {
  postRequest: post,
  getRequest: get,
}



// const http = ({ url = '', param = {}, ...other } = {}) => {
//   wx.showLoading({
//     title: '请求中，请耐心等待..'
//   });
//   let timeStart = Date.now();
//   return new Promise((resolve, reject) => {
//     wx.request({
//       url: getUrl(url),
//       data: param,
//       header: {
//         'content-type': 'application/json' // 默认值 ,另一种是 "content-type": "application/x-www-form-urlencoded"
//       },
//       ...other,
//       complete: (res) => {
//         wx.hideLoading();
//         console.log(`耗时${Date.now() - timeStart}`);
//         if (res.statusCode >= 200 && res.statusCode < 300) {
//           resolve(res.data)
//         } else {
//           reject(res)
//         }
//       }
//     })
//   })
// }

// const getUrl = (url) => {
//   if (url.indexOf('://') == -1) {
//     url = baseUrl + url;
//   }
//   return url
// }

// // get方法
// const _get = (url, param = {}) => {
//   return http({
//     url,
//     param
//   })
// }

// const _post = (url, param = {}) => {
//   return http({
//     url,
//     param,
//     method: 'post'
//   })
// }

// const _put = (url, param = {}) => {
//   return http({
//     url,
//     param,
//     method: 'put'
//   })
// }

// const _delete = (url, param = {}) => {
//   return http({
//     url,
//     param,
//     method: 'put'
//   })
// }
// module.exports = {
//   baseUrl,
//   _get,
//   _post,
//   _put,
//   _delete
// }