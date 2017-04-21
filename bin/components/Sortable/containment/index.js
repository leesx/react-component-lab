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

var _SortableItem = require('./SortableItem');

var _SortableItem2 = _interopRequireDefault(_SortableItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Containment = function (_React$Component) {
  _inherits(Containment, _React$Component);

  function Containment() {
    _classCallCheck(this, Containment);

    var _this = _possibleConstructorReturn(this, (Containment.__proto__ || Object.getPrototypeOf(Containment)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Containment, [{
    key: 'handleSort',
    value: function handleSort(data) {
      this.setState({
        result: data.join(' ')
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'demo-container' },
        _react2.default.createElement(
          'h4',
          { className: 'demo-title' },
          'Constrain the dragging area by setting ',
          _react2.default.createElement(
            'code',
            null,
            'containment'
          ),
          _react2.default.createElement(
            'a',
            { href: 'https://github.com/jasonslyvia/react-anything-sortable/tree/master/demo/pages/containment.js', target: '_blank' },
            'source'
          )
        ),
        _react2.default.createElement(
          'p',
          { className: 'sort-result' },
          this.state.result
        ),
        _react2.default.createElement(
          _reactAnythingSortable2.default,
          { className: 'containment-demo', containment: true },
          _react2.default.createElement(
            _SortableItem2.default,
            { className: 'item-1', sortData: 'react', key: 1 },
            '1React'
          ),
          _react2.default.createElement(
            _SortableItem2.default,
            { className: 'item-2', sortData: 'angular', key: 2 },
            '2Angular'
          ),
          _react2.default.createElement(
            _SortableItem2.default,
            { className: 'item-3', sortData: 'backbone', key: 3 },
            '3Backbone'
          )
        )
      );
    }
  }]);

  return Containment;
}(_react2.default.Component);

exports.default = Containment;