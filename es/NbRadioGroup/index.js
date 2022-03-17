"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NbRadio;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NbRadio(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)({
      "nb-radio-group": true
    })
  }, /*#__PURE__*/_react.default.createElement(_antd.Radio.Group, props));
}