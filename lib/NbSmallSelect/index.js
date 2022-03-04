"use strict";

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.array.index-of.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.object.define-property.js");

require("core-js/modules/es.array.filter.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.object.get-own-property-descriptors.js");

require("core-js/modules/es.object.define-properties.js");

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NbSmallSelect;

require("core-js/modules/es.array.map.js");

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

require("antd/lib/select/style");

var _classnames = _interopRequireDefault(require("classnames"));

var _icons = require("@ant-design/icons");

var _excluded = ["lineHeight", "check", "placeholder", "optionslist", "content", "mode", "options", "dropdownStyle"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function NbSmallSelect(props) {
  var _props$lineHeight = props.lineHeight,
      lineHeight = _props$lineHeight === void 0 ? 72 : _props$lineHeight,
      _props$check = props.check,
      check = _props$check === void 0 ? true : _props$check,
      placeholder = props.placeholder,
      _props$optionslist = props.optionslist,
      optionslist = _props$optionslist === void 0 ? [] : _props$optionslist,
      content = props.content,
      mode = props.mode,
      options = props.options,
      _props$dropdownStyle = props.dropdownStyle,
      dropdownStyle = _props$dropdownStyle === void 0 ? {
    minWidth: 320
  } : _props$dropdownStyle,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/_react.default.createElement(_antd.Select, _extends({
    showArrow: true,
    dropdownMatchSelectWidth: true,
    dropdownStyle: dropdownStyle,
    listHeight: lineHeight * 5,
    className: "nb-small",
    suffixIcon: /*#__PURE__*/_react.default.createElement(_icons.CaretDownOutlined, {
      className: "ant-select-suffix"
    }),
    placeholder: placeholder ? placeholder : '请选择',
    size: 'small'
  }, rest, {
    dropdownClassName: (0, _classnames.default)({
      "not-check": !check && !props.mode,
      "nb-small": true,
      "check-select": check
    })
  }), optionslist.map(function (option, index) {
    return /*#__PURE__*/_react.default.createElement(_antd.Select.Option, {
      key: option.value
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)({
        "not-line-content": index === props.optionslist.length - 1,
        "line-content": index !== props.optionslist.length - 1
      })
    }, content ? content({
      data: _objectSpread({
        index: index
      }, option)
    }) : option.label), index !== props.optionslist.length - 1 ? /*#__PURE__*/_react.default.createElement("div", {
      className: "line"
    }) : null);
  }));
}