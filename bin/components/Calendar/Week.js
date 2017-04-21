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

var CalendarWeek = function (_Component) {
    _inherits(CalendarWeek, _Component);

    function CalendarWeek(props, context) {
        _classCallCheck(this, CalendarWeek);

        // let d = new Date()
        // this.state = {
        //      yy : d.getFullYear(),
        //      mm : d.getMonth(), // 配套格式 new Date(yy,mm,dd). 如果月份加一，格式为 new Date('yy-mm-dd')
        //      dd : d.getDate(),
        // };
        var _this = _possibleConstructorReturn(this, (CalendarWeek.__proto__ || Object.getPrototypeOf(CalendarWeek)).call(this, props, context));

        _this.componentDidMount = function () {};

        return _this;
    }

    _createClass(CalendarWeek, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            // if(nextProps.date){
            //   let d = new Date(nextProps.date)
            //   this.setState({
            //        yy : d.getFullYear(),
            //        mm : d.getMonth(),
            //        dd : d.getDate(),
            //   })
            // }
        }
    }, {
        key: 'renderWeekTd',
        value: function renderWeekTd() {
            var d = new Date(this.props.date);
            var yy = d.getFullYear();
            var mm = d.getMonth();
            var dd = d.getDate();

            var weekStr = '一二三四五六日';
            // const {yy,mm,dd} = this.state
            //获取当前是周几
            var curDayWeek = new Date(yy, mm, dd).getDay();
            curDayWeek = curDayWeek === 0 ? 7 : curDayWeek;
            var tdArr = [];

            for (var j = 1; j <= 7; j++) {
                var date = new Date(yy, mm, dd - curDayWeek + j);
                tdArr.push(_react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement(
                        'span',
                        { className: curDayWeek === j ? 'current-week' : null },
                        '\u5468' + weekStr[j - 1] + '/' + date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
                    )
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
                        this.renderWeekTd()
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

    return CalendarWeek;
}(_react.Component);

exports.default = CalendarWeek;