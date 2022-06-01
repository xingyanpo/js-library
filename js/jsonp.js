function jsonp(options) {
  var script = document.createElement("script");
  var params = '';
  for (var attr in options.data) {
    params += '&' + attr + '='+ options.data[attr]
  }
  var fnName = 'myJsonp' + Math.random().toString().replace('.', '');
  window[fnName] = options.success;
  script.src = options.url + '?callback=' + fnName + params;
  document.body.appendChild(script);
  script.onload = function () {
    document.body.removeChild(script);
  }
}

/* 
使用：
jsonp ({
  url: 'http://loaclhost/test',
  //data为可选参数
  data: {
    name: 'zhangsan',
    age: 18
  }
  success: function (data) {
    console.log(data)
  }
})
*/