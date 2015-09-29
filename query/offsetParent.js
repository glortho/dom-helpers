'use strict';

exports.__esModule = true;
exports['default'] = offsetParent;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ownerDocument = require('../ownerDocument');

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

var _style = require('../style');

var _style2 = _interopRequireDefault(_style);

function nodeName(node) {
  return node.nodeName && node.nodeName.toLowerCase();
}

function offsetParent(node) {
  var doc = _ownerDocument2['default'](node),
      offsetParent = node && node.offsetParent;

  while (offsetParent && nodeName(node) !== 'html' && _style2['default'](offsetParent, "position") === "static") {
    offsetParent = offsetParent.offsetParent;
  }

  return offsetParent || doc.documentElement;
}

module.exports = exports['default'];