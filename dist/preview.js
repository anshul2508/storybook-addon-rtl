"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialize = initialize;

var _addons = _interopRequireDefault(require("@storybook/addons"));

var _utils = require("./utils");

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleUpdateEvent(_ref) {
  var direction = _ref.direction;
  (0, _utils.setTextDirection)(direction);
}

function initialize() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var channel = _addons.default.getChannel();

  channel.on(_constants.UPDATE_EVENT_ID, handleUpdateEvent);
  channel.emit(_constants.INITIALIZE_EVENT_ID);
}