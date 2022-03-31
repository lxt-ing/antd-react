"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NbArrow;

require("core-js/modules/es.object.define-property.js");

var _indexModule = _interopRequireDefault(require("./index.module.less"));

var _react = _interopRequireDefault(require("react"));

var _classnames2 = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function NbArrow(props) {
  var _classnames;

  var _props$open = props.open,
      open = _props$open === void 0 ? false : _props$open;
  return /*#__PURE__*/_react.default.createElement("button", {
    className: (0, _classnames2.default)((_classnames = {}, _defineProperty(_classnames, _indexModule.default['nb-arrow'], true), _defineProperty(_classnames, _indexModule.default['nb-arrow-opened'], open), _classnames))
  });
}