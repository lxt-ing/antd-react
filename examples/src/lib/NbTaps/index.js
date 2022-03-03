"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NbTaps;

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.object.define-property.js");

var _react = _interopRequireDefault(require("react"));

var _indexModule = _interopRequireDefault(require("./index.module.less"));

var _classnames3 = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// TODO:页签部分
function NbTaps(props) {
  var _classnames;

  var _props$options = props.options,
      options = _props$options === void 0 ? ['菜单一', '菜单二', '菜单三'] : _props$options,
      _props$selectIndex = props.selectIndex,
      selectIndex = _props$selectIndex === void 0 ? 0 : _props$selectIndex,
      changeTab = props.changeTab,
      _props$type = props.type,
      type = _props$type === void 0 ? "list" : _props$type;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames3.default)((_classnames = {}, _defineProperty(_classnames, _indexModule.default['tabs-wrapper'], true), _defineProperty(_classnames, _indexModule.default['list-tabs'], type !== 'page'), _classnames))
  }, options.map(function (item, index) {
    var _classnames2;

    return /*#__PURE__*/_react.default.createElement("div", {
      onClick: function onClick() {
        changeTab(index);
      },
      key: 'tab' + item + '-' + index,
      className: (0, _classnames3.default)((_classnames2 = {}, _defineProperty(_classnames2, _indexModule.default['tab-item'], true), _defineProperty(_classnames2, _indexModule.default['tab-selected'], selectIndex === index), _classnames2))
    }, item, type !== 'page' ? /*#__PURE__*/_react.default.createElement("div", {
      className: _indexModule.default['list-tab-line']
    }) : null);
  }));
}