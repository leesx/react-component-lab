'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactDom = require('react-dom');

require('./css/index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mask = function (_Component) {
    _inherits(Mask, _Component);

    function Mask(props) {
        _classCallCheck(this, Mask);

        var _this = _possibleConstructorReturn(this, (Mask.__proto__ || Object.getPrototypeOf(Mask)).call(this, props));

        _this.componentDidMount = function () {
            //console.log('你好',this.props.start)
            //this.changeImg(0)
            console.dir((0, _reactDom.findDOMNode)(document.getElementById('showImg')));
            _this.preLoadImg((0, _reactDom.findDOMNode)(document.getElementById('showImg')));

            _this.setState({
                start: _this.props.start
            });
        };

        _this.componentWillReceiveProps = function (nextProps) {
            //console.log(this.props.start,nextProps)
            if (nextProps.start !== undefined) {
                _this.setState({
                    start: nextProps.start
                }, function () {
                    _this.preLoadImg((0, _reactDom.findDOMNode)(document.getElementById('showImg')));
                });
            }
        };

        _this.preLoadImg = function (oImg) {
            var winW = document.body.clientWidth || document.documentElement.clientWidth;
            var winH = document.body.clientHeight || document.documentElement.clientHeight;

            oImg.src = _this.props.imgSource[_this.state.start].imgurl;
            oImg.onload = function () {
                _this.setState({
                    loadingImg: false
                });

                var imgWidth = oImg.width;
                var imgHeight = oImg.height;

                console.log(imgWidth, imgHeight);

                var centerPosX = (winW - imgWidth) / 2 + 'px';
                var centerPosY = (winH - imgHeight) / 2 + 'px';

                (0, _reactDom.findDOMNode)(_this.refs.imageBox).style.cssText = 'left:' + centerPosX + ';top:' + centerPosY;
            };
        };

        _this.state = {
            loadingImg: true,
            start: 0
        };
        return _this;
    }

    _createClass(Mask, [{
        key: 'nextImage',
        value: function nextImage(dir) {
            var cur = this.state.start;

            if (dir === 1) {
                cur++;
                if (cur > this.props.imgSource.length - 1) return;
                this.setState({
                    start: cur
                });
            } else {
                cur--;
                if (cur < 0) {
                    cur = 0;
                    return false;
                };
                this.setState({
                    start: cur
                });
            }
            console.log((0, _reactDom.findDOMNode)(document.getElementById('showImg')));

            this.preLoadImg((0, _reactDom.findDOMNode)(document.getElementById('showImg')));
            //findDOMNode(document.getElementById('showImg')).src = this.props.imgSource[cur].imgurl
            //this.changeImg(cur)
        }
    }, {
        key: 'render',
        value: function render() {
            var disp = this.props.showModal ? 'block' : 'none';
            return _react2.default.createElement(
                'div',
                { ref: 'mask', className: this.props.showModal ? 'show' : 'hide' },
                _react2.default.createElement('div', { className: 'mask' }),
                _react2.default.createElement(
                    'div',
                    { className: 'image-wrap', ref: 'imageBox' },
                    this.state.loadingImg ? _react2.default.createElement(
                        'div',
                        { className: 'show' },
                        _react2.default.createElement('img', { src: './src/images/loading.gif' })
                    ) : _react2.default.createElement(
                        'div',
                        { className: 'hide' },
                        _react2.default.createElement('img', { src: './src/images/loading.gif' })
                    ),
                    _react2.default.createElement('img', { id: 'showImg' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'lb-nav' },
                        _react2.default.createElement('a', { className: 'lb-prev', onClick: this.nextImage.bind(this, 0) }),
                        _react2.default.createElement('a', { className: 'lb-next', onClick: this.nextImage.bind(this, 1) })
                    ),
                    _react2.default.createElement('div', { className: 'lb-close', onClick: this.props.closePicModal })
                )
            );
        }
    }]);

    return Mask;
}(_react.Component);

exports.default = Mask;