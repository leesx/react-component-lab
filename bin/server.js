'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _env = require('./env');

var _env2 = _interopRequireDefault(_env);

var _view = require('./view');

var _view2 = _interopRequireDefault(_view);

var _controllers = require('./controllers');

var _controllers2 = _interopRequireDefault(_controllers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nodeServerPort = _env2.default.NODE_SERVER_PORT;
var app = (0, _express2.default)();
//const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use((0, _cookieParser2.default)());
app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));
//app.use(morgan('default',{stream: accessLogStream}))

(0, _controllers2.default)('/saas/order/*', app);
app.use(function (req, res, next) {
	res.send((0, _view2.default)());
});

var server = app.listen(nodeServerPort, function (req, res, error) {
	if (error) throw error;

	var _server$address = server.address(),
	    address = _server$address.address,
	    port = _server$address.port;

	console.log('app listening at http://' + address + ':' + port);
});