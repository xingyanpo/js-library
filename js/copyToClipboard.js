 function copyToClipboard (text, language = 'en') {
  const clipboardObj = navigator.clipboard;
  if (!clipboardObj) {
    if (language == 'cn') {
      alert('浏览器不支持复制到剪贴板')
    } else {
      alert('Browsers do not support copying to the clipboard')
    }
    return false
  }
  navigator.clipboard.writeText(text).then(() => {
    if (language == 'cn') {
      alert('复制成功')
    } else {
      alert('Copy success')
    }
  }, (error) => {
    console.log(String(error))
  });
  return true
}
