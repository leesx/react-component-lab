'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderFullPage;

var _env = require('./../env');

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseUrl = _env2.default.ASSETS_SERVICE_BASEURL;
var suffix = _env2.default.HTTP_SCRIPT_SUFFIX;
var nodeServerPort = _env2.default.HTTP_SERVER_PORT;

function renderFullPage(html, initialState) {
  return '\n    <!doctype html>\n    <html lang="en">\n      <head>\n        <meta charset="utf-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1">\n        <title>Hi\uFF0CReact \u7EC4\u4EF6\u5B9E\u9A8C\u5BA42017</title>\n        <style>\n          body,h1,h2,h3,h4,h5,h6,hr,p,blockquote,dl,dt,dd,ul,ol,li,pre,form,fieldset,legend,button,input,textarea,th,td {\n              margin: 0;\n              padding: 0\n          }\n\n          body,button,input,select,textarea {\n              font: 12px/1.5 "microsoft yahei";\n              *line-height: 1.5;\n              -ms-overflow-style: scrollbar;\n              font-family:"Microsoft Yahei";\n          }\n\n          h1,h2,h3,h4,h5,h6 {\n              font-size: 100%\n          }\n          ul,li{\n            list-style:none;\n          }\n          html,body{\n            height:100%;\n            background:#eee;\n            font: 12px/150% \'Microsoft Yahei\';\n          }\n          .left-box{\n            float:left;\n            width:200px;\n            height:100%;\n            background:rgba(36, 19, 19, 0.14);\n            border-right:1px solid #ccc;\n          }\n          .left-nav{\n            padding:10px;\n          }\n          .left-box h2{\n            margin-bottom:20px;\n            font-size:20px;\n          }\n          .left-box li{\n            font-size:14px;\n            line-height:25px;\n\n          }\n          .right-box{\n            height:100%;\n            overflow:hidden;\n          }\n\n          #root{\n              height:100%;\n          }\n        </style>\n      </head>\n      <body>\n        <div id="root" ></div>\n        <script src="https://cdn.bootcss.com/react/15.5.4/react.min.js"></script>\n        <script src="https://cdn.bootcss.com/react/15.5.4/react-dom.min.js"></script>\n        <script src="https://cdn.bootcss.com/immutable/3.8.1/immutable.min.js"></script>\n        <script src="/scripts/vendor.bundle.js"></script>\n        <script src="/scripts/main.min.js"></script>\n      </body>\n    </html>\n    ';
}