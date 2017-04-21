'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var imageStore = [];

var LazyImage = function (_Component) {
  _inherits(LazyImage, _Component);

  function LazyImage(props, context) {
    _classCallCheck(this, LazyImage);

    var _this = _possibleConstructorReturn(this, (LazyImage.__proto__ || Object.getPrototypeOf(LazyImage)).call(this, props, context));

    _this.loadImg = function () {
      console.log('-----');
    };

    _this.imgNode = null;

    _this.state = {
      isScrolledIntoView: false
    };
    return _this;
  }

  _createClass(LazyImage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var element = this.imgNode;
      var img = new Image();

      img.onload = function () {
        img.src = _this2.props.imgSource;
        var coords = img.getBoundingClientRect();
        var isScrolledIntoView = (coords.top >= 0 && coords.left >= 0 && coords.top) <= (window.innerHeight || document.documentElement.clientHeight);
        if (isScrolledIntoView) {
          _this2.setState({
            isScrolledIntoView: isScrolledIntoView
          });
        }
      };

      // window.onscroll =()=>{
      //   for(let i=0;i<imageStore.length;i++){
      //     console.log(imageStore[i])
      //     console.log(this.props.imgSource,'---------')
      //     this.scrolledIntoView(imageStore[i])
      //   }
      // }
    }
  }, {
    key: 'scrolledIntoView',
    value: function scrolledIntoView(element) {
      var coords = element.getBoundingClientRect();
      console.log(coords);
      var isScrolledIntoView = (coords.top >= 0 && coords.left >= 0 && coords.top) <= (window.innerHeight || document.documentElement.clientHeight);

      console.log(coords.top, window.innerHeight);

      this.setState({
        isScrolledIntoView: isScrolledIntoView
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('img', {
          src: !this.state.isScrolledIntoView ? 'http://s0.hao123img.com/res/img/richanglogo168_24.png' : this.props.imgSource,
          ref: function ref(node) {
            return _this3.imgNode = node;
          }

        })
      );
    }
  }]);

  return LazyImage;
}(_react.Component);

exports.default = LazyImage;