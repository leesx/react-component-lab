'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _style2 = require('antd/lib/message/style');

var _message = require('antd/lib/message');

var _message2 = _interopRequireDefault(_message);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _asyncGenerator = function () { function AwaitValue(value) { this.value = value; } function AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; if (value instanceof AwaitValue) { Promise.resolve(value.value).then(function (arg) { resume("next", arg); }, function (arg) { resume("throw", arg); }); } else { settle(result.done ? "return" : "normal", result.value); } } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen.return !== "function") { this.return = undefined; } } if (typeof Symbol === "function" && Symbol.asyncIterator) { AsyncGenerator.prototype[Symbol.asyncIterator] = function () { return this; }; } AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); }; AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); }; AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); }; return { wrap: function wrap(fn) { return function () { return new AsyncGenerator(fn.apply(this, arguments)); }; }, await: function await(value) { return new AwaitValue(value); } }; }();

var _class, _dec, _class2, _dec2, _class3, _class4, _dec3, _class5;

var f = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
    var gen = function () {
      var _ref2 = _asyncGenerator.wrap(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return 'a';

              case 2:
                _context.next = 4;
                return 'b';

              case 4:
                _context.next = 6;
                return 'c';

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function gen() {
        return _ref2.apply(this, arguments);
      };
    }();

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return takeAsync(gen());

          case 2:
            return _context2.abrupt('return', _context2.sent);

          case 3:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function f() {
    return _ref.apply(this, arguments);
  };
}();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _mixins = require('./mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 类的修饰器
 *
 */
// DMEO1
// 为类添加一个静态属性
function testable(target) {
  target.isTestable = true;
  target.isOk = 'are you ok ?';
  target.tellMsg = function () {
    _message2.default.success('告诉你一个好消息', 1);
  };
}

var MyTestableClass = testable(_class = function MyTestableClass() {
  _classCallCheck(this, MyTestableClass);
}) || _class;

console.log(MyTestableClass.isTestable); // true
console.log(MyTestableClass.isOk); // true
MyTestableClass.tellMsg();

// DEMO2
function testable2(isTestable) {
  return function (target) {
    target.isTestable = isTestable;
  };
}

var MyTestableClass2 = (_dec = testable2(true), _dec(_class2 = function MyTestableClass2() {
  _classCallCheck(this, MyTestableClass2);
}) || _class2);

console.log(MyTestableClass2.isTestable);

var MyClassTest = (_dec2 = testable2(false), _dec2(_class3 = function MyClassTest() {
  _classCallCheck(this, MyClassTest);
}) || _class3);

console.log(MyClassTest.isTestable);

// DMEO3
// 为类的实例添加属性 可以通过目标类的prototype对象操作。
function testable3(target) {
  target.prototype.isTestable = true;
}

var MyClass3 = testable3(_class4 = function MyClass3() {
  _classCallCheck(this, MyClass3);
}) || _class4;

var obj = new MyClass3();
console.log(obj.isTestable);

// DEMO4
var Foo = {
  foo: function foo() {
    console.log('foo');
  }
};
var MyClass4 = (_dec3 = (0, _mixins.mixins)(Foo), _dec3(_class5 = function MyClass4() {
  _classCallCheck(this, MyClass4);
}) || _class5);

var obj2 = new MyClass4();
obj2.foo();

// async
function takeAsync() {}


f().then(function (result) {
  console.log(result); // ['a', 'b', 'c']
});

var TestBabel = function (_Component) {
  _inherits(TestBabel, _Component);

  function TestBabel(props) {
    _classCallCheck(this, TestBabel);

    return _possibleConstructorReturn(this, (TestBabel.__proto__ || Object.getPrototypeOf(TestBabel)).call(this, props));
  }

  _createClass(TestBabel, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'left-nav' },
        _react2.default.createElement(
          'h2',
          null,
          'Babel\u6D4B\u8BD5'
        )
      );
    }
  }]);

  return TestBabel;
}(_react.Component);

exports.default = TestBabel;