var Browser = require('../src');
import { expect, assert } from 'chai';
import sinon from 'sinon';
console.log('Browser', Browser)
describe('RsBrowser测试', () => {
  "use strict";
  before(() => {

  });
  after(() => {

  })
  it('RsBrowser.version 预期值为真(微信,IOS),预期值为假(安卓,web,rsApp)', () => {
    let window = {
      navigator: {
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1 MicroMessenger'
      }
    }
    Browser.init(window.navigator.userAgent);
    expect(Browser.version.weiXin).to.equal(true);
    expect(Browser.version.ios).to.equal(true);
    expect(Browser.version.android).to.equal(false);
    expect(Browser.version.web).to.equal(false);
    expect(Browser.version.rsApp).to.equal(false);
  });
  it('RsBrowser.version 预期值为真(安卓,rsApp),预期值为假(微信,IOSweb,rsApp)', () => {
    let window = {
      navigator: {
        userAgent: 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Mobile Safari/537.36 chinaredstar'
      }
    }
    Browser.init(window.navigator.userAgent);
    expect(Browser.version.android).to.equal(true);
    expect(Browser.version.rsApp).to.equal(true);
    expect(Browser.version.ios).to.equal(false);
    expect(Browser.version.web).to.equal(false);
    expect(Browser.version.weiXin).to.equal(false);
  });
})
