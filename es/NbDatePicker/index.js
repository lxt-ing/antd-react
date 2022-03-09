"use strict";

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.array.index-of.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.object.assign.js");

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NbDatePicker;

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _dayjs = _interopRequireDefault(require("rc-picker/es/generate/dayjs"));

var _generatePicker = _interopRequireDefault(require("antd/es/date-picker/generatePicker"));

require("antd/lib/date-picker/style");

var _excluded = ["showToday", "dropdownClassName", "className", "format"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DatePicker = (0, _generatePicker.default)(_dayjs.default);

function NbDatePicker(props) {
  var _props$showToday = props.showToday,
      showToday = _props$showToday === void 0 ? false : _props$showToday,
      _props$dropdownClassN = props.dropdownClassName,
      dropdownClassName = _props$dropdownClassN === void 0 ? 'nb-date-picker-dropdown' : _props$dropdownClassN,
      _props$className = props.className,
      className = _props$className === void 0 ? 'nb-date-picker' : _props$className,
      _props$format = props.format,
      format = _props$format === void 0 ? 'YYYY/MM/DD' : _props$format,
      rest = _objectWithoutProperties(props, _excluded);

  var SingleLeft = function SingleLeft() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Icon.default, {
      type: "Right",
      size: "32px"
    }));
  };

  var DoubleLeft = function DoubleLeft() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Icon.default, {
      type: "Right",
      size: "32px"
    }), /*#__PURE__*/_react.default.createElement(_Icon.default, {
      type: "Right",
      size: "32px"
    }));
  };

  return /*#__PURE__*/_react.default.createElement(DatePicker, _extends({
    showToday: showToday,
    superNextIcon: /*#__PURE__*/_react.default.createElement(DoubleLeft, null),
    superPrevIcon: /*#__PURE__*/_react.default.createElement(DoubleLeft, null),
    nextIcon: /*#__PURE__*/_react.default.createElement(SingleLeft, null),
    prevIcon: /*#__PURE__*/_react.default.createElement(SingleLeft, null),
    dropdownClassName: dropdownClassName,
    format: format,
    className: className,
    suffixIcon: /*#__PURE__*/_react.default.createElement(_Icon.default, {
      type: "rrili",
      size: "32px"
    })
  }, rest));
}