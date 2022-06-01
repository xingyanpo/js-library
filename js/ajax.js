function ajax(options) {
  var defaults = {
    type: 'get',
    url: '',
    data: {},
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    success: function () { },
    error: function () { }
  }
  Object.assign(defaults, options);

  var xhr = new XMLHttpRequest();
  var params = '';
  for (var attr in defaults.data) {
    params += attr + '=' + defaults.data[attr] + '&'
  }
  params = params.substr(0, params.length - 1);
  if (defaults.type == 'get') {
    defaults.url = defaults.url + '?' + params;
  }
  xhr.open(defaults.type, defaults.url);
  if (defaults.type == 'post') {
    var contentType = defaults.header['Content-Type']
    xhr.setRequestHeader('Content-Type', contentType)
    if (contentType == 'application/json') {
      xhr.send(JSON.stringify(defaults.data))
    } else {
      xhr.send(params);
    }
  } else {
    xhr.send();
  }

  xhr.onload = function () {
    var contentType = xhr.getResponseHeader('Content-Type');
    var responseText = xhr.responseText;
    if (contentType.includes('application/json')) {
      tesonseText = JSON.parse(responseText)
    }
    if (xhr.status == 200) {
      defaults.success(xhr.responseText, xhr);
    } else {
      defaults.error(xhr.responseText, xhr)
    }
  }
}


/*
使用说明
  支持 get， post 请求
  默认为 get 请求

ajax({
  type: 'get',
  url: 'http://127.0.0.1',
  data: {
    name: 'zhangsan',
    age: 18
  },
  header: {
      'Content-Type': 'application/x-www-form-urlencoded' //post请求时，默认请求类型
    },
  success: function (data, xhr) {
    console.log(data);
    console.log(xhr)
  },
  error: function (data, xhr) {
    console.log(data);
    console.log(xhr);
  }
})
*/