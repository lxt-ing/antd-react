"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.object.define-property.js");

var _classnames2 = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Icon(props) {
  var _props$size = props.size,
      size = _props$size === void 0 ? '40px' : _props$size,
      _props$type = props.type,
      type = _props$type === void 0 ? '' : _props$type,
      _props$color = props.color,
      color = _props$color === void 0 ? "#CAD0E0" : _props$color;
  var style = {
    fontSize: size
  };

  if (props.defaultColor) {
    style['color'] = color;
  }

  return /*#__PURE__*/_react.default.createElement("span", {
    style: style,
    className: (0, _classnames2.default)(_defineProperty({
      iconfont: true
    }, "icon-".concat(type), true))
  });
}

var _default = Icon;
exports.default = _default;