"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDefaultTextDirection = getDefaultTextDirection;
exports.setTextDirection = setTextDirection;

function getDefaultTextDirection(api) {
  var queryParam = api.getQueryParam('direction');
  var htmlDirection = window.getComputedStyle(document.documentElement).direction.toLowerCase();
  return queryParam || htmlDirection || 'ltr';
}

function setTextDirection(direction) {
  document.documentElement.dir = direction;

  if (direction === 'rtl') {
    document.body.classList.add('rtl');
  } else {
    document.body.classList.remove('rtl');
  }
} // if(!document.body.classList.contains(direction)) {
//   document.body.className += ' ' + direction;
// }