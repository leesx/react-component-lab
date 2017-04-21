'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAnythingSortable = require('react-anything-sortable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: 'SortableItem',

  mixins: [_reactAnythingSortable.SortableItemMixin],

  getDefaultProps: function getDefaultProps() {
    return {
      className: 'demo-item'
    };
  },
  render: function render() {
    var _props = this.props,
        className = _props.className,
        children = _props.children;

    return this.renderWithSortable(_react2.default.createElement(
      'div',
      { className: className },
      children
    ));
  }
});