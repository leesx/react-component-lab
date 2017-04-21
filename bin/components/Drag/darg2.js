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

var DragDemo2 = function (_Component) {
  _inherits(DragDemo2, _Component);

  function DragDemo2(props) {
    _classCallCheck(this, DragDemo2);

    return _possibleConstructorReturn(this, (DragDemo2.__proto__ || Object.getPrototypeOf(DragDemo2)).call(this, props));
  }

  _createClass(DragDemo2, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'handleSelectStart',
    value: function handleSelectStart() {
      //return false
    }
  }, {
    key: 'handleDragStart',
    value: function handleDragStart(ev) {
      ev.dataTransfer.setData("Text", ev.target.id);
    }
  }, {
    key: 'handleDragOver',
    value: function handleDragOver(ev) {
      ev.preventDefault();
    }
  }, {
    key: 'handleDragDrop',
    value: function handleDragDrop(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("Text");
      ev.target.appendChild(document.getElementById(data));
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'drag-container' },
        _react2.default.createElement(
          'div',
          { id: 'div1', onDrop: this.handleDragDrop, onDragOver: this.handleDragOver },
          _react2.default.createElement('img', {
            src: 'http://www.w3school.com.cn/i/eg_dragdrop_w3school.gif',
            draggable: 'true',
            onDragStart: this.handleDragStart,
            id: 'drag1'
          })
        ),
        _react2.default.createElement('div', { id: 'div2', onDrop: this.handleDragDrop, onDragOver: this.handleDragOver })
      );
    }
  }]);

  return DragDemo2;
}(_react.Component);

exports.default = DragDemo2;