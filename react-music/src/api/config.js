// 接口的配置

const URL = {
  carousel: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',
  newalbum: 'https://u.y.qq.com/cgi-bin/musicu.fcg'
}
// jsonp 模仿QQ请求的时候要带的参数
const PARAM = {
  format: 'jsonp',
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0,
}


const OPTION = {
  prefix: 'callback',
  param: 'jsonpCallback'
}

const CODE_SUCCESS = 0;
export { URL, PARAM, OPTION, CODE_SUCCESS };