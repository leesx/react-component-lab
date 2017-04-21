'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

var _Main = require('./Main');

var _Main2 = _interopRequireDefault(_Main);

var _NoMatch = require('./NoMatch');

var _NoMatch2 = _interopRequireDefault(_NoMatch);

require('./index.css');

var _Calendar = require('./components/Calendar');

var _Calendar2 = _interopRequireDefault(_Calendar);

var _ScrollBarDemo = require('./components/ScrollBarDemo');

var _ScrollBarDemo2 = _interopRequireDefault(_ScrollBarDemo);

var _Lightbox = require('./components/Lightbox2');

var _Lightbox2 = _interopRequireDefault(_Lightbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Router,
  { history: _reactRouter.browserHistory },
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', component: _Main2.default },
    _react2.default.createElement(_reactRouter.Route, { path: 'calendar', component: _Calendar2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'scrollbar', component: _ScrollBarDemo2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'lightbox2', component: _Lightbox2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '*', component: _NoMatch2.default })
  )
);