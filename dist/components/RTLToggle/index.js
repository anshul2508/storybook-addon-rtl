"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

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

var RTLToggle =
/*#__PURE__*/
function (_Component) {
  _inherits(RTLToggle, _Component);

  function RTLToggle(props) {
    var _this;

    _classCallCheck(this, RTLToggle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RTLToggle).call(this, props));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(RTLToggle, [{
    key: "handleChange",
    value: function handleChange(evt) {
      var checked = evt.target.checked;
      this.props.onChange(checked);
    }
  }, {
    key: "render",
    value: function render() {
      var checked = this.props.checked;
      return _react.default.createElement(_styles.Toggle, null, _react.default.createElement(_styles.ToggleLabel, {
        checked: checked
      }, _react.default.createElement(_styles.ToggleInput, {
        type: "checkbox",
        "aria-controls": "rtl-status",
        checked: checked,
        onChange: this.handleChange
      }), _react.default.createElement(_styles.ToggleKnob, {
        checked: checked
      }, 'Enable right-to-left')), _react.default.createElement(_styles.ToggleMessage, {
        id: "rtl-status",
        role: "region",
        "aria-live": "polite"
      }, checked ? 'Right-to-left' : 'Left-to-right'));
    }
  }]);

  return RTLToggle;
}(_react.Component);

exports.default = RTLToggle;
RTLToggle.propTypes = {
  checked: _propTypes.default.bool,
  onChange: _propTypes.default.func.isRequired
};
RTLToggle.defaultProps = {
  checked: false
};