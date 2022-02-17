"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Test", {
  enumerable: true,
  get: function get() {
    return _MyButton.default;
  }
});

var _MyButton = _interopRequireDefault(require("./MyButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }