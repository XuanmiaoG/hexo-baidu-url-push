# hexo-baidu-url-push

[![Travis branch](https://img.shields.io/travis/rust-lang/rust/master.svg)]()
 [![npm](https://img.shields.io/npm/l/express.svg)](https://github.com/xuanmiaog/hexo-baidu-url-push/blob/master/LICENSE) 
[![](https://img.shields.io/badge/npm-package-brightgreen.svg)](https://www.npmjs.com/package/hexo-baidu-url-push)
[![](https://img.shields.io/badge/Hexo-2.4%2B-brightgreen.svg)](http://hexo.io) 
[![](https://img.shields.io/npm/dy/hexo-baidu-url-push?label=download)](https://www.npmjs.com/package/hexo-baidu-url-push)

## 简介

 ```javascrips
(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';        
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();
</script>
```

> 自动推送是百度站长平台为提高站点新增网页发现速度推出的工具，安装自动推送JS代码的网页，在页面被访问时，页面URL将立即被推送给百度。

一个hexo插件，使用百度JS链路自动推送方法，提交链接到百度

## 安装

### npm

```
npm install hexo-baidu-url-push --save
```
## 配置
```
hexo --debug
```
可以看到插件已经开始工作

## 证书
### MIT