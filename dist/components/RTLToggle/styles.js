"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToggleMessage = exports.ToggleKnob = exports.ToggleInput = exports.ToggleLabel = exports.Toggle = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  margin: 0 15px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    left: calc(100% - ", "px);\n    transform: translateX(-100%);\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  background: hsl(", ", 100%, 100%);\n  border-radius: ", "px;\n  height: ", "px;\n  left: ", "px;\n  overflow: hidden;\n  position: absolute;\n  text-indent: -9999px;\n  top: ", "px;\n  transition: left 0.3s ease-in-out, transform 0.3s ease-in-out, width 0.3s ease-in-out;\n  width: ", "px;\n\n  ", ":active + & {\n    width: ", "px;\n  }\n\n  ", ":focus + & {\n    outline: #444 dotted 1px;\n    outline: -webkit-focus-ring-color auto 5px;\n  }\n\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  opacity: 0;\n  position: absolute;\n  z-index: -1;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    background-color: hsl(", ", 79%, 51%);\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: hsl(", ", 0%, 51%);\n  border-radius: ", "px;\n  cursor: pointer;\n  display: block;\n  height: ", "px;\n  position: relative;\n  transition: background-color 0.3s ease-in-out;\n  width: ", "px;\n\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  font-family: -apple-system, \".SFNSText-Regular\", \"San Francisco\", Roboto, \"Segoe UI\", \"Helvetica Neue\", \"Lucida Grande\", sans-serif;\n  font-size: 13px;\n  white-space: nowrap;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var height = 25;
var width = 50;
var gap = 2;
var hue = 208;

var Toggle = _styledComponents.default.span(_templateObject());

exports.Toggle = Toggle;

var ToggleLabel = _styledComponents.default.label(_templateObject2(), hue, height, height, width, function (props) {
  return props.checked && (0, _styledComponents.css)(_templateObject3(), hue);
});

exports.ToggleLabel = ToggleLabel;

var ToggleInput = _styledComponents.default.input(_templateObject4());

exports.ToggleInput = ToggleInput;

var ToggleKnob = _styledComponents.default.a(_templateObject5(), hue, height - 2 * gap, height - 2 * gap, gap, gap, height - 2 * gap, ToggleInput, width * 0.75 - 4 * gap, ToggleInput, function (props) {
  return props.checked && (0, _styledComponents.css)(_templateObject6(), gap);
});

exports.ToggleKnob = ToggleKnob;

var ToggleMessage = _styledComponents.default.span(_templateObject7());

exports.ToggleMessage = ToggleMessage;