function lazyLoad (imgs = '.lazyload') {
	const images = document.querySelectorAll(imgs)

	const callback = (entries) => {
		entries.forEach( entry => {
			if( entry.isIntersecting){
			const image = entry.target
			const data_src = image.getAttribute('data-src')
			image.setAttribute('src', data_src);
			observer.unobserve( image )
			}
			})
	}

	const observer = new IntersectionObserver( callback )

	images.forEach( img => {
		observer.observe( img )
	})
}

//方法二 ：scroll事件密集发生，计算量很大，容易造成性能问题
// function lazyLoad (imgs = '.lazyload') {
// 	const images = document.querySelectorAll(imgs)
// 	window.addEventListener('scroll', (e) => {
// 		images.forEach( image => {
// 			const imageTop = image.getBoundingClientRect().top;
// 			if(imageTop < window.innerHeight){
// 				const data_src = image.getAttribute('data-src')
// 				image.setAttribute('src', data_src)
// 			};
// 		})
// 	})
// }


// 使用说明

// 1. 引入方法
// 2. 调用 lazyLoad() 方法，形参默认为 '.lazyload'，若须懒加载的图片类名不是，可写入
// 3. HTML部分 img 标签须有 data-href='图片地址'，class='.lazyload'