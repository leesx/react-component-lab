'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcTweenOne = require('rc-tween-one');

var _rcTweenOne2 = _interopRequireDefault(_rcTweenOne);

var _reactDom = require('react-dom');

require('./index.less');

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} /**
   * 2017-3-31
   * lightbox2
   * 在图片切换的时候增加了动画效果。
   * 体验上更加接近jQuery版本的lightbox2
   */

/**
 * 2016-09-08
 * 修改为lightbox样式
 * 还有bug 加载新图片会有闪动，不知道怎么处理le.....
 */

var LightBox = function (_Component) {
    _inherits(LightBox, _Component);

    function LightBox(props) {
        _classCallCheck(this, LightBox);

        var _this = _possibleConstructorReturn(this, (LightBox.__proto__ || Object.getPrototypeOf(LightBox)).call(this, props));

        _this.componentDidMount = function () {

            _this.setState({
                currentImage: _this.props.currentImage,
                imgSource: _this.props.imgSource
            }, function () {
                _this.preLoadImg();
            });

            //遮罩层的宽度和高度
            var overlay = (0, _reactDom.findDOMNode)(document.getElementById('overlay'));
            var h = document.body.clientHeight || document.documentElement.clientHeight;
            overlay.style.width = '100%';
            overlay.style.height = h + 'px';
        };

        _this.componentWillReceiveProps = function (nextProps) {
            if (nextProps.currentImage != 'undefined') {
                _this.setState({
                    currentImage: nextProps.currentImage,
                    imgSource: nextProps.imgSource,
                    overlayOpacity: 0.6
                }, function () {
                    _this.preLoadImg(nextProps.currentImage);
                });
            }
        };

        _this.resizeImg = function () {
            var winW = document.body.clientWidth || document.documentElement.clientWidth;
            var winH = document.body.clientHeight || document.documentElement.clientHeight;
            var imgObj = (0, _reactDom.findDOMNode)(_this.refs.imgElem);

            var imgWidth = imgObj.width;
            var imgHeight = imgObj.height;
        };

        _this.preLoadImg = function (imageNumber) {
            var winW = document.body.clientWidth || document.documentElement.clientWidth;
            var winH = document.body.clientHeight || document.documentElement.clientHeight;

            var imgEle = (0, _reactDom.findDOMNode)(_this.refs.imgElem);
            var oImg = new Image();
            //关键点2

            var imgUrl = _this.state.imgSource[_this.state.currentImage].src;
            oImg.src = imgUrl;
            _this.setState({
                loadingImg: true
            });

            oImg.onload = function () {
                //console.log('图片加载成功')
                if (!_this.props.isOpen) return;

                //关键点1
                imgEle.src = imgUrl;
                // 在图片出来之前设置透明度为0
                imgEle.style.opacity = 0;

                var imgWidth = oImg.width;
                var imgHeight = oImg.height;

                if (imgHeight > winH) {
                    var scaleY = (winH - 100) / imgHeight;
                    imgWidth *= scaleY;
                    imgHeight *= scaleY;
                } else if (imgWidth > winW) {
                    var scaleX = (winW - 100) / imgWidth;
                    imgWidth *= scaleX;
                    imgHeight *= scaleX;
                }

                oImg = null;
                _this.setState({
                    imgWidth: imgWidth || 300,
                    imgHeight: imgHeight || 300,
                    top: (winH - imgHeight - 8) / 2,
                    loadingImg: false,
                    imgOpacity: 1
                });
            };

            //图片加载失败
            oImg.onerror = function () {
                _this.setState({
                    imgWidth: 300,
                    imgHeight: 400
                });
            };
        };

        _this.renderArrow = function () {
            var cur = _this.state.currentImage;

            return _react2.default.createElement('div', { className: 'lb-nav' }, _react2.default.createElement('a', { className: cur === 0 ? 'lb-prev hide' : 'lb-prev', onClick: _this.nextImage.bind(_this, 0) }), _react2.default.createElement('a', { className: cur === _this.props.imgSource.length - 1 ? 'lb-next hide' : 'lb-next', onClick: _this.nextImage.bind(_this, 1) }));
        };

        _this.state = {
            loadingImg: true,
            currentImage: 0,
            imgOpacity: 0.1,
            overlayOpacity: 0.6,
            imgWidth: null,
            imgHeight: null
        };
        return _this;
    }

    _createClass(LightBox, [{
        key: 'nextImage',
        value: function nextImage(dir) {
            var _this2 = this;

            var cur = this.state.currentImage;

            this.setState({
                imgOpacity: 0
            });

            console.log(this.state.imgOpacity);
            if (dir === 1) {
                cur++;
                if (cur > this.props.imgSource.length - 1) return;
                this.setState({
                    currentImage: cur
                }, function () {
                    _this2.preLoadImg(cur);
                });
            } else {
                cur--;
                if (cur < 0) {
                    cur = 0;
                    return false;
                };
                this.setState({
                    currentImage: cur
                }, function () {
                    _this2.preLoadImg(cur);
                });
            }
        }
    }, {
        key: 'handleClickOuter',
        value: function handleClickOuter(e) {
            //good
            if (e.target.id == 'lightbox' || e.target.id == 'overlay') {
                this.props.onClose();
                this.setState({
                    imgOpacity: 0,
                    overlayOpacity: 0
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var isDisplay = this.props.isOpen ? 'show' : 'hide';

            var _state = this.state,
                imgWidth = _state.imgWidth,
                imgHeight = _state.imgHeight,
                top = _state.top,
                left = _state.left;

            return _react2.default.createElement('div', { ref: 'lightBox', className: isDisplay }, _react2.default.createElement(_rcTweenOne2.default, {
                id: 'overlay',
                className: 'lightboxOverlay',
                animation: { opacity: this.state.overlayOpacity, yoyo: false, repeat: 0, duration: 1000 },
                component: 'div',
                style: { opacity: 0 },
                onClick: this.handleClickOuter.bind(this)
            }), _react2.default.createElement('div', { id: 'lightbox', className: 'lightbox', ref: 'imageBox', style: { top: top, left: left }, onClick: this.handleClickOuter.bind(this) }, _react2.default.createElement('div', { className: 'lb-outerContainer', style: { width: '' + (imgWidth + 8), height: '' + (imgHeight + 8) }, onClick: this.handleClickOuter.bind(this) }, _react2.default.createElement('div', { className: 'lb-container' }, _react2.default.createElement(_rcTweenOne2.default, {
                animation: { opacity: this.state.imgOpacity, yoyo: false, repeat: 0, duration: 1000 },
                component: 'img',

                id: 'showImg',
                ref: 'imgElem',
                className: 'lb-image',
                key: 'image-box',
                style: { display: this.state.loadingImg ? 'none' : 'block', opacity: 0, width: '' + imgWidth, height: '' + imgHeight }
            }), this.renderArrow(), _react2.default.createElement('div', { className: 'lb-loader', style: { width: '100%', height: 300, display: this.state.loadingImg ? 'block' : 'none' } }, _react2.default.createElement('a', { className: 'lb-cancel' })))), _react2.default.createElement('div', { className: 'lb-dataContainer', style: { width: '' + (imgWidth + 8), height: '' + (imgHeight + 8) } }, _react2.default.createElement('div', { className: 'lb-data' }, _react2.default.createElement('div', { className: 'lb-details' }, _react2.default.createElement('span', { className: 'lb-caption' }), _react2.default.createElement('span', { className: 'lb-number' }, this.state.currentImage + 1 + '/' + this.props.imgSource.length)), _react2.default.createElement('div', { className: 'lb-closeContainer' }, _react2.default.createElement('a', { className: 'lb-close', onClick: this.props.onClose }))))));
        }
    }]);

    return LightBox;
}(_react.Component);

exports.default = LightBox;

LightBox.propTypes = {
    children: _react.PropTypes.any,
    imgSource: _react.PropTypes.array,
    isOpen: _react.PropTypes.bool,
    onClose: _react.PropTypes.func
};

LightBox.defaultProps = {
    imgSource: [], //图片数组  [{src:'http://imageUrl'}]
    isOpen: false,
    currentImage: 0
};