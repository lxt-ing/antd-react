"use strict";

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.array.filter.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.object.get-own-property-descriptors.js");

require("core-js/modules/es.object.define-properties.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.object.define-property.js");

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _Icon = _interopRequireDefault(require("../Icon"));

require("antd/lib/message/style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Content = function Content(props) {
  return /*#__PURE__*/_react.default.createElement("span", null, props.text);
};

var NbMessage = {
  success: function success(props) {
    _antd.message.success(_objectSpread(_objectSpread({}, props), {}, {
      className: 'nb-success-message',
      content: /*#__PURE__*/_react.default.createElement(Content, {
        text: props.content
      }),
      icon: /*#__PURE__*/_react.default.createElement(_Icon.default, {
        type: "gouxuan",
        color: "#00A572",
        size: "56px"
      })
    }));
  },
  error: function error(props) {
    _antd.message.error(_objectSpread(_objectSpread({}, props), {}, {
      className: 'nb-error-message',
      content: /*#__PURE__*/_react.default.createElement(Content, {
        text: props.content
      }),
      icon: /*#__PURE__*/_react.default.createElement(_Icon.default, {
        type: "fox",
        color: "#E52D3E",
        size: "56px"
      })
    }));
  },
  warn: function warn(props) {
    _antd.message.warning(_objectSpread(_objectSpread({}, props), {}, {
      className: 'nb-warning-message',
      content: /*#__PURE__*/_react.default.createElement(Content, {
        text: props.content
      }),
      icon: /*#__PURE__*/_react.default.createElement(_Icon.default, {
        type: "gouxuan",
        color: "#F98900",
        size: "56px"
      })
    }));
  }
};
var _default = NbMessage;
exports.default = _default;