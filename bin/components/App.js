'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _style4 = require('antd/lib/icon/style');

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _style5 = require('antd/lib/modal/style');

var _modal = require('antd/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

var _style6 = require('antd/lib/layout/style');

var _layout = require('antd/lib/layout');

var _layout2 = _interopRequireDefault(_layout);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LeftMenu = require('./LeftMenu');

var _LeftMenu2 = _interopRequireDefault(_LeftMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = _layout2.default.Header,
    Sider = _layout2.default.Sider,
    Content = _layout2.default.Content;

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.toggle = function () {
      _this.setState({
        collapsed: !_this.state.collapsed
      });
    };

    _this.state = {
      collapsed: false
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (window.localStorage) {
        if (!localStorage.welcome_react_lab) {
          this.welcomeLab();
          localStorage.setItem('welcome_react_lab', true);
        }
      }
    }
  }, {
    key: 'welcomeLab',
    value: function welcomeLab() {
      _modal2.default.info({
        title: '来自世界最友好的提示',
        content: _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'p',
            null,
            '\u8FD9\u662F\u4E00\u4E2Areact \u7EC4\u4EF6\u5B9E\u9A8C\u5E73\u53F0\uFF0C\u8FD9\u4E2A\u5E73\u53F0\u96C6\u6210\u4E86React \u3001ES2015\u3001 Babel\u3001Ant.design \u3002\u4F60\u53EF\u4EE5\u5728\u5E73\u53F0\u968F\u610F\u5199\u4F60\u7684react\u4EE3\u7801\uFF0C\u800C\u4E0D\u7528\u62C5\u5FC3\u73AF\u5883\u914D\u7F6E\u95EE\u9898\u3002'
          )
        ),
        onOk: function onOk() {}
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _layout2.default,
        { className: 'rc-lab-layout' },
        _react2.default.createElement(
          Sider,
          {
            trigger: null,
            collapsible: true,
            collapsed: this.state.collapsed
          },
          _react2.default.createElement(
            'div',
            { className: 'sider-logo' },
            _react2.default.createElement(
              'span',
              null,
              'React Component Lab'
            ),
            _react2.default.createElement(
              'h2',
              null,
              'React \u7EC4\u4EF6\u5B9E\u9A8C\u5BA4'
            )
          ),
          _react2.default.createElement(_LeftMenu2.default, null)
        ),
        _react2.default.createElement(
          _layout2.default,
          null,
          _react2.default.createElement(
            Header,
            { style: { background: '#fff', padding: 0 } },
            _react2.default.createElement(_icon2.default, {
              className: 'trigger',
              type: this.state.collapsed ? 'menu-unfold' : 'menu-fold',
              onClick: this.toggle
            })
          ),
          _react2.default.createElement(
            Content,
            { style: { margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 } },
            this.props.children
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;