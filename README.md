# 浏览器版本检查
## 作者: 蔡鹏飞

## Install
```bash
$ npm install rs-browser --save
```

## Useage
es6
```bash
import Browser from 'rs-browser';
```

es5
```bash
var Browser = require('rs-browser');
```

### chang list
### 1.0.0
用法
import Version from 'rs-browser';
通过以下属性判断环境
  android: false,
  web: false,
  ios: false,
  rsApp: false,
  // 微信
  weiXin: false

### 1.0.1
增加以下判断
// 微博App
weiboApp:false,
// QQApp
qqApp:false

### 1.0.2
修复变量未定义问题

### 1.0.3
增加以下判断
qqApp:false, // QQ内置浏览器
qqMobile:false, // 移动 QQ浏览器
qqBrowser:false   // PC QQ浏览器

### 1.0.4
修复判断QQ不准确的问题
