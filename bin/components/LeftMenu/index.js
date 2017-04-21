'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _style3 = require('antd/lib/icon/style');

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _style4 = require('antd/lib/menu/style');

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubMenu = _menu2.default.SubMenu;

var LeftMenu = function (_Component) {
  _inherits(LeftMenu, _Component);

  function LeftMenu(props) {
    _classCallCheck(this, LeftMenu);

    return _possibleConstructorReturn(this, (LeftMenu.__proto__ || Object.getPrototypeOf(LeftMenu)).call(this, props));
  }

  _createClass(LeftMenu, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        _menu2.default,
        {

          defaultOpenKeys: ['sub1'],
          theme: 'dark',
          mode: 'inline'
        },
        _react2.default.createElement(
          SubMenu,
          { key: 'sub1', title: _react2.default.createElement(
              'span',
              null,
              _react2.default.createElement(_icon2.default, { type: 'mail' }),
              _react2.default.createElement(
                'span',
                null,
                '\u56FE\u7247\u7C7B'
              )
            ) },
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '2' },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/calendar' },
              '\u65E5\u5386demo'
            )
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '3' },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/scrollbar' },
              '\u6A21\u62DF\u6EDA\u52A8\u6761demo'
            )
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '4' },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/lazyimage' },
              '\u56FE\u7247\u5EF6\u8FDF'
            )
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '5' },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/lightbox2' },
              '\u4EFF\u7167lightbox2'
            )
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '6' },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/maskdemo' },
              '\u906E\u7F69\u5C42'
            )
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '7' },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/scroll' },
              '\u6EDA\u52A8'
            )
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '8' },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/sortable' },
              '\u62D6\u62FD\u6392\u5E8F'
            )
          )
        ),
        _react2.default.createElement(
          SubMenu,
          { key: 'sub2', title: _react2.default.createElement(
              'span',
              null,
              _react2.default.createElement(_icon2.default, { type: 'mail' }),
              _react2.default.createElement(
                'span',
                null,
                '\u5DE5\u5177\u7C7B'
              )
            ) },
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '1' },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/calendar' },
              '\u65E5\u5386demo'
            )
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '2' },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/calendar' },
              '\u65E5\u5386demo'
            )
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '3' },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/scrollbar' },
              '\u6A21\u62DF\u6EDA\u52A8\u6761demo'
            )
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '4' },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/lightbox' },
              '\u56FE\u7247'
            )
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '5' },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/lightbox2' },
              '\u4EFF\u7167lightbox2'
            )
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '6' },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/maskdemo' },
              '\u906E\u7F69\u5C42'
            )
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '7' },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/scroll' },
              '\u6EDA\u52A8'
            )
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '8' },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/sortable' },
              '\u62D6\u62FD\u6392\u5E8F'
            )
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '9' },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/testbabel' },
              '\u6D4B\u8BD5Babel'
            )
          )
        ),
        _react2.default.createElement(
          SubMenu,
          { key: 'sub3', title: _react2.default.createElement(
              'span',
              null,
              _react2.default.createElement(_icon2.default, { type: 'mail' }),
              _react2.default.createElement(
                'span',
                null,
                'Babel\u6D4B\u8BD5\u7C7B'
              )
            ) },
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '1' },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/calendar' },
              '\u65E5\u5386demo'
            )
          )
        )
      );
    }
  }]);

  return LeftMenu;
}(_react.Component);

exports.default = LeftMenu;