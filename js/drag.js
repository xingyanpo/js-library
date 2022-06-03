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


function dragMouse (photos, snippet) {
  let vessel = document.querySelector(photos);
  let snip = document.querySelector(snippet);
  const vesselLeft = vessel.offsetLeft;
  const vesselTop = vessel.offsetTop;

  snip.addEventListener('mousedown', (e) => {
    const snipLeft = e.pageX - vesselLeft - snip.offsetLeft;
    const snipTop = e.pageY - vesselTop - snip.offsetTop;

    function moving (e) {
      snip.style.left = e.pageX -snipLeft - vesselLeft + 'px';
      snip.style.top = e.pageY - snipTop - vesselTop + 'px';
    }

    document.addEventListener('mousemove', moving, false);

    document.addEventListener('mouseup', (e) => {
      document.removeEventListener('mousemove', moving)
    }, false)
  }, false)
}

// 拖拽验证码方法
// 1. 调用方法
// 2. 使用方法 dragMouse(val1 , val2)
// 3. 传入必填形参，第一个参数是两个图片的父容器 选择器，第二个是需要移动的图片 选择器

// 要求
// 1. img标签需有 alt属性 和 draggable='false'