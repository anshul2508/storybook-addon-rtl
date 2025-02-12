"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RTLPanel = _interopRequireDefault(require("../../components/RTLPanel"));

var _utils = require("../../utils");

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RTLPanel =
/*#__PURE__*/
function (_Component) {
  _inherits(RTLPanel, _Component);

  function RTLPanel(props) {
    var _this;

    _classCallCheck(this, RTLPanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RTLPanel).call(this, props));
    _this.state = {
      direction: (0, _utils.getDefaultTextDirection)(props.api)
    };
    _this.emitUpdateEvent = _this.emitUpdateEvent.bind(_assertThisInitialized(_this));
    _this.handlePanelChange = _this.handlePanelChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(RTLPanel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.channel.on(_constants.INITIALIZE_EVENT_ID, this.emitUpdateEvent);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.channel.removeListener(_constants.INITIALIZE_EVENT_ID, this.emitUpdateEvent);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.emitUpdateEvent();
    }
  }, {
    key: "emitUpdateEvent",
    value: function emitUpdateEvent() {
      this.props.channel.emit(_constants.UPDATE_EVENT_ID, this.state);
    }
  }, {
    key: "handlePanelChange",
    value: function handlePanelChange(checked) {
      var state = {
        direction: checked ? 'rtl' : 'ltr'
      };
      this.setState(state);
    }
  }, {
    key: "render",
    value: function render() {
      var direction = this.state.direction;
      return _react.default.createElement(_RTLPanel.default, {
        checked: direction === 'rtl',
        onChange: this.handlePanelChange
      });
    }
  }]);

  return RTLPanel;
}(_react.Component);

exports.default = RTLPanel;
RTLPanel.propTypes = {
  api: _propTypes.default.object.isRequired,
  channel: _propTypes.default.object.isRequired
};