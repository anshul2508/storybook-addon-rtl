"use strict";

var _utils = require("./utils");

describe('utils', function () {
  describe('.getDefaultTextDirection', function () {
    it('returns the text direction from the query params', function () {
      var api = {
        getQueryParam: jest.fn().mockReturnValue('rtl')
      };
      jest.spyOn(window, 'getComputedStyle').mockReturnValue({
        direction: ''
      });
      expect((0, _utils.getDefaultTextDirection)(api)).toBe('rtl');
    });
    it('returns the text direction from the html tag', function () {
      var api = {
        getQueryParam: jest.fn().mockReturnValue(undefined)
      };
      jest.spyOn(window, 'getComputedStyle').mockReturnValue({
        direction: 'rtl'
      });
      expect((0, _utils.getDefaultTextDirection)(api)).toBe('rtl');
    });
    it('returns `ltr` as a fallback', function () {
      var api = {
        getQueryParam: jest.fn().mockReturnValue(undefined)
      };
      jest.spyOn(window, 'getComputedStyle').mockReturnValue({
        direction: ''
      });
      expect((0, _utils.getDefaultTextDirection)(api)).toBe('ltr');
    });
  });
  describe('.setTextDirection', function () {
    it('sets the direction of the html tag', function () {
      (0, _utils.setTextDirection)('rtl');
      expect(document.documentElement.dir).toBe('rtl');
    });
  });
});