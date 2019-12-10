"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require("."));

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
describe('RTLToggle', function () {
  var spy;
  var wrapper;
  beforeEach(function () {
    spy = jest.fn();
  });
  describe('default', function () {
    beforeEach(function () {
      wrapper = (0, _enzyme.mount)(_react.default.createElement(_.default, {
        onChange: spy
      }));
    });
    it('renders', function () {
      expect(wrapper).toMatchSnapshot();
    });
    it('invokes `onChange` when changed', function () {
      wrapper.find('input').simulate('change', {
        target: {
          checked: true
        }
      });
      expect(spy).toHaveBeenCalledWith(true);
    });
  });
  describe('unchecked', function () {
    beforeEach(function () {
      wrapper = (0, _enzyme.mount)(_react.default.createElement(_.default, {
        checked: false,
        onChange: spy
      }));
    });
    it('renders', function () {
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('checked', function () {
    beforeEach(function () {
      wrapper = (0, _enzyme.mount)(_react.default.createElement(_.default, {
        checked: true,
        onChange: spy
      }));
    });
    it('renders', function () {
      expect(wrapper).toMatchSnapshot();
    });
  });
});