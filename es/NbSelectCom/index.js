"use strict";

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.array.index-of.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.object.define-property.js");

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NbSelectCom;

require("core-js/modules/es.array.map.js");

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

require("antd/lib/select/style");

var _classnames2 = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _excluded = ["maxShowDropdonwCount", "lineHeight", "maxTagCount", "check", "placeholder", "optionslist", "content", "size", "dropdownStyle"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function NbSelectCom(props) {
  var _classnames;

  var _props$maxShowDropdon = props.maxShowDropdonwCount,
      maxShowDropdonwCount = _props$maxShowDropdon === void 0 ? 5 : _props$maxShowDropdon,
      _props$lineHeight = props.lineHeight,
      lineHeight = _props$lineHeight === void 0 ? props.size === 'large' ? 80 : props.size === 'middle' ? 64 : 54 : _props$lineHeight,
      _props$maxTagCount = props.maxTagCount,
      maxTagCount = _props$maxTagCount === void 0 ? 1 : _props$maxTagCount,
      _props$check = props.check,
      check = _props$check === void 0 ? true : _props$check,
      placeholder = props.placeholder,
      _props$optionslist = props.optionslist,
      optionslist = _props$optionslist === void 0 ? [] : _props$optionslist,
      content = props.content,
      _props$size = props.size,
      size = _props$size === void 0 ? 'middle' : _props$size,
      _props$dropdownStyle = props.dropdownStyle,
      dropdownStyle = _props$dropdownStyle === void 0 ? props.size === 'small' ? {
    minWidth: 320
  } : null : _props$dropdownStyle,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "nb-".concat(size)
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, _extends({
    maxTagCount: maxTagCount,
    maxTagPlaceholder: '...',
    showArrow: true
  }, rest, {
    dropdownMatchSelectWidth: true,
    dropdownStyle: dropdownStyle,
    listHeight: lineHeight * maxShowDropdonwCount,
    suffixIcon: /*#__PURE__*/_react.default.createElement(_Icon.default, {
      type: "xiangxia",
      size: "32px"
    }),
    placeholder: placeholder ? placeholder : '请选择',
    size: size,
    dropdownClassName: (0, _classnames2.default)((_classnames = {
      'not-check': !check && !props.mode
    }, _defineProperty(_classnames, "nb-".concat(size), true), _defineProperty(_classnames, 'check-select', check), _classnames)),
    removeIcon: /*#__PURE__*/_react.default.createElement(_Icon.default, {
      size: "24px",
      type: "fox",
      color: "#8B8EA0"
    })
  }), optionslist.map(function (option, index) {
    return /*#__PURE__*/_react.default.createElement(_antd.Select.Option, {
      className: 'nb-select-option',
      key: option.value,
      value: option.value
    }, option.label);
  })));
}