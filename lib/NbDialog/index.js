"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NbModal;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

require("antd/lib/modal/style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_antd.Modal.info); // const NbModal = React.forwardRef((props,ref)=>(
//   <Modal {...props}>
//     { props.children }  
//   </Modal>
// ))

function NbModal(props) {
  return /*#__PURE__*/_react.default.createElement(_antd.Modal, props, props.children);
}