function popup (element) {
  let parentElement = document.querySelector(element)
  let elementLength = parentElement.childNodes.length;//获取子节点数量
  let getElement;

  if (elementLength == 1) {
    getElement = parentElement.firstChild;
  }else {
    getElement = parentElement.childNodes;
  }

//创建弹窗dom
if (!document.querySelector('.x-popup')) {
  let style = document.createElement('style')
  style.innerHTML = `
  .x-popup {width:100%;height:100%;z-index:999;position:fixed;left:0;top:0;bottom:0;right:0;opacity:1;transition:ease-in-out;background: rgba(0,0,0,.8);visibility: hidden;}
  .close-popup {width:50px;height:50px;position:absolute;right:0;top:0;background-color:rgba(255,255,255,.7);z-index:100;box-shadow:0 3px 20px 0 rgb(0 0 0 / 20%), 0 2px 10px 0 rgb(0 0 0 / 20%);}
  .close-popup::before {content: ' '; position: absolute; top: 50%; left: 50%; width: 22.5px; height: 2.5px; background: #4d4d4d; transition: .5s transform ease; transform: translate(-50%,-50%) rotate(-45deg);}
  .close-popup::after {content: ' '; position: absolute; top: 50%; left: 50%; width: 22.5px; height: 2.5px; background: #4d4d4d; transition: .5s transform ease; transform: translate(-50%,-50%) rotate(45deg);}
  .close-popup:hover::before {transform: translate(-50%,-50%) rotate(0deg);}
  .close-popup:hover::after {transform: translate(-50%,-50%) rotate(180deg);}
  .x-popup-active {visibility: visible; opacity:1; transition:ease-in-out;}
  .x-video {width:80%;margin:auto;}
  `
  document.querySelector('head').appendChild(style)
  let popupDom = document.createElement('div')
  popupDom.classList.add('x-popup')
  popupDom.innerHTML = `<button class='close-popup'></button>`
  document.querySelector('body').appendChild(popupDom)

}
let xPupup = document.querySelector('.x-popup')
let closePopup = document.querySelector('.close-popup')

  getElement.forEach(ele => {
    ele.addEventListener('click', (e) => {
      e.preventDefault()
      const PASSIVE = function (e) {
        e.preventDefault();
      }
      document.body.style.overflow = 'hidden';
      document.addEventListener('touchmove', PASSIVE, {
              passive: false,
      });
      xPupup.insertAdjacentHTML('beforeend', '<video class="x-video" src="#"></video>')
      let videoSrc = ele.getAttribute('src');
      console.log(videoSrc)
      document.querySelector('.x-video').setAttribute('src', videoSrc)
      xPupup.classList.add('x-popup-active')
    })
  });

  closePopup.addEventListener('click', () => {
    xPupup.classList.remove('x-popup-active')
    document.body.style.overflow = 'auto';
    document.removeEventListener('touchmove', PASSIVE, {
            passive: false,
    });
  })
}


