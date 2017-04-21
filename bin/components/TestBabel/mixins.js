"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.mixins = mixins;
function mixins() {
  for (var _len = arguments.length, list = Array(_len), _key = 0; _key < _len; _key++) {
    list[_key] = arguments[_key];
  }

  return function (target) {
    _extends.apply(undefined, [target.prototype].concat(list));
  };
}