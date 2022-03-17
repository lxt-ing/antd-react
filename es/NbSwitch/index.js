"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NbSwitch;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

require("antd/lib/switch/style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NbSwitch(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: 'nb-switch'
  }, /*#__PURE__*/_react.default.createElement(_antd.Switch, props));
}