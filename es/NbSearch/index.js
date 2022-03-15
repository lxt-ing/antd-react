"use strict";

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.array.index-of.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.object.assign.js");

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NbInput;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _Icon = _interopRequireDefault(require("../Icon"));

require("antd/lib/input/style");

var _excluded = ["placeholder", "prefix"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function NbInput(props) {
  var _props$placeholder = props.placeholder,
      placeholder = _props$placeholder === void 0 ? '请输入' : _props$placeholder,
      _props$prefix = props.prefix,
      prefix = _props$prefix === void 0 ? /*#__PURE__*/_react.default.createElement(_Icon.default, {
    color: '#8B8EA0',
    type: "sousuo",
    size: '32px'
  }) : _props$prefix,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "nb-search"
  }, /*#__PURE__*/_react.default.createElement(_antd.Input.Search, _extends({
    enterButton: /*#__PURE__*/_react.default.createElement(_Icon.default, {
      color: '#8B8EA0',
      type: "sousuo",
      size: '32px'
    }),
    allowClear: true,
    placeholder: placeholder
  }, rest)));
}