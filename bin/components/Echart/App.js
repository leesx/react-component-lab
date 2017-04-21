'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _echarts = require('echarts');

var _echarts2 = _interopRequireDefault(_echarts);

var _index = require('../src/index');

var _index2 = _interopRequireDefault(_index);

var _mockData = require('./mockData');

var _china = require('./china.json');

var _china2 = _interopRequireDefault(_china);

require('./dark');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by liekkas on 16/3/31.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


_echarts2.default.registerMap('china', _china2.default);

var colors = ['rgba(255, 0, 0, 0.4)', 'rgba(0, 255, 0, 0.4)', 'rgba(0, 0, 255, 0.4)'];
function getLoadingOption() {
  return {
    text: '数据加载中...',
    color: '#c23531',
    textColor: '#000',
    maskColor: colors[Math.floor(Math.random() * 2)],
    zlevel: 0
  };
}

var styles = {
  root: {
    height: '96vh',
    margin: '2vh',
    display: 'flex',
    backgroundColor: 'whitesmoke'
  },
  map: {
    width: '60%',
    height: '100%',
    border: '1px solid #336699',
    boxSizing: 'border-box'
  },
  container: {
    width: '39%',
    height: '100%',
    marginLeft: '1%'
  },
  day: {
    width: '100%',
    height: '49%',
    border: '1px solid #336699',
    marginBottom: '2%'
  },
  night: {
    width: '100%',
    height: '49%',
    border: '1px solid #336699'
  }
};

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.onMapClicked = _this.onMapClicked.bind(_this);
    _this.state = {
      mapOption: (0, _mockData.mockMapData)(),
      dayOption: (0, _mockData.mockLineData)('全国', '白天'),
      nightOption: (0, _mockData.mockLineData)('全国', '晚上'),
      mapConfig: {
        event: [{ type: 'click', handler: _this.onMapClicked }]
      }
    };
    return _this;
  }

  _createClass(App, [{
    key: 'onMapClicked',
    value: function onMapClicked(item) {
      this.setState({
        dayOption: (0, _mockData.mockLineData)(item.name, '白天'),
        dayConfig: {
          theme: this.state.dayConfig && this.state.dayConfig.theme === 'dark' ? 'default' : 'dark'
        },
        nightConfig: {
          showLoading: true,
          loadingOption: getLoadingOption()
        }
      });

      //晚上数据延迟两秒
      var bind = this;
      setTimeout(function () {
        bind.setState({
          nightOption: (0, _mockData.mockLineData)(item.name, '晚上'),
          nightConfig: {
            showLoading: false
          }
        });
      }, 2000);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          mapOption = _state.mapOption,
          dayOption = _state.dayOption,
          nightOption = _state.nightOption,
          mapConfig = _state.mapConfig,
          dayConfig = _state.dayConfig,
          nightConfig = _state.nightConfig;

      return _react2.default.createElement(
        'div',
        { style: styles.root },
        _react2.default.createElement(_index2.default, { option: mapOption, config: mapConfig, style: styles.map }),
        _react2.default.createElement(
          'div',
          { style: styles.container },
          _react2.default.createElement(_index2.default, { option: dayOption, config: dayConfig, style: styles.day }),
          _react2.default.createElement(_index2.default, { option: nightOption, config: nightConfig, style: styles.night })
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;