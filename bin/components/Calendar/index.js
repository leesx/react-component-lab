'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _initialiseProps; /**
                                      * Created by leesx on 2017/4/6.
                                      */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

require('./index.less');

var _Week = require('./Week');

var _Week2 = _interopRequireDefault(_Week);

var _Month = require('./Month');

var _Month2 = _interopRequireDefault(_Month);

var _Year = require('./Year');

var _Year2 = _interopRequireDefault(_Year);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calendar = (_temp = _class = function (_Component) {
  _inherits(Calendar, _Component);

  function Calendar(props, context) {
    _classCallCheck(this, Calendar);

    var _this = _possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, props, context));

    _initialiseProps.call(_this);

    var d = new Date();
    _this.state = {
      yy: d.getFullYear(),
      mm: d.getMonth(), // 配套格式 new Date(yy,mm,dd). 如果月份加一，格式为 new Date('yy-mm-dd')
      dd: d.getDate(),
      selected: 'month'
    };
    return _this;
  }

  _createClass(Calendar, [{
    key: 'handleMonthClick',
    value: function handleMonthClick(dir) {
      var _state = this.state,
          yy = _state.yy,
          mm = _state.mm,
          dd = _state.dd,
          selected = _state.selected;


      if (selected === 'month') {
        this.setState({
          mm: dir === 2 ? mm + 1 : mm - 1
        });
      } else if (selected === 'week') {
        this.setState({
          dd: dir === 2 ? dd + 7 : dd - 7
        });
      } else {
        this.setState({
          yy: dir === 2 ? yy + 1 : yy - 1
        });
      }
    }
  }, {
    key: 'renderTd',
    value: function renderTd() {
      var _state2 = this.state,
          yy = _state2.yy,
          mm = _state2.mm,
          dd = _state2.dd;

      var date = new Date(yy, mm, dd);
      var selected = this.state.selected;

      if (selected === 'month') {
        return _react2.default.createElement(
          'div',
          { className: 'fc-view fc-month-view fc-basic-view' },
          _react2.default.createElement(_Month2.default, { date: date, handleClickCell: this.handleClickCell })
        );
      } else if (selected === 'week') {
        return _react2.default.createElement(
          'div',
          { className: 'fc-view fc-week-view fc-basic-view' },
          _react2.default.createElement(_Week2.default, { date: date })
        );
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Year2.default, { date: date })
      );
    }
  }, {
    key: 'seletedMode',
    value: function seletedMode(mode) {
      this.setState({
        selected: mode
      });
    }
  }, {
    key: 'renderTit',
    value: function renderTit() {
      var _state3 = this.state,
          yy = _state3.yy,
          mm = _state3.mm,
          dd = _state3.dd,
          selected = _state3.selected;


      if (selected === 'month') {
        var _date = new Date(yy, mm, dd);
        return _react2.default.createElement(
          'h2',
          null,
          _date.getFullYear(),
          ' \u5E74 ',
          _date.getMonth() + 1,
          ' \u6708'
        );
      } else if (selected === 'week') {
        var curDayWeek = new Date(yy, mm, dd).getDay();
        curDayWeek = curDayWeek === 0 ? 7 : curDayWeek;
        var begin = new Date(yy, mm, dd - curDayWeek + 1);
        var end = new Date(yy, mm, dd - curDayWeek + 7);

        return _react2.default.createElement(
          'h2',
          null,
          begin.getFullYear(),
          ' / ',
          begin.getMonth() + 1,
          ' / ',
          begin.getDate(),
          ' ~',
          end.getFullYear(),
          ' / ',
          end.getMonth() + 1,
          ' / ',
          end.getDate()
        );
      }
      var date = new Date(yy, mm, dd);
      return _react2.default.createElement(
        'h2',
        null,
        date.getFullYear()
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var selected = this.state.selected;

      return _react2.default.createElement(
        'div',
        { className: 'fc fc-unthemed fc-ltr' },
        _react2.default.createElement(
          'div',
          { className: 'fc-toolbar fc-header-toolbar' },
          _react2.default.createElement(
            'div',
            { className: 'fc-left' },
            _react2.default.createElement(
              'div',
              { className: 'fc-button-group' },
              _react2.default.createElement(
                'button',
                { className: 'fc-prev-button fc-button fc-state-default fc-corner-left', onClick: this.handleMonthClick.bind(this, 1) },
                _react2.default.createElement('span', { className: 'fc-icon fc-icon-left-single-arrow' })
              ),
              _react2.default.createElement(
                'button',
                { className: 'fc-next-button fc-button fc-state-default fc-corner-right', onClick: this.handleMonthClick.bind(this, 2) },
                _react2.default.createElement('span', { className: 'fc-icon fc-icon-right-single-arrow' })
              )
            ),
            _react2.default.createElement(
              'button',
              { onClick: this.handleClickToday, className: 'fc-today-button fc-button fc-state-default fc-corner-left fc-corner-right fc-state-disabled' },
              '\u4ECA\u5929'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'fc-right' },
            _react2.default.createElement(
              'div',
              { className: 'fc-button-group' },
              _react2.default.createElement(
                'button',
                { type: 'button', onClick: this.seletedMode.bind(this, 'month'), className: 'fc-month-button fc-button fc-state-default fc-corner-left ' + (selected === 'month' ? 'fc-state-active' : null) },
                '\u6708'
              ),
              _react2.default.createElement(
                'button',
                { type: 'button', onClick: this.seletedMode.bind(this, 'week'), className: 'fc-agendaWeek-button fc-button fc-state-default ' + (selected === 'week' ? 'fc-state-active' : null) },
                '\u5468'
              ),
              _react2.default.createElement(
                'button',
                { type: 'button', onClick: this.seletedMode.bind(this, 'year'), className: 'fc-agendaDay-button fc-button fc-state-default ' + (selected === 'year' ? 'fc-state-active' : null) },
                '\u5E74'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'fc-center' },
            this.renderTit()
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'fc-view-container' },
          this.renderTd()
        )
      );
    }
  }]);

  return Calendar;
}(_react.Component), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.componentDidMount = function () {};

  this.handleClickCell = function (date) {
    var d = new Date(date.date);
    if (d.getMonth() + 1 !== _this2.state.mm + 1) {
      _this2.setState({
        mm: d.getMonth()
      });
    }
    console.log(d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate());
  };

  this.handleClickToday = function () {
    var date = new Date();
    _this2.setState({
      yy: date.getFullYear(),
      mm: date.getMonth(),
      dd: date.getDate()
    });
  };
}, _temp);
exports.default = Calendar;