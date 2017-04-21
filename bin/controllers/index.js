'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (serverAPI, router) {

    // 定义一个通用 Get 接口，转接所有数据，
    router.get(serverAPI, function (req, res) {

        var reqUrl = serverDomain + req.url;
        console.log('[GET Request]: ', reqUrl);
        _http2.default.get(reqUrl, function (sres) {
            var statusCode = sres.statusCode;
            var contentType = sres.headers['content-type'];

            var error = void 0;
            if (statusCode !== 200) {
                error = new Error('Request Failed.\n' + ('Status Code: ' + statusCode));
            } else if (!/^application\/json/.test(contentType)) {
                error = new Error('Invalid content-type.\n' + ('Expected application/json but received ' + contentType));
            }
            if (error) {
                // consume response data to free up memory
                sres.resume();
                res.status(500).end();
                return;
            }

            sres.setEncoding('utf8');
            var rawData = '';
            sres.on('data', function (chunk) {
                return rawData += chunk;
            });
            sres.on('end', function () {
                try {
                    var parsedData = JSON.parse(rawData);
                    console.log('[POST Response]: \n', parsedData);
                    res.json(parsedData);
                } catch (e) {
                    res.status(500).send(e.message);
                }
            });
        }).on('error', function (e) {
            console.log('Get error: ' + e.message);
            res.status(500).end();
        });
    });

    // 定义一个通用的 Post 接口，转接所有数据
    router.post(serverAPI, function (req, res) {
        var reqUrl = '' + serverDomain + req.url;
        console.log('[POST Request]:>>>>>>>>>> \n ', reqUrl);
        var reqContentType = req.headers['content-type'];
        var reqBody = req.body;
        // 根据 请求的 content-type 判断用哪种格式化方式

        var reqData = reqContentType.indexOf('json') !== -1 ? JSON.stringify(reqBody) : _querystring2.default.stringify(reqBody);
        console.log('\u8BF7\u6C42\u53C2\u6570:' + reqData);
        var postOpt = {
            host: serverDomainHost,
            port: serverDomainPort,
            path: req.url,
            method: 'POST',
            headers: {
                'Content-Type': reqContentType
            }
        };
        var sreq = _http2.default.request(postOpt, function (sres) {
            var body = '';
            var error = void 0;
            if (sres.statusCode !== 200) {
                error = new Error('Request Failed.\n' + ('Status Code: ' + sres.statusCode));
            }
            if (error) {
                console.log(error.message);
                sres.resume();
                res.status(500).end();
                return;
            }
            sres.on('data', function (data) {
                body += data;
            }).on('end', function () {
                try {
                    var parsedData = JSON.parse(body);
                    console.log('[POST Response]:<<<<<<<<<< \n', JSON.stringify(parsedData, null, 2));
                    res.json(parsedData);
                } catch (e) {
                    console.log(e.message);
                    res.status(500).send(e.message);
                }
            }).on('error', function () {
                console.log('[ERROR] when req url:\n', reqUrl, reqData);
                res.status(500).send('error');
            });
        });
        sreq.write(reqData);
        sreq.end();
    });
};

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

var _env = require('./../env');

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 接口服务器地址
var connectServer = {
    protocol: 'http://',
    host: _env2.default.API_SERVICE_BASEURL,
    port: ''
};

var serverDomainProtocol = connectServer.protocol;
var serverDomainHost = connectServer.host;
var serverDomainPort = connectServer.port;
var serverDomain = '' + serverDomainProtocol + serverDomainHost;

var TOKEN = "7f8607caa463489188a873379a556e79";