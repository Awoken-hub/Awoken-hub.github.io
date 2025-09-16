
// 自动生成的时间戳文件 - 请勿手动编辑
window.LAST_DEPLOY_TIME = "2025/09/16 18:46:43";

// 在页面加载完成后更新时间戳显示
document.addEventListener('DOMContentLoaded', function() {
  const timestampElement = document.getElementById('last-deploy');
  if (timestampElement) {
    timestampElement.textContent = window.LAST_DEPLOY_TIME;
  }
  
  // 同时查找其他可能的时间戳显示元素
  const otherElements = document.querySelectorAll('.last-deploy-time, .deployment-time');
  otherElements.forEach(element => {
    element.textContent = window.LAST_DEPLOY_TIME;
  });
});
