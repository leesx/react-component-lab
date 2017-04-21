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

var CalendarYear = function (_Component) {
    _inherits(CalendarYear, _Component);

    function CalendarYear(props, context) {
        _classCallCheck(this, CalendarYear);

        var _this = _possibleConstructorReturn(this, (CalendarYear.__proto__ || Object.getPrototypeOf(CalendarYear)).call(this, props, context));

        _this.componentDidMount = function () {};

        return _this;
    }

    _createClass(CalendarYear, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {}
    }, {
        key: 'renderYearTd',
        value: function renderYearTd() {
            var tdArr = [];

            for (var j = 0; j < 12; j++) {

                tdArr.push(_react2.default.createElement(
                    'th',
                    null,
                    j + 1 + '\u6708'
                ));
            }

            return tdArr;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'table',
                null,
                _react2.default.createElement(
                    'thead',
                    null,
                    _react2.default.createElement(
                        'tr',
                        null,
                        this.renderYearTd()
                    )
                ),
                _react2.default.createElement(
                    'tbody',
                    null,
                    _react2.default.createElement('td', null),
                    _react2.default.createElement('td', null),
                    _react2.default.createElement('td', null),
                    _react2.default.createElement('td', null),
                    _react2.default.createElement('td', null),
                    _react2.default.createElement('td', null),
                    _react2.default.createElement('td', null)
                )
            );
        }
    }]);

    return CalendarYear;
}(_react.Component);

exports.default = CalendarYear;