'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _style2 = require('antd/lib/spin/style');

var _spin = require('antd/lib/spin');

var _spin2 = _interopRequireDefault(_spin);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactLazyload = require('react-lazyload');

var _reactLazyload2 = _interopRequireDefault(_reactLazyload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import LazyImage from './index.js'

var MockData2 = [{
  src: 'http://www.people.com.cn/NMediaFile/2016/0902/MAIN201609021911314859050338728.jpg',
  title: '图片1'
}, {
  src: 'http://www.people.com.cn/NMediaFile/2016/0902/MAIN201609021348521914980960649.jpg',
  title: '图片2'
}, {
  src: 'https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-09-02/9577e9be05aea818907880ac66bdf4a0.jpg'
}, {
  src: 'https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-09-02/177e848bf4f0df538576f5422029c3e6.jpg'
}, {
  src: 'http://www.wallcoo.com/animal/v195_Lively_Dogs/wallpapers/1280x800/Lively_Dogs_wallpaper_MIX88041_wallcoo.com.jpg'
}, {
  src: 'http://www.wallcoo.com/animal/v195_Lively_Dogs/wallpapers/1280x800/Lively_Dogs_wallpaper_MIX88041_wallcoo.com2.jpg'
}, {
  src: 'https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-09-02/9577e9be05aea818907880ac66bdf4a0.jpg'
}, {
  src: 'https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-09-02/177e848bf4f0df538576f5422029c3e6.jpg'
}, {
  src: 'http://www.people.com.cn/NMediaFile/2016/0902/MAIN201609021911314859050338728.jpg',
  title: '图片1'
}, {
  src: 'http://www.people.com.cn/NMediaFile/2016/0902/MAIN201609021348521914980960649.jpg',
  title: '图片2'
}, {
  src: 'https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-09-02/9577e9be05aea818907880ac66bdf4a0.jpg'
}, {
  src: 'https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-09-02/177e848bf4f0df538576f5422029c3e6.jpg'
}, {
  src: 'http://www.wallcoo.com/animal/v195_Lively_Dogs/wallpapers/1280x800/Lively_Dogs_wallpaper_MIX88041_wallcoo.com.jpg'
}, {
  src: 'http://www.wallcoo.com/animal/v195_Lively_Dogs/wallpapers/1280x800/Lively_Dogs_wallpaper_MIX88041_wallcoo.com2.jpg'
}, {
  src: 'https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-09-02/9577e9be05aea818907880ac66bdf4a0.jpg'
}, {
  src: 'https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-09-02/177e848bf4f0df538576f5422029c3e6.jpg'
}];

function PlaceholderComponent() {
  return _react2.default.createElement(
    'div',
    { className: 'placeholder' },
    _react2.default.createElement(_spin2.default, null)
  );
}

var LazyImagesDemo = function (_Component) {
  _inherits(LazyImagesDemo, _Component);

  function LazyImagesDemo(props, context) {
    _classCallCheck(this, LazyImagesDemo);

    var _this = _possibleConstructorReturn(this, (LazyImagesDemo.__proto__ || Object.getPrototypeOf(LazyImagesDemo)).call(this, props, context));

    _this.componentDidMount = function () {};

    _this.renderImgList = function (data) {
      return data.map(function (item, index) {
        return _react2.default.createElement(
          'li',
          { key: 'img_' + index },
          _react2.default.createElement(
            _reactLazyload2.default,
            { once: false, height: 300, offset: [-100, 0], placeholder: _react2.default.createElement(_spin2.default, null) },
            _react2.default.createElement('img', { src: item.src })
          )
        );
      });
    };

    return _this;
  }

  _createClass(LazyImagesDemo, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'images-wrapper' },
        _react2.default.createElement(
          'h1',
          null,
          '===============\u56FE\u7247\u5EF6\u8FDFdemo'
        ),
        _react2.default.createElement(_spin2.default, null),
        _react2.default.createElement(
          'h2',
          null,
          '\u7B2C\u4E09\u7EC4\u56FE\u7247'
        ),
        _react2.default.createElement(
          'ul',
          { className: 'img-list clearfix' },
          this.renderImgList(MockData2)
        )
      );
    }
  }]);

  return LazyImagesDemo;
}(_react.Component);

exports.default = LazyImagesDemo;