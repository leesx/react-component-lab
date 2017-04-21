'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAnythingSortable = require('react-anything-sortable');

var _reactAnythingSortable2 = _interopRequireDefault(_reactAnythingSortable);

var _DemoHOCItem = require('./DemoHOCItem');

var _DemoHOCItem2 = _interopRequireDefault(_DemoHOCItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Vertical = function (_React$Component) {
  _inherits(Vertical, _React$Component);

  function Vertical() {
    _classCallCheck(this, Vertical);

    var _this = _possibleConstructorReturn(this, (Vertical.__proto__ || Object.getPrototypeOf(Vertical)).call(this));

    _this.handleSort = function (data) {
      _this.setState({
        result: data.join(' ')
      });
    };

    _this.state = {};
    return _this;
  }

  _createClass(Vertical, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'demo-container' },
        _react2.default.createElement(
          'h4',
          { className: 'demo-title' },
          'Using decorators',
          _react2.default.createElement(
            'a',
            { href: 'https://github.com/jasonslyvia/react-anything-sortable/tree/master/demo/pages/vertical.js', target: '_blank' },
            'source'
          )
        ),
        _react2.default.createElement(
          'p',
          { className: 'sort-result' },
          'result: ',
          this.state.result
        ),
        _react2.default.createElement(
          _reactAnythingSortable2.default,
          { onSort: this.handleSort.bind(this), className: 'vertical-container', direction: 'vertical' },
          _react2.default.createElement(
            _DemoHOCItem2.default,
            { className: 'vertical', sortData: 'react', key: 1 },
            'React'
          ),
          _react2.default.createElement(
            _DemoHOCItem2.default,
            { className: 'vertical', sortData: 'angular', key: 2 },
            'Angular'
          ),
          _react2.default.createElement(
            _DemoHOCItem2.default,
            { className: 'vertical', sortData: 'backbone', key: 3 },
            'Backbone'
          )
        )
      );
    }
  }]);

  return Vertical;
}(_react2.default.Component);

exports.default = Vertical;