'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp; //import './style.scss';


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _noop = require('noop');

var _noop2 = _interopRequireDefault(_noop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LazyImging = (_temp = _class = function (_React$Component) {
  _inherits(LazyImging, _React$Component);

  function LazyImging(props) {
    _classCallCheck(this, LazyImging);

    var _this = _possibleConstructorReturn(this, (LazyImging.__proto__ || Object.getPrototypeOf(LazyImging)).call(this, props));

    _this.initialState();
    return _this;
  }

  _createClass(LazyImging, [{
    key: 'initialState',
    value: function initialState() {
      var url = this.props.url;

      this.state = {
        loaded: false,
        url: url
      };
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.url !== nextProps.url) {
        this.initialState();
        this.setState(nextProps);
      }
    }
  }, {
    key: 'getChildren',
    value: function getChildren() {
      var effect = this.props.effect;

      switch (effect) {
        case 'replace':
          return this.getReplaceChildren();
        case 'fade':
          return this.getFadeChildren();
      }
      return null;
    }
  }, {
    key: 'getReplaceChildren',
    value: function getReplaceChildren() {
      var _props = this.props,
          url = _props.url,
          placeholder = _props.placeholder,
          title = _props.title,
          className = _props.className,
          effect = _props.effect,
          style = _props.style,
          onClick = _props.onClick;

      var target = placeholder || url;

      return _react2.default.createElement('img', {
        'data-effect': effect,
        className: (0, _classnames2.default)('react-lazyimg', className),
        src: target, title: title,
        style: style,
        onClick: onClick,
        onLoad: this._onReplace.bind(this) });
    }
  }, {
    key: 'getFadeChildren',
    value: function getFadeChildren() {
      var _props2 = this.props,
          title = _props2.title,
          effect = _props2.effect,
          className = _props2.className,
          style = _props2.style,
          onClick = _props2.onClick;
      var url = this.state.url;

      return _react2.default.createElement('img', {
        'data-effect': effect,
        className: (0, _classnames2.default)('react-lazyimg', className),
        'data-src': url,
        src: url, title: title,
        style: style,
        onClick: onClick,
        onLoad: this._onFade.bind(this) });
    }
  }, {
    key: '_onReplace',
    value: function _onReplace(inEvent) {
      var _this2 = this;

      var _props3 = this.props,
          url = _props3.url,
          placeholder = _props3.placeholder,
          onLoad = _props3.onLoad;

      var dom = inEvent.target;
      var loaded = this.state.loaded;

      if (!loaded && placeholder) {
        this.setState({ loaded: true }, function () {
          dom.src = url;
          onLoad.call(_this2, inEvent);
        });
      }
    }
  }, {
    key: '_onFade',
    value: function _onFade(inEvent) {
      var _this3 = this;

      var onLoad = this.props.onLoad;

      var dom = inEvent.target;
      var _state = this.state,
          loaded = _state.loaded,
          url = _state.url;

      if (!loaded) {
        this.setState({ loaded: true }, function () {
          dom.removeAttribute('data-src');
          onLoad.call(_this3, inEvent);
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.getChildren();
    }
  }]);

  return LazyImging;
}(_react2.default.Component), _class.propTypes = {
  title: _react.PropTypes.string,
  url: _react.PropTypes.string,
  placeholder: _react.PropTypes.string,
  effect: _react.PropTypes.oneOf(['replace', 'fade']),
  onLoad: _react.PropTypes.func,
  onClick: _react.PropTypes.func,
  style: _react.PropTypes.object
}, _class.defaultProps = {
  onLoad: _noop2.default,
  onClick: _noop2.default,
  effect: 'replace',
  style: {}
}, _temp);
exports.default = LazyImging;