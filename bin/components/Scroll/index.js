'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _style3 = require('antd/lib/spin/style');

var _spin = require('antd/lib/spin');

var _spin2 = _interopRequireDefault(_spin);

var _style4 = require('antd/lib/card/style');

var _card = require('antd/lib/card');

var _card2 = _interopRequireDefault(_card);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollDemo = function (_Component) {
    _inherits(ScrollDemo, _Component);

    function ScrollDemo(props) {
        _classCallCheck(this, ScrollDemo);

        var _this = _possibleConstructorReturn(this, (ScrollDemo.__proto__ || Object.getPrototypeOf(ScrollDemo)).call(this, props));

        _this.state = {
            data: [{
                name: 'kk',
                desc: '北京'
            }, {
                name: 'kk',
                desc: '北京'
            }, {
                name: 'kk',
                desc: '北京'
            }, {
                name: 'kk',
                desc: '北京'
            }, {
                name: 'kk',
                desc: '北京'
            }, {
                name: 'kk',
                desc: '北京'
            }, {
                name: 'kk',
                desc: '北京'
            }, {
                name: 'kk',
                desc: '北京'
            }, {
                name: 'kk',
                desc: '北京'
            }, {
                name: 'kk',
                desc: '北京'
            }],
            page: 1,
            moreLoading: false
        };
        return _this;
    }

    _createClass(ScrollDemo, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var el = (0, _reactDom.findDOMNode)(this.refs.cardContainer);

            el.onscroll = function () {
                console.log('内容高度' + el.scrollHeight);
                console.log(el.scrollTop);
                if (el.scrollHeight - (el.scrollTop + el.offsetHeight) < 30) {

                    _this2.setState({
                        moreLoading: true

                    });

                    setTimeout(function () {
                        var d = _this2.state.data.push({
                            name: 'kk',
                            desc: '北京'
                        });
                        _this2.setState({
                            moreLoading: false,
                            data: _this2.state.data
                        });
                    }, 2000);
                }
            };
        }
    }, {
        key: 'renderCardList',
        value: function renderCardList() {
            var d = this.state.data;
            return d.map(function (item, index) {
                return _react2.default.createElement(
                    _card2.default,
                    { style: { width: 240 }, key: index, bodyStyle: { padding: 5 } },
                    _react2.default.createElement(
                        'div',
                        { className: 'custom-image' },
                        _react2.default.createElement('img', { alt: 'example', width: '100%', src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'custom-card' },
                        _react2.default.createElement(
                            'h3',
                            null,
                            index + 1 + '-' + item.name
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            item.desc
                        )
                    )
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'card-container', ref: 'cardContainer' },
                this.renderCardList(),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        _spin2.default,
                        { spinning: this.state.moreLoading },
                        ' \u62FC\u547D\u52A0\u8F7D\u4E2D....'
                    )
                )
            );
        }
    }]);

    return ScrollDemo;
}(_react.Component);

exports.default = ScrollDemo;