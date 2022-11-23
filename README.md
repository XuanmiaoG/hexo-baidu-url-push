# hexo-baidu-url-push

[![Travis branch](https://img.shields.io/travis/rust-lang/rust/master.svg)]()
 [![npm](https://img.shields.io/npm/l/express.svg)](https://github.com/xuanmiaog/hexo-baidu-url-push/blob/master/LICENSE) 
[![](https://img.shields.io/badge/npm-package-brightgreen.svg)](https://www.npmjs.com/package/hexo-baidu-url-push)
[![](https://img.shields.io/badge/Hexo-2.4%2B-brightgreen.svg)](http://hexo.io) 
[![](https://img.shields.io/npm/dy/hexo-baidu-url-push?label=download)](https://npm-stat.com/charts.html?package=hexo-baidu-url-push&from=2018-01-10&to=2022-03-10)                                                                     


[[CN|](https://github.com/XuanmiaoG/hexo-baidu-url-push/wiki/READEMECN)[EN](https://github.com/XuanmiaoG/hexo-baidu-url-push#readme)]
## Announcement
  Unfortunately, Baidu webmaster service platform finally announced the end of automatic push function in December 2020, we lost a low-cost, fast link submission function, this plug-in announced the end of maintenance in 2022. You can also change the plugin to add your JS code to the blog.
## Introduction

 ```javascripts
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

> Automatic push is a tool launched by Baidu Webmaster platform to improve the speed of discovery of new web pages on the site. It installs automatic push JS code pages. When the page is visited, the page URL will be immediately pushed to Baidu

A hexo plug-in, using baidu JS link automatic push method, submits links to Baidu, inserts automatic push JS code into every web page, and realizes link submission at low cost and quickly



## Design
Since v0.1.6, the plugin has abandoned the Filter feature and used the Injector feature for refactoring code.
```
var fs = require('fs');
hexo.extend.injector.register('head_begin',function(push){
  var push = fs.readFileSync('./node_modules/hexo-baidu-url-push/push.js');
  return push;})
```
### Result
```
<head><!-- hexo injector head_begin start --><script>
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
<!-- hexo injector head_begin end -->
```
## Install

### npm

```
npm install hexo-baidu-url-push --save
```
## Usage
```
hexo --debug
```
## Custom
With this plugin, you can make your own plugin to insert any JS code into your blog. The tutorial is here. 

[Custom](https://github.com/XuanmiaoG/hexo-baidu-url-push/wiki/Custom-your-Plugin-to-add-js-into-your-blog)

## License
### MIT
