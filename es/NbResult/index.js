"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.array.index-of.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.object.define-property.js");

require("core-js/modules/es.object.assign.js");

require("core-js/modules/es.array.filter.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.object.get-own-property-descriptors.js");

require("core-js/modules/es.object.define-properties.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.object.to-string.js");

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

require("antd/lib/modal/style");

var _classnames2 = _interopRequireDefault(require("classnames"));

var _warn = _interopRequireDefault(require("../images/warn.png"));

var _success = _interopRequireDefault(require("../images/success.png"));

var _error = _interopRequireDefault(require("../images/error.png"));

var _alarm = _interopRequireDefault(require("../images/alarm.png"));

var _loading = _interopRequireDefault(require("../images/loading.gif"));

var _indexModule = _interopRequireDefault(require("./index.module.less"));

var _excluded = ["type", "maskClosable", "mask", "bodyStyle", "width"],
    _excluded2 = ["maskClosable", "mask"],
    _excluded3 = ["maskClosable", "mask"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ResultImg = function ResultImg(props) {
  return /*#__PURE__*/_react.default.createElement("img", {
    style: props.IconStyle,
    src: require("../images/".concat(props.type, ".png"))
  });
};

var LoadingText = function LoadingText(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: 'loading-text'
  }, "\u52A0\u8F7D\u4E2D...");
}; // const SuccessImg = () => {
//   return <img src={success} />
// }
// const WarnImg = () => {
//   return <img src={warn} />
// }
// const ErrorImg = () => {
//   return <img src={error} />
// }
// const AlarmImg = () => {
//   return <img src={alarm} />
// }


var NbResult = function NbResult(props) {
  (0, _react.useEffect)(function () {
    return function () {
      clearTimeout(NbResult.timeId);
    };
  }, []);

  var _props$type = props.type,
      type = _props$type === void 0 ? "success" : _props$type,
      _props$maskClosable = props.maskClosable,
      maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable,
      _props$mask = props.mask,
      mask = _props$mask === void 0 ? false : _props$mask,
      _props$bodyStyle = props.bodyStyle,
      bodyStyle = _props$bodyStyle === void 0 ? {
    height: '520px'
  } : _props$bodyStyle,
      _props$width = props.width,
      width = _props$width === void 0 ? "720px" : _props$width,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/_react.default.createElement(_antd.Modal, _extends({
    closable: false,
    mask: mask,
    maskClosable: maskClosable,
    width: width,
    bodyStyle: bodyStyle,
    footer: null
  }, rest, {
    className: "nb-result-dialog"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames2.default)(_defineProperty({}, _indexModule.default['nb-result-content'], true))
  }, /*#__PURE__*/_react.default.createElement(ResultImg, {
    type: type
  }), props.children));
};

NbResult.defaultProps = {
  footer: null,
  className: 'nb-result-dialog',
  closable: false,
  bodyStyle: {
    height: '520px'
  },
  width: "720px"
};
var types = ['success', 'error', 'warn'];
types.forEach(function (type) {
  NbResult[type] = function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    NbResult.timeId = null;

    var _props$maskClosable2 = props.maskClosable,
        maskClosable = _props$maskClosable2 === void 0 ? false : _props$maskClosable2,
        _props$mask2 = props.mask,
        mask = _props$mask2 === void 0 ? false : _props$mask2,
        rest = _objectWithoutProperties(props, _excluded2);

    var modal = _antd.Modal.error(_objectSpread(_objectSpread({
      mask: mask,
      maskClosable: maskClosable
    }, NbResult.defaultProps), {}, {
      content: rest.content,
      icon: /*#__PURE__*/_react.default.createElement(ResultImg, {
        IconStyle: {
          width: "240px",
          height: "240px",
          margin: '60px 0 49px 0'
        },
        type: type
      })
    }, rest));

    if (props.delayClosed) {
      clearTimeout(NbResult.timeId);
      NbResult.timeId = setTimeout(function () {
        modal.destroy();
      }, props.delayClosed);
    }
  };
});

NbResult['loading'] = function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  NbResult.timeId = null;

  var _props$maskClosable3 = props.maskClosable,
      maskClosable = _props$maskClosable3 === void 0 ? false : _props$maskClosable3,
      _props$mask3 = props.mask,
      mask = _props$mask3 === void 0 ? false : _props$mask3,
      rest = _objectWithoutProperties(props, _excluded3);

  var modal = _antd.Modal.error(_objectSpread(_objectSpread({
    mask: mask,
    maskClosable: maskClosable
  }, NbResult.defaultProps), {}, {
    content: rest.content || /*#__PURE__*/_react.default.createElement(LoadingText, null),
    className: 'nb-loading-dialog',
    width: props.width || '320px',
    bodyStyle: {
      height: '360px'
    },
    icon: props.icon ? props.icon : /*#__PURE__*/_react.default.createElement("img", {
      style: props.IconStyle,
      src: _loading.default
    })
  }, rest));

  return modal;
};

var _default = NbResult;
exports.default = _default;