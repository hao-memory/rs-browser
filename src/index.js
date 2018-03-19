import {os, browser, thirdapp} from 'amfe-env';

const version = {
  android: false,
  web: false,
  ios: false,
  rsApp: false,
  weiXin: false, // 微信
  weiboApp:false,  // 微博App
  qqApp:false, // QQ内置浏览器
  qqMobile:false, // 移动 QQ浏览器
  qqBrowser:false   // PC QQ浏览器
}
class RSBrowser {
  static init(userAgent = '') {
    let ua = userAgent;
    // let version = RSBrowser.version;
    // 初始化
    Object.keys(version).forEach((key) => {
      version[key] = false;
    });
    if (ua.match(/chinaredstar/ig)) {
      version.rsApp = true;
    } else if (thirdapp.isWeixin) {
      version.weiXin = true;
    }

    if (ua.match(/Android/ig)) {
      version.android = true;
    } else if (os.isIOS) {
      version.ios = true;
    } else {
      version.web = true;
    }

    if(version.ios){
      if(ua.match(/MQQBrowser/ig)){
        version.qqMobile=true;
      }else if(ua.match(/QQ/ig)){
        version.qqApp=true;
      }
    }else if(version.android){
      if(ua.match(/Mobile MQQBrowser/ig)){
        version.qqApp=true;
      }else if(ua.match(/MQQBrowser/ig)){
        version.qqMobile=true;
      }
    }else{
      if(ua.match(/QQBrowser/ig)){
        version.qqBrowser=true;
      }
    }

    if(version.weiXin){
      version.qqApp=false;
      version.qqMobile=false;
    }

    if(!version.web){
      if (thirdapp.isWeibo) {
        version.weiboApp=true;
      }
    }
  }
}
(function (self) {
  console.log('self', self)
  RSBrowser.init(self.navigator.userAgent)
})(typeof self !== 'undefined' ? self : this)
// export default RSBrowser;
export default version;
