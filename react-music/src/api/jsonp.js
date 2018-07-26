import originJsonp from 'jsonp'; // 引入jsonp
let jsonp = (url, data, option) => {
  return new Promise((resolve, reject) => {
    originJsonp(buildUrl(url, data), option, (err, data) => { //发送的请求
      if(!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

function buildUrl(url, data) { // 将请求的url拼接带上一些必要的参数
  let params = [];
  for(var key in data) {
    params.push(`${key}=${data[key]}`);
  }
  let param = params.join('&');
  if (url.indexOf('?') === -1) {
    url += '?' + param;
  } else {
    url += '&' + param;
  }
  return url;
}
export default jsonp;
