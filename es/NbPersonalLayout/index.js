"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.array.map.js");

var _react = _interopRequireDefault(require("react"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _indexModule = _interopRequireDefault(require("./index.module.less"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function NbPersonalLayout(props) {
  var _props$menu = props.menu,
      menu = _props$menu === void 0 ? [] : _props$menu,
      _props$user = props.user,
      user = _props$user === void 0 ? {
    avatar: 'https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg',
    userName: '用户名称'
  } : _props$user,
      _props$index = props.index,
      index = _props$index === void 0 ? 0 : _props$index,
      _props$activeColor = props.activeColor,
      activeColor = _props$activeColor === void 0 ? "#fff" : _props$activeColor;
  var avatar = user.avatar,
      userName = user.userName;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _indexModule.default['nb-person-layout']
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _indexModule.default['nb-person-left']
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _indexModule.default['nb-avatar']
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: _indexModule.default['nb-avatar-img'],
    src: avatar,
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: _indexModule.default['nb-avatar-name']
  }, userName)), /*#__PURE__*/_react.default.createElement("div", {
    className: _indexModule.default['nb-person-menu']
  }, menu.map(function (option, i) {
    var _classnames;

    return /*#__PURE__*/_react.default.createElement("div", {
      onClick: function onClick() {
        props.menuClick(i);
      },
      key: "nb-person-menu-".concat(i),
      className: (0, _classnames2.default)((_classnames = {}, _defineProperty(_classnames, _indexModule.default['nb-menu-list'], true), _defineProperty(_classnames, _indexModule.default['nb-menu-list-active'], i === index), _classnames))
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: _indexModule.default['nb-menu-content']
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: _indexModule.default['nb-conent-main']
    }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
      type: option.type,
      color: i === index ? activeColor : option.color,
      size: '40px'
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: _indexModule.default['nb-menu-title']
    }, option.title)), /*#__PURE__*/_react.default.createElement(_Icon.default, {
      type: 'Right',
      color: i === index ? activeColor : '#CAD0E0',
      size: '32px'
    })));
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: _indexModule.default['nb-person-right']
  }, props.children));
}

var _default = NbPersonalLayout;
exports.default = _default;