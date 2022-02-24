"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NbInput;

require("core-js/modules/es.object.assign.js");

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

require("antd/lib/input/style");

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function NbInput(props) {
  var _props$size = props.size,
      size = _props$size === void 0 ? '' : _props$size,
      placeholder = props.placeholder;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)({
      'nb-account-input': true,
      'nb-sm-input': size === 'nb-small',
      'nb-lg-input': size === 'nb-large'
    })
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, _extends({
    prefix: /*#__PURE__*/_react.default.createElement(_Icon.default, {
      type: "password"
    }),
    placeholder: placeholder ? placeholder : '请输入'
  }, props)));
}