// 静态文件根路径
const ASSETS_SERVICE_BASEURL = process.env.NODE_ENV === 'production' ?
  'lab.lishangxi.cn' :
  'http://127.0.0.1:8990'

//API接口服务器
const API_SERVICE_BASEURL = process.env.NODE_ENV === 'production' ?
  'lab.lishangxi.cn' :
  'lishangxi.cn'

const env = {
  //脚本.min后缀
  HTTP_SCRIPT_SUFFIX: process.env.NODE_ENV === 'production' ? '.min' : '',

  // nodejs 服务端口
  NODE_SERVER_PORT: 8989,
  ASSETS_SERVICE_BASEURL,
  API_SERVICE_BASEURL,
}

export default env
