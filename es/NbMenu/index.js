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
exports.default = NbMenu;

require("core-js/modules/es.array.map.js");

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

require("antd/lib/menu/style");

var _excluded = ["selectable", "menuList", "content"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function NbMenu(props) {
  var _props$selectable = props.selectable,
      selectable = _props$selectable === void 0 ? true : _props$selectable,
      _props$menuList = props.menuList,
      menuList = _props$menuList === void 0 ? [] : _props$menuList,
      _props$content = props.content,
      content = _props$content === void 0 ? null : _props$content,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/_react.default.createElement(_antd.Menu, _extends({}, rest, {
    selectable: selectable
  }), menuList.map(function (menu, index) {
    return /*#__PURE__*/_react.default.createElement(_antd.Menu.Item, {
      key: menu
    }, content ? content({
      data: _objectSpread({
        index: index
      }, menu)
    }) : props.children, index !== menuList.length - 1 ? /*#__PURE__*/_react.default.createElement("div", {
      className: "line"
    }) : null);
  }));
}