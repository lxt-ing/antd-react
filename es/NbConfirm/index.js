"use strict";

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.array.index-of.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.object.define-property.js");

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NbModal;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

require("antd/lib/modal/style");

var _classnames3 = _interopRequireDefault(require("classnames"));

var _indexModule = _interopRequireDefault(require("./index.module.less"));

var _excluded = ["title", "singleBtn", "closable", "maskClosable", "confirmStyle", "onOk", "cancelText", "okText", "bodyStyle", "width"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function NbModal(props) {
  var _classnames2;

  var title = props.title,
      _props$singleBtn = props.singleBtn,
      singleBtn = _props$singleBtn === void 0 ? false : _props$singleBtn,
      _props$closable = props.closable,
      closable = _props$closable === void 0 ? singleBtn ? false : true : _props$closable,
      _props$maskClosable = props.maskClosable,
      maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable,
      _props$confirmStyle = props.confirmStyle,
      confirmStyle = _props$confirmStyle === void 0 ? {
    background: 'linear-gradient(180deg, #3385E6 0%, #0066E0 100%)',
    color: '#fff'
  } : _props$confirmStyle,
      _props$onOk = props.onOk,
      onOk = _props$onOk === void 0 ? null : _props$onOk,
      _props$cancelText = props.cancelText,
      cancelText = _props$cancelText === void 0 ? '取消' : _props$cancelText,
      _props$okText = props.okText,
      okText = _props$okText === void 0 ? '确定' : _props$okText,
      _props$bodyStyle = props.bodyStyle,
      bodyStyle = _props$bodyStyle === void 0 ? {
    height: '520px'
  } : _props$bodyStyle,
      _props$width = props.width,
      width = _props$width === void 0 ? '720px' : _props$width,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/_react.default.createElement(_antd.Modal, _extends({
    closable: closable,
    maskClosable: maskClosable,
    width: width,
    bodyStyle: bodyStyle,
    okText: okText,
    cancelText: cancelText,
    footer: null
  }, rest, {
    className: 'nb-confirm-dialog'
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames3.default)(_defineProperty({}, _indexModule.default['nb-confirm-content-wrapper'], true))
  }, props.children), /*#__PURE__*/_react.default.createElement("div", {
    className: _indexModule.default['nb-confirm-footer']
  }, props.footerDom ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.footerDom) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, singleBtn ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames3.default)((_classnames2 = {}, _defineProperty(_classnames2, _indexModule.default.options, true), _defineProperty(_classnames2, _indexModule.default['single-btn'], singleBtn), _classnames2)),
    onClick: function onClick() {
      return onOk && typeof onOk === 'function' && onOk && onOk();
    }
  }, okText)) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: _indexModule.default.options,
    onClick: function onClick() {
      return props.onCancel && typeof props.onCancel === 'function' && props.onCancel();
    }
  }, cancelText), /*#__PURE__*/_react.default.createElement("div", {
    className: _indexModule.default.options,
    style: confirmStyle,
    onClick: function onClick() {
      return onOk && typeof onOk === 'function' && onOk && onOk();
    }
  }, okText)))));
}