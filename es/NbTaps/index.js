"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NbTaps;

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.object.define-property.js");

var _react = _interopRequireDefault(require("react"));

var _indexModule = _interopRequireDefault(require("./index.module.less"));

var _classnames4 = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function NbTaps(props) {
  var _classnames;

  var _props$options = props.options,
      options = _props$options === void 0 ? ['菜单一', '菜单二', '菜单三'] : _props$options,
      _props$selectIndex = props.selectIndex,
      selectIndex = _props$selectIndex === void 0 ? 0 : _props$selectIndex,
      onChange = props.onChange,
      _props$type = props.type,
      type = _props$type === void 0 ? "page" : _props$type;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames4.default)((_classnames = {}, _defineProperty(_classnames, _indexModule.default['tabs-wrapper'], true), _defineProperty(_classnames, _indexModule.default['page-tabs'], type === 'page'), _defineProperty(_classnames, _indexModule.default['title-tabs'], type === 'title'), _defineProperty(_classnames, _indexModule.default['first-tab'], selectIndex === 0), _defineProperty(_classnames, _indexModule.default['last-tab'], selectIndex === options.length - 1), _classnames))
  }, options.map(function (item, index) {
    var _classnames2, _classnames3;

    return /*#__PURE__*/_react.default.createElement("div", {
      onClick: function onClick() {
        onChange(index);
      },
      key: 'tab' + item + '-' + index,
      className: (0, _classnames4.default)((_classnames2 = {}, _defineProperty(_classnames2, _indexModule.default['tab-item'], true), _defineProperty(_classnames2, _indexModule.default['tab-selected'], selectIndex === index), _classnames2))
    }, type === 'page' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames4.default)((_classnames3 = {}, _defineProperty(_classnames3, _indexModule.default['tab-content'], true), _defineProperty(_classnames3, _indexModule.default['first-tab'], selectIndex === 0), _defineProperty(_classnames3, _indexModule.default['last-tab'], selectIndex === options.length - 1), _classnames3))
    }, item), selectIndex === index ? null : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      className: _indexModule.default['page-tab-line']
    }))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, item));
  }));
}