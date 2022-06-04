// debounce 防抖方法
function debounce (func, delay) {
  let timer;
  return function () {
    let content = this
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(content, arguments)
    }, delay*1000 )
  }
}

// 使用方法
// 防抖类似于自动门，有人进入后等待五秒关闭，如果再有人刷新五秒，等到无人再进5秒一过关闭门。

// 1. 调用方法
// 2. 使用方法，传入参数
// 3. 第一个参数是需要防抖的函数
// 4. 第二个是延迟时间,单位s