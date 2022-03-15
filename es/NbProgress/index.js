"use strict";

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.array.index-of.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.object.define-property.js");

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NbProgress;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

require("antd/lib/progress/style");

var _classnames2 = _interopRequireDefault(require("classnames"));

var _indexModule = _interopRequireDefault(require("./index.module.less"));

var _excluded = ["strokeWidth", "width", "trailColor", "strokeColor"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function NbProgress(props) {
  var _classnames;

  var _props$strokeWidth = props.strokeWidth,
      strokeWidth = _props$strokeWidth === void 0 ? props.type === 'circle' ? 10 : 20 : _props$strokeWidth,
      _props$width = props.width,
      width = _props$width === void 0 ? 271 : _props$width,
      _props$trailColor = props.trailColor,
      trailColor = _props$trailColor === void 0 ? '#D6E7FB' : _props$trailColor,
      _props$strokeColor = props.strokeColor,
      strokeColor = _props$strokeColor === void 0 ? '#0066E0' : _props$strokeColor,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames2.default)((_classnames = {}, _defineProperty(_classnames, _indexModule.default["nb-".concat(props.type, "-progress")], true), _defineProperty(_classnames, "nb-".concat(props.type, "-progress"), true), _classnames))
  }, /*#__PURE__*/_react.default.createElement(_antd.Progress, _extends({}, rest, {
    strokeWidth: strokeWidth,
    width: width,
    trailColor: trailColor,
    strokeColor: strokeColor
  })));
}