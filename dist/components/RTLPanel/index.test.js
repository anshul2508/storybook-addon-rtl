"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require("."));

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
describe('RTLPanel', function () {
  var spy;
  var wrapper;
  beforeEach(function () {
    spy = jest.fn();
    wrapper = (0, _enzyme.shallow)(_react.default.createElement(_.default, {
      checked: true,
      onChange: spy
    }));
  });
  it('renders', function () {
    expect(wrapper).toMatchSnapshot();
  });
});