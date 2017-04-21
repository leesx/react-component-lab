'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calendar = function (_Component) {
    _inherits(Calendar, _Component);

    function Calendar(props, context) {
        _classCallCheck(this, Calendar);

        var _this = _possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, props, context));

        _this.componentDidMount = function () {};

        return _this;
    }

    _createClass(Calendar, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {}
    }, {
        key: 'renderMonthTd',
        value: function renderMonthTd() {
            //以当前月的第一天为参考点，利用setDate()获取日期
            //setDate()会自动转化日期，传入负值，获取上个月的日期，传入超过本月的天数，获取下一个月的日期
            //debugger
            var d = new Date(this.props.date);
            var yy = d.getFullYear();
            var mm = d.getMonth();
            var dd = d.getDate();
            //当前月有多少天
            // new Date(2017,4,0).getDate() 获取的是4月份的总天数
            // !!!注意区别: new Date(2017,4,1) 获取的是五月份的信息
            var totalDays = new Date(yy, mm + 1, 0).getDate();
            //console.log(new Date(yy,mm,1).getDay())
            //上个月有多少天
            //const prevTotalDays = new Date(yy,mm-1,0).getDate()

            //获取当前月的第一天是周几
            // new Date('2017-4-1').getDay() 获取的是
            var firstDayWeek = new Date(yy + '-' + (mm + 1) + '-1').getDay();
            firstDayWeek = firstDayWeek === 0 ? 7 : firstDayWeek;
            var trArr = [];

            var totalCells = Math.ceil((firstDayWeek + totalDays) / 7) * 7;
            //设置累加的起始点，起始点就是2减去当前月第一天是周几
            var num = 2 - firstDayWeek;
            for (var i = 0; i < Math.ceil((firstDayWeek + totalDays) / 7); i++) {

                var tdArr = [];
                for (var j = 0; j < 7; j++) {
                    var date = new Date(yy, mm, 1);
                    date.setDate(num);
                    tdArr.push(_react2.default.createElement(
                        'td',
                        {
                            style: num < 0 || num === 0 || num > totalDays ? { background: '#eee' } : null,
                            onClick: this.props.handleClickCell.bind(this, { date: date })
                        },
                        date.getMonth() === mm && date.getDate() === dd ? _react2.default.createElement(
                            'span',
                            { className: 'day current-day' },
                            date.getDate()
                        ) : _react2.default.createElement(
                            'span',
                            { className: 'day' },
                            date.getDate()
                        )
                    ));
                    num++;
                }
                trArr.push(_react2.default.createElement(
                    'tr',
                    { key: i },
                    tdArr
                ));
            }
            return trArr;
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
                        _react2.default.createElement(
                            'th',
                            null,
                            '\u5468\u4E00'
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            '\u5468\u4E8C'
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            '\u5468\u4E09'
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            '\u5468\u56DB'
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            '\u5468\u4E94'
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            '\u5468\u516D'
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            '\u5468\u65E5'
                        )
                    )
                ),
                _react2.default.createElement(
                    'tbody',
                    null,
                    this.renderMonthTd()
                )
            );
        }
    }]);

    return Calendar;
}(_react.Component);

exports.default = Calendar;