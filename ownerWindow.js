'use strict';

exports.__esModule = true;
exports['default'] = ownerWindow;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ownerDocument = require('./ownerDocument');

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function ownerWindow(node) {
  var doc = _ownerDocument2['default'](node);
  return doc && doc.defaultView || doc.parentWindow;
}

module.exports = exports['default'];