"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NbSmallSelect;

require("core-js/modules/es.object.assign.js");

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

require("antd/lib/select/style");

var _icons = require("@ant-design/icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function NbSmallSelect(props) {
  var _props$lineHeight = props.lineHeight,
      lineHeight = _props$lineHeight === void 0 ? 63 : _props$lineHeight;
  return /*#__PURE__*/_react.default.createElement(_antd.Select, _extends({
    dropdownMatchSelectWidth: true,
    listHeight: lineHeight * 5,
    className: "nb-small",
    dropdownClassName: "nb-small",
    suffixIcon: /*#__PURE__*/_react.default.createElement(_icons.CaretDownOutlined, null),
    placeholder: '请选择',
    size: 'small'
  }, props), /*#__PURE__*/_react.default.createElement(_antd.Select.Option, {
    key: 'a'
  }, "123"), /*#__PURE__*/_react.default.createElement(_antd.Select.Option, {
    key: 'b'
  }, "123"), /*#__PURE__*/_react.default.createElement(_antd.Select.Option, {
    key: 'c'
  }, "123"), /*#__PURE__*/_react.default.createElement(_antd.Select.Option, {
    key: 'd'
  }, "123"), /*#__PURE__*/_react.default.createElement(_antd.Select.Option, {
    key: 'e'
  }, "123"), /*#__PURE__*/_react.default.createElement(_antd.Select.Option, {
    key: 'f'
  }, "123"));
}