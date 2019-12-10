"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = register;

var _react = _interopRequireDefault(require("react"));

var _addons = _interopRequireDefault(require("@storybook/addons"));

var _RTLPanel = _interopRequireDefault(require("./containers/RTLPanel"));

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function register() {
  _addons.default.register(_constants.ADDON_ID, function (api) {
    var channel = _addons.default.getChannel();

    _addons.default.addPanel(_constants.PANEL_ID, {
      title: 'RTL',
      render: function render(_ref) {
        var active = _ref.active,
            key = _ref.key;

        /* eslint-disable-line react/prop-types */
        if (!active) {
          return null;
        }

        return _react.default.createElement(_RTLPanel.default, {
          key: key,
          channel: channel,
          api: api
        });
      }
    });
  });
}