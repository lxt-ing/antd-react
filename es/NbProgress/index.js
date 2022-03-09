"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NbProgress;

require("core-js/modules/es.object.define-property.js");

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

require("antd/lib/progress/style");

var _classnames2 = _interopRequireDefault(require("classnames"));

var _indexModule = _interopRequireDefault(require("./index.module.less"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function NbProgress(props) {
  var _classnames;

  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames2.default)((_classnames = {}, _defineProperty(_classnames, _indexModule.default["nb-".concat(props.type, "-progress")], true), _defineProperty(_classnames, "nb-".concat(props.type, "-progress"), true), _classnames))
  }, /*#__PURE__*/_react.default.createElement(_antd.Progress, _extends({}, props, {
    strokeWidth: props.type === 'circle' ? 10 : 20,
    width: 271,
    trailColor: '#D6E7FB',
    strokeColor: '#0066E0'
  })));
}