"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NbMenu;

require("core-js/modules/es.array.map.js");

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

require("antd/lib/menu/style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NbMenu(props) {
  return /*#__PURE__*/_react.default.createElement(_antd.Menu, {
    selectable: props.selectable
  }, props.menuList.map(function (menu, index) {
    return /*#__PURE__*/_react.default.createElement(_antd.Menu.Item, {
      key: menu
    }, props.children, index !== props.menuList.length - 1 ? /*#__PURE__*/_react.default.createElement("div", {
      className: "line"
    }) : null);
  }));
}