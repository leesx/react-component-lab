'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _style2 = require('antd/lib/icon/style');

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _darg = require('./darg2');

var _darg2 = _interopRequireDefault(_darg);

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var eleDrag = null;

var DragDemo = function (_Component) {
  _inherits(DragDemo, _Component);

  function DragDemo(props) {
    _classCallCheck(this, DragDemo);

    var _this = _possibleConstructorReturn(this, (DragDemo.__proto__ || Object.getPrototypeOf(DragDemo)).call(this, props));

    _this.state = {
      listData: [{
        name: '爱奇艺'
      }, {
        name: '优酷'
      }, {
        name: '百度视频'
      }, {
        name: '腾讯视频'
      }, {
        name: '芒果TV'
      }, {
        name: '搜狐视频'
      }]
    };
    return _this;
  }

  _createClass(DragDemo, [{
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
      /*拖拽开始*/
      //拖拽效果
      ev.dataTransfer.effectAllowed = "move";
      ev.dataTransfer.setData("text", ev.target.innerHTML);
      ev.dataTransfer.setDragImage(ev.target, 0, 0);
      eleDrag = ev.target;
      console.log(ev);
      return true;
    }
  }, {
    key: 'handleDragEnd',
    value: function handleDragEnd(ev) {
      /*拖拽结束*/
      ev.dataTransfer.clearData("text");
      eleDrag = null;
      return false;
    }
  }, {
    key: 'handleDragOver',
    value: function handleDragOver(ev) {
      /*拖拽元素在目标元素头上移动的时候*/
      ev.preventDefault();
      return true;
    }
  }, {
    key: 'handleDragEnter',
    value: function handleDragEnter(ev) {
      /*拖拽元素进入目标元素头上的时候*/
      ev.target.style.color = "#ffffff";
      return true;
    }
  }, {
    key: 'handleDragDrop',
    value: function handleDragDrop(ev) {
      /*拖拽元素进入目标元素头上，同时鼠标松开的时候*/
      // if (eleDrag) {
      //     eleRemind.innerHTML = '<strong>"' + eleDrag.innerHTML + '"</strong>被扔进了垃圾箱';
      //     eleDrag.parentNode.removeChild(eleDrag);
      // }
      ev.target.style.color = "#000000";
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var listData = this.state.listData;


      return _react2.default.createElement(
        'div',
        { className: 'drag-container' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            {
              className: 'dustbin',
              onDragOver: this.handleDragOver,
              onDragEnter: this.handleDragEnter,
              onDrop: this.handleDragDrop

            },
            _react2.default.createElement(_icon2.default, { type: 'shopping-cart' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'dragbox' },
            listData.map(function (item, index) {
              return _react2.default.createElement(
                'div',
                {
                  key: 'item_' + index,
                  className: 'draglist',
                  title: '\u62D6\u62FD\u6211\u5427\u2014\u2014' + item.name,
                  draggable: 'true',
                  onSelectStart: _this2.handleSelectStart,
                  onDragStart: _this2.handleDragStart,
                  onDragEnd: _this2.handleDragEnd
                },
                item.name
              );
            })
          ),
          _react2.default.createElement('div', { className: 'dragremind' })
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_darg2.default, null)
        )
      );
    }
  }]);

  return DragDemo;
}(_react.Component);

exports.default = DragDemo;