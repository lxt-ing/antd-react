"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NbPages;

require("core-js/modules/es.object.assign.js");

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

require("antd/lib/pagination/style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

//  https://juejin.cn/post/6844904080159014919 参考资料
function NbPages(props) {
  return /*#__PURE__*/_react.default.createElement(_antd.Pagination, _extends({
    className: 'nb-pages'
  }, props));
}