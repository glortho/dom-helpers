'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var style = require('./style'),
    events = require('./events'),
    query = require('./query'),
    activeElement = require('./activeElement'),
    ownerDocument = require('./ownerDocument'),
    ownerWindow = require('./ownerWindow');

module.exports = _extends({}, style, events, query, {

  activeElement: activeElement,
  ownerDocument: ownerDocument,
  ownerWindow: ownerWindow,

  requestAnimationFrame: require('./util/requestAnimationFrame')
});