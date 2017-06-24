import env from './../env'

const baseUrl = env.ASSETS_SERVICE_BASEURL
const suffix = env.HTTP_SCRIPT_SUFFIX
const nodeServerPort = env.HTTP_SERVER_PORT

export default function renderFullPage(html, initialState) {
    return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>welcome sir Hi，React 组件实验室2017</title>
        <style>
          body,h1,h2,h3,h4,h5,h6,hr,p,blockquote,dl,dt,dd,ul,ol,li,pre,form,fieldset,legend,button,input,textarea,th,td {
              margin: 0;
              padding: 0
          }

          body,button,input,select,textarea {
              font: 12px/1.5 "microsoft yahei";
              *line-height: 1.5;
              -ms-overflow-style: scrollbar;
              font-family:"Microsoft Yahei";
          }

          h1,h2,h3,h4,h5,h6 {
              font-size: 100%
          }
          ul,li{
            list-style:none;
          }
          html,body{
            height:100%;
            background:#eee;
            font: 12px/150% 'Microsoft Yahei';
          }
          .left-box{
            float:left;
            width:200px;
            height:100%;
            background:rgba(36, 19, 19, 0.14);
            border-right:1px solid #ccc;
          }
          .left-nav{
            padding:10px;
          }
          .left-box h2{
            margin-bottom:20px;
            font-size:20px;
          }
          .left-box li{
            font-size:14px;
            line-height:25px;

          }
          .right-box{
            height:100%;
            overflow:hidden;
          }

          #root{
              height:100%;
          }
        </style>
      </head>
      <body>
        <div id="root" ></div>
        <script src="https://cdn.bootcss.com/react/15.5.4/react.min.js"></script>
        <script src="https://cdn.bootcss.com/react/15.5.4/react-dom.min.js"></script>
        <script src="https://cdn.bootcss.com/immutable/3.8.1/immutable.min.js"></script>
        <script src="/scripts/vendor.bundle.js"></script>
        <script src="/scripts/main.min.js"></script>
      </body>
    </html>
    `
}
