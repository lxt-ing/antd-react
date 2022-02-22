"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NbDropdown;

require("core-js/modules/es.object.assign.js");

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

require("antd/lib/menu/style");

require("antd/lib/dropdown/style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// import "./AntdSelect.less";
function NbDropdown(props) {
  return /*#__PURE__*/_react.default.createElement(_antd.Dropdown, _extends({
    overlayClassName: "nb-dropdown",
    overlay: props.DropdownMenu
  }, props), props.DropdownTitle);
}