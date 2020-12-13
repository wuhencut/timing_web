resize()
window.onresize = function () {
  resize()
}

function resize() {
  let deviceWidth = document.documentElement.clientWidth;
  document.documentElement.style.fontSize = deviceWidth / 1920 * 100 + 'px';
  // 1rem === 100px
}