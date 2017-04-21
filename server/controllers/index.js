import express from 'express'
import http from 'http'
import querystring from 'querystring'
import env from './../env'



// 接口服务器地址
const connectServer = {
    protocol: 'http://',
    host: env.API_SERVICE_BASEURL,
    port: '',
};

const serverDomainProtocol = connectServer.protocol
const serverDomainHost = connectServer.host
const serverDomainPort = connectServer.port
const serverDomain = `${serverDomainProtocol}${serverDomainHost}`

const TOKEN = "7f8607caa463489188a873379a556e79"

export default function(serverAPI,router){

  // 定义一个通用 Get 接口，转接所有数据，
  router.get(serverAPI, (req, res) => {

      let reqUrl = serverDomain + req.url;
      console.log('[GET Request]: ', reqUrl);
      http.get(reqUrl, (sres) => {
          const statusCode = sres.statusCode;
          const contentType = sres.headers['content-type'];

          let error;
          if (statusCode !== 200) {
              error = new Error(`Request Failed.\n` + `Status Code: ${statusCode}`);
          } else if (!/^application\/json/.test(contentType)) {
              error = new Error(`Invalid content-type.\n` + `Expected application/json but received ${contentType}`);
          }
          if (error) {
              // consume response data to free up memory
              sres.resume();
              res.status(500).end();
              return;
          }

          sres.setEncoding('utf8');
          let rawData = '';
          sres.on('data', (chunk) => rawData += chunk);
          sres.on('end', () => {
              try {
                  const parsedData = JSON.parse(rawData);
                  console.log('[POST Response]: \n',parsedData)
                  res.json(parsedData);

              } catch (e) {
                  res.status(500).send(e.message);
              }
          });
      }).on('error', (e) => {
          console.log(`Get error: ${e.message}`);
          res.status(500).end();
      });
  })

  // 定义一个通用的 Post 接口，转接所有数据
  router.post(serverAPI, (req, res) => {
      const reqUrl = `${serverDomain}${req.url}`
      console.log('[POST Request]:>>>>>>>>>> \n ', reqUrl);
      const reqContentType = req.headers['content-type'];
      const reqBody = req.body;
      // 根据 请求的 content-type 判断用哪种格式化方式

      const reqData = reqContentType.indexOf('json') !== -1 ? JSON.stringify(reqBody) : querystring.stringify(reqBody);
			console.log(`请求参数:${reqData}`)
      const postOpt = {
          host: serverDomainHost,
          port: serverDomainPort,
          path: req.url,
          method: 'POST',
          headers: {
              'Content-Type': reqContentType
          }
      };
      const sreq = http.request(postOpt, (sres) => {
          let body = '';
          let error;
          if (sres.statusCode !== 200) {
              error = new Error(`Request Failed.\n` + `Status Code: ${sres.statusCode}`)
          }
          if (error) {
              console.log(error.message);
              sres.resume();
              res.status(500).end();
              return;
          }
          sres.on('data', (data) => {
              body += data;
          })
          .on('end', () => {
              try {
                  const parsedData = JSON.parse(body);
                  console.log('[POST Response]:<<<<<<<<<< \n',JSON.stringify(parsedData,null,2))
                  res.json(parsedData);
              } catch (e) {
                  console.log(e.message);
                  res.status(500).send(e.message);
              }
          })
          .on('error', () => {
              console.log('[ERROR] when req url:\n', reqUrl, reqData);
              res.status(500).send('error');
          })
      })
      sreq.write(reqData);
      sreq.end()
  })
}
