'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactMotion = require('react-motion');

var _rcLightbox = require('rc-lightbox');

var _rcLightbox2 = _interopRequireDefault(_rcLightbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MockData = [{
    src: './src/images/01.jpg',
    title: '图片1'
}, {
    src: './src/images/02.jpg',
    title: '图片2'
}, {
    src: 'https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-09-02/9577e9be05aea818907880ac66bdf4a0.jpg'
}, {
    src: 'https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-09-02/177e848bf4f0df538576f5422029c3e6.jpg'
}];

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
}];

var Lightbox2 = function (_Component) {
    _inherits(Lightbox2, _Component);

    function Lightbox2(props, context) {
        _classCallCheck(this, Lightbox2);

        var _this = _possibleConstructorReturn(this, (Lightbox2.__proto__ || Object.getPrototypeOf(Lightbox2)).call(this, props, context));

        _this.componentDidMount = function () {

            //findDOMNode().appendChild('<div></div>')
            //document.body.appendChild(findDOMNode(this.refs.mask))
        };

        _this.closeLightBox = function () {
            console.log('关闭');
            _this.setState({
                lightboxIsOpen: false
            });
        };

        _this.renderImgList = function (data) {
            return data.map(function (item, index) {
                return _react2.default.createElement(
                    'li',
                    {
                        key: 'img_' + index,
                        onClick: _this.showPicModal.bind(_this, { imgs: data, index: index })
                    },
                    _react2.default.createElement('img', { src: item.src })
                );
            });
        };

        _this.state = {
            lightboxImgData: [],
            lightboxIsOpen: false,
            currentImage: 0

        };
        return _this;
    }

    _createClass(Lightbox2, [{
        key: 'showPicModal',
        value: function showPicModal(imgGrounp) {
            this.setState({
                lightboxIsOpen: true,
                currentImage: imgGrounp.index || 0,
                lightboxImgData: imgGrounp.imgs
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'self-calendar' },
                _react2.default.createElement(
                    'button',
                    {
                        onMouseDown: this.handleMouseDown,
                        onTouchStart: this.handleTouchStart },
                    'Toggle'
                ),
                _react2.default.createElement(
                    'ul',
                    { className: 'img-list clearfix' },
                    this.renderImgList(MockData)
                ),
                _react2.default.createElement(
                    'h2',
                    null,
                    '\u7B2C\u4E8C\u7EC4\u56FE\u7247'
                ),
                _react2.default.createElement(
                    'ul',
                    { className: 'img-list clearfix' },
                    this.renderImgList(MockData)
                ),
                _react2.default.createElement(
                    'h2',
                    null,
                    '\u7B2C\u4E09\u7EC4\u56FE\u7247'
                ),
                _react2.default.createElement(
                    'ul',
                    { className: 'img-list clearfix' },
                    this.renderImgList(MockData2)
                ),
                this.state.lightboxImgData.length ? _react2.default.createElement(_rcLightbox2.default, {
                    imgSource: this.state.lightboxImgData,
                    isOpen: this.state.lightboxIsOpen,
                    currentImage: this.state.currentImage,
                    onClose: this.closeLightBox
                }) : null
            );
        }
    }]);

    return Lightbox2;
}(_react.Component);

exports.default = Lightbox2;