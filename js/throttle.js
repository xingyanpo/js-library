// throttle 节流方法
function throttle (func, delay) {
  let timer;
  return function () {
    let content = this;
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      func.apply(content, arguments);
      timer = null;
    }, delay*1000)
  }
}

// 使用方法
// 节流是用于不断触发的事件中节省性能，如滚动事件，提交表单事件

// 1. 调用方法
// 2. 使用 throttle(val1, val2)
// 3. 第一个形参是传入一个用于节流的函数
// 4. 第二个是多少秒执行一次，单位是秒

function throttleSec (func, delay) {
  let pre = 0;
  return function () {
    let now = new Date();
    let content = this;
    if (now - pre > delay*1000) {
      func.apply(content, arguments);
      pre = now;
    }
  }
}

// throttleSec() 方法二
//实现思路不同 使用方法同上