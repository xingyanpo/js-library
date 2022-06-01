// 新建/修改 cookie
function setCookie(cname,cvalue,exdays)
{
  var d = new Date();
  d.setTime(d.getTime()+(exdays*24*60*60*1000));
  var expires = "expires="+d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

// 获取cookie值
function getCookie(cname)
{
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) 
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}

// 删除cookie
function deleteCookie(cname)
{
  var expires = "expires=Thu, 01 Jan 1970 00:00:00 GMT";
  document.cookie = cname + "=" + "; " + expires;
}

// 使用方法


// 新建、获取cookie 

// let cname = 'isshowPopup';
// let popupShow = getCookie(cname);
//       if (popupShow != '') {
//         popup.style.display = popupShow; // 如果有当前cookie执行的操作
//       } else {
//         setCookie(cname , 'none', 1); // 如果没有新建cookie
//       }


// 删除cookie

// deleteCookie(cname);