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

var _icons = require("@ant-design/icons");

var _excluded = ["lineHeight", "check", "placeholder", "optionslist", "content", "size"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function NbSelectCom(props) {
  var _classnames;

  // TODO:超过一行的选项没有处理
  var _props$lineHeight = props.lineHeight,
      lineHeight = _props$lineHeight === void 0 ? 63 : _props$lineHeight,
      _props$check = props.check,
      check = _props$check === void 0 ? true : _props$check,
      placeholder = props.placeholder,
      _props$optionslist = props.optionslist,
      optionslist = _props$optionslist === void 0 ? [] : _props$optionslist,
      content = props.content,
      _props$size = props.size,
      size = _props$size === void 0 ? "middle" : _props$size,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/_react.default.createElement(_antd.Select, _extends({
    showArrow: true
  }, rest, {
    dropdownMatchSelectWidth: true,
    listHeight: lineHeight * 5,
    className: "nb-".concat(size),
    suffixIcon: /*#__PURE__*/_react.default.createElement(_icons.CaretDownOutlined, {
      className: "ant-select-suffix"
    }),
    placeholder: placeholder ? placeholder : '请选择',
    size: size,
    dropdownClassName: (0, _classnames2.default)((_classnames = {
      "not-check": !check && !props.mode
    }, _defineProperty(_classnames, "nb-".concat(size), true), _defineProperty(_classnames, "check-select", check), _classnames)),
    removeIcon: /*#__PURE__*/_react.default.createElement(_Icon.default, {
      size: "21px",
      type: "guanbi",
      color: "#8B8EA0"
    })
  }), optionslist.map(function (option, index) {
    return /*#__PURE__*/_react.default.createElement(_antd.Select.Option, {
      key: option.value
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames2.default)({
        "not-line-content": index === props.optionslist.length - 1,
        "line-content": index !== props.optionslist.length - 1
      })
    }, content ? content({
      name: option.value
    }) : option.label), index !== props.optionslist.length - 1 ? /*#__PURE__*/_react.default.createElement("div", {
      className: "line"
    }) : null);
  }));
}