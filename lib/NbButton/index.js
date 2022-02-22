"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NbButton;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

require("antd/lib/button/style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NbButton(props) {
  return /*#__PURE__*/_react.default.createElement(_antd.Button, props, props.children);
}