function drag (vessel, imgs) {
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
    empty.querySelector('img').style.border = 'none';
  })

  empty.addEventListener('dragenter', (e) => { // 事件-进入区域 进行时
    if (empty.firstChild) empty.removeChild(empty.firstChild);
  })

  empty.addEventListener('dragover', (e) => { // 事件-进入区域 进入后
    e.preventDefault();
  })

  empty.addEventListener('drop', (e) => { // 事件-进入区域 放置
    e.preventDefault();
    let node = document.querySelector(`img[alt=${name}]`).cloneNode(true)
    e.target.appendChild(node)
  })

  if ( !!imgs && document.querySelector(imgs).querySelectorAll('img').length>0 ) {
    let images = document.querySelector(imgs).querySelectorAll('img')
    images.forEach(item => {
        item.addEventListener('click', (e) => {
          e.preventDefault;
          let cloneImg = item.cloneNode(true);
          if (empty.firstChild) empty.removeChild(empty.firstChild);
          empty.appendChild(cloneImg)
        })
      })
  }

}


// 使用说明

// 1. 引入方法
// 2. 调用方法，传入形参
// 3. 第一个形参是图片放置的容器的 .类名或#id名（必填）
// 4. 第二个形参是所有img标签的父标签#id名（选填）填写之后支持点击

// 要求
// 1. img标签需有 alt属性 和 draggable='true'