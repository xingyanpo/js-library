function drag (vessel) {
  let empty = document.querySelector(vessel);

  let name;
  document.addEventListener('dragstart', (e) => { // 事件-拖拽开始时将图片的alt属性保存在name
    name = e.target.alt;
  })

  let imgBorder = '2px dashed red' // 拖拽中图片样式
  document.addEventListener('drag', (e) => { // 事件-拖拽进行中
    e.target.style.border = imgBorder;
    empty.style.border = imgBorder;
  })

  document.addEventListener('dragend', (e) => { // 拖拽结束-事件
    e.target.style.border = 'none';
    empty.style.border = 'none';
  })

  empty.addEventListener('dragenter', (e) => { // 事件-进入区域 进行时
    if (empty.firstChild) empty.removeChild(empty.firstChild);
  })

  empty.addEventListener('dragover', (e) => { // 事件-进入区域 进入后
    e.preventDefault();
  })

  empty.addEventListener('drop', (e) => { // 事件-进入区域 放置
    e.preventDefault();
    e.target.appendChild(document.querySelector(`img[alt=${name}]`))
  })

}


// 使用说明

// 1. 引入方法
// 2. 调用方法，传入参数是图片放置的容器