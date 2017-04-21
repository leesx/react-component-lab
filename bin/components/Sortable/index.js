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

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SortableDemo = function (_React$Component) {
    _inherits(SortableDemo, _React$Component);

    function SortableDemo(props) {
        _classCallCheck(this, SortableDemo);

        var _this = _possibleConstructorReturn(this, (SortableDemo.__proto__ || Object.getPrototypeOf(SortableDemo)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(SortableDemo, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'wrapper' },
                _react2.default.createElement(
                    'ul',
                    null,
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: 'sortable/normal', activeClassName: 'active' },
                            'Normal'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: 'sortable/image', activeClassName: 'active' },
                            'Image'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: 'sortable/dynamic', activeClassName: 'active' },
                            'Dynamic'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: 'sortable/containment', activeClassName: 'active' },
                            'Containment'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: 'sortable/handle', activeClassName: 'active' },
                            'Handle'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: 'sortable/fixed', activeClassName: 'active' },
                            'Mixed with un-sortable items'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: 'sortable/vertical', activeClassName: 'active' },
                            'Vertically sorting'
                        )
                    )
                ),
                this.props.children
            );
        }
    }]);

    return SortableDemo;
}(_react2.default.Component);

exports.default = SortableDemo;