"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NbSteps;

require("core-js/modules/es.array.map.js");

var _react = _interopRequireDefault(require("react"));

var _indexModule = _interopRequireDefault(require("./index.module.less"));

var _classnames5 = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function NbSteps(props) {
  var _props$current = props.current,
      current = _props$current === void 0 ? 1 : _props$current,
      _props$stepOptions = props.stepOptions,
      stepOptions = _props$stepOptions === void 0 ? ['步骤一步骤一', '步骤二步骤一', '步骤三步骤一'] : _props$stepOptions;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _indexModule.default['nb-steps']
  }, stepOptions.map(function (step, i) {
    var _classnames, _classnames2, _classnames3, _classnames4;

    return /*#__PURE__*/_react.default.createElement("div", {
      key: "steps-item-".concat(i),
      className: (0, _classnames5.default)((_classnames = {}, _defineProperty(_classnames, _indexModule.default['current-step-item'], i === current), _defineProperty(_classnames, _indexModule.default['actived-step-item'], i < current && i >= 0), _defineProperty(_classnames, _indexModule.default['step-item'], true), _classnames))
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: _indexModule.default['step-line-wrapper']
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames5.default)((_classnames2 = {}, _defineProperty(_classnames2, _indexModule.default['step-item-line'], true), _defineProperty(_classnames2, _indexModule.default['step-item-line-hidden'], i === 0), _classnames2))
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: _indexModule.default['step-item-circle']
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: _indexModule.default['step-item-icon']
    }, step.icon ? step.icon : i < current && i >= 0 ? /*#__PURE__*/_react.default.createElement(_Icon.default, {
      type: "gouxuan",
      size: '24px'
    }) : null)), /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames5.default)((_classnames3 = {}, _defineProperty(_classnames3, _indexModule.default['step-item-line'], true), _defineProperty(_classnames3, _indexModule.default['step-item-line-hidden'], i === stepOptions.length - 1), _classnames3))
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames5.default)((_classnames4 = {}, _defineProperty(_classnames4, _indexModule.default['step-content-wrapper'], true), _defineProperty(_classnames4, _indexModule.default['step-center-content'], i !== 0 || i !== stepOptions.length - 1), _classnames4))
    }, step.title ? step.title : step));
  }));
}