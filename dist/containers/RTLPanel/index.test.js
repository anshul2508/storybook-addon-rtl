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
  var api;
  var channel;
  var wrapper;
  beforeEach(function () {
    api = {
      getQueryParam: jest.fn()
    };
    channel = {
      on: jest.fn(),
      removeListener: jest.fn(),
      emit: jest.fn()
    };
  });
  describe('without query parameter', function () {
    beforeEach(function () {
      api.getQueryParam.mockReturnValue(undefined);
      wrapper = (0, _enzyme.shallow)(_react.default.createElement(_.default, {
        api: api,
        channel: channel
      }));
    });
    it('renders', function () {
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('with query parameter', function () {
    beforeEach(function () {
      api.getQueryParam.mockReturnValue('rtl');
      wrapper = (0, _enzyme.shallow)(_react.default.createElement(_.default, {
        api: api,
        channel: channel
      }));
    });
    it('renders', function () {
      expect(wrapper).toMatchSnapshot();
    });
  });
});