(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['chai', 'sinon', '../src'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('chai'), require('sinon'), require('../src'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.chai, global.sinon, global.src);
    global.indexTest = mod.exports;
  }
})(this, function (_chai, _sinon, Browser) {
  'use strict';

  var _sinon2 = _interopRequireDefault(_sinon);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('RsBrowser测试', function () {
    "use strict";

    before(function () {});
    after(function () {});
    it('RsBrowser.version 预期值为真(微信,IOS),预期值为假(安卓,web,rsApp)', function () {
      var window = {
        navigator: {
          userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1 MicroMessenger'
        }
      };
      Browser.init(window.navigator.userAgent);
      (0, _chai.expect)(Browser.version.weiXin).to.equal(true);
      (0, _chai.expect)(Browser.version.ios).to.equal(true);
      (0, _chai.expect)(Browser.version.android).to.equal(false);
      (0, _chai.expect)(Browser.version.web).to.equal(false);
      (0, _chai.expect)(Browser.version.rsApp).to.equal(false);
    });
    it('RsBrowser.version 预期值为真(安卓,rsApp),预期值为假(微信,IOSweb,rsApp)', function () {
      var window = {
        navigator: {
          userAgent: 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Mobile Safari/537.36 chinaredstar'
        }
      };
      Browser.init(window.navigator.userAgent);
      (0, _chai.expect)(Browser.version.android).to.equal(true);
      (0, _chai.expect)(Browser.version.rsApp).to.equal(true);
      (0, _chai.expect)(Browser.version.ios).to.equal(false);
      (0, _chai.expect)(Browser.version.web).to.equal(false);
      (0, _chai.expect)(Browser.version.weiXin).to.equal(false);
    });
  });
});