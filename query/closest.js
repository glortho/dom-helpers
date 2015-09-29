'use strict';

exports.__esModule = true;
exports['default'] = closest;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _matches = require('./matches');

var _matches2 = _interopRequireDefault(_matches);

var isDoc = function isDoc(obj) {
  return obj != null && obj.nodeType === obj.DOCUMENT_NODE;
};

function closest(node, selector, context) {
  while (node && (isDoc(node) || !_matches2['default'](node, selector))) {
    node = node !== context && !isDoc(node) ? node.parentNode : undefined;
  }
  return node;
}

module.exports = exports['default'];