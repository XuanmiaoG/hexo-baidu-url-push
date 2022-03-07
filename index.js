var fs = require('fs');
hexo.extend.injector.register('head_begin',function(push){
  var push = fs.readFileSync('./node_modules/hexo-baidu-url-push/push.js');
  return push;});