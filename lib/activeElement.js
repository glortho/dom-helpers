'use strict';

exports.__esModule = true;
exports['default'] = activeElement;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ownerDocument = require('./ownerDocument');

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

/**
 * document.activeElement
 */

function activeElement() {
  var doc = arguments.length <= 0 || arguments[0] === undefined ? document : arguments[0];

  try {
    return doc.activeElement;
  } catch (e) {}
}

module.exports = exports['default'];