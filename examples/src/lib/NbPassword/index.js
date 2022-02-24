"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.object.define-property.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NbPassword;

require("core-js/modules/es.object.assign.js");

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

require("antd/lib/input/style");

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _CreateIcon = _interopRequireDefault(require("../CreateIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function NbPassword(props) {
  var _props$size = props.size,
      size = _props$size === void 0 ? '' : _props$size,
      placeholder = props.placeholder,
      _props$color = props.color,
      color = _props$color === void 0 ? '#CAD0E0' : _props$color;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)({
      "nb-password-input": true,
      'nb-sm-input': size === 'nb-small',
      'nb-lg-input': size === 'nb-large'
    })
  }, /*#__PURE__*/_react.default.createElement(_antd.Input.Password, _extends({
    allowClear: true,
    prefix: /*#__PURE__*/_react.default.createElement(_Icon.default, {
      color: color,
      type: "password"
    }),
    placeholder: placeholder ? placeholder : '请输入',
    iconRender: function iconRender(visible) {
      return visible ? /*#__PURE__*/_react.default.createElement(_CreateIcon.default, {
        style: {
          color: color
        },
        type: "icon-dakaiyanjing"
      }) : /*#__PURE__*/_react.default.createElement(_CreateIcon.default, {
        style: {
          color: color
        },
        type: "icon-guanbiyanjing"
      });
    }
  }, props)));
}