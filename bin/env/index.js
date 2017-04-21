'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 静态文件根路径
var ASSETS_SERVICE_BASEURL = process.env.NODE_ENV === 'production' ? 'lab.lishangxi.cn' : 'http://127.0.0.1:8990';

//API接口服务器
var API_SERVICE_BASEURL = process.env.NODE_ENV === 'production' ? 'lab.lishangxi.cn' : 'lishangxi.cn';

var env = {
  //脚本.min后缀
  HTTP_SCRIPT_SUFFIX: process.env.NODE_ENV === 'production' ? '.min' : '',

  // nodejs 服务端口
  NODE_SERVER_PORT: 8989,
  ASSETS_SERVICE_BASEURL: ASSETS_SERVICE_BASEURL,
  API_SERVICE_BASEURL: API_SERVICE_BASEURL
};

exports.default = env;