var fs = require('fs');
hexo.extend.filter.register('before_post_render', function(data){
    var file_content = fs.readFileSync('./node_modules/hexo-baidu-url-push/push.js');
        data.content += file_content;
    return data;
});