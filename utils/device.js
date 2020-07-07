
// 延迟0.1秒显示
function showToastDelay(message) {
  setTimeout(()=>{
    wx.showToast({
      title: message,
      icon: 'none'
    })
  }, 100); 
}

// 延迟0.1秒成功显示
function showToastSuccess(message) {
  setTimeout(() => {
    wx.showToast({
      title: message,
    })
  }, 100);
}

exports.showToastDelay = showToastDelay;
exports.showToastSuccess = showToastSuccess;