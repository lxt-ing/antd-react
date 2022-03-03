"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NbDatePicker;

require("core-js/modules/es.object.assign.js");

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

require("antd/lib/date-picker/style");

require("moment/locale/zh-cn");

var _zh_CN = _interopRequireDefault(require("antd/lib/locale/zh_CN"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function NbDatePicker(props) {
  return /*#__PURE__*/_react.default.createElement(_antd.DatePicker, _extends({
    className: "nb-date-picker",
    locale: _zh_CN.default
  }, props));
}