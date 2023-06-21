// script.js

// 设置生日日期（假设为 2023 年 6 月 30 日）
const birthday = new Date(2023, 5, 30);

// 获取页面元素
const countdownElement = document.getElementById('countdown');
const backgroundMusic = document.getElementById('background-music');

// 更新倒计时
function updateCountdown() {
  const currentDate = new Date();
  const remainingTime = birthday - currentDate;

  if (remainingTime > 0) {
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    countdownElement.textContent = `距离生日还有 ${days} 天 ${hours} 小时 ${minutes} 分钟`;
  } else {
    countdownElement.textContent = '今天是生日！';
  }
}

// 播放背景音乐
function playBackgroundMusic() {
  backgroundMusic.play().catch(error => {
    // 处理自动播放被浏览器阻止的情况
    console.log('无法自动播放背景音乐:', error);
  });
}

// 绑定页面加载完成事件
window.addEventListener('load', () => {
  updateCountdown();
  playBackgroundMusic();
});

// 更新倒计时，并每分钟更新一次
setInterval(updateCountdown, 60000);
