var fs = require('fs');
hexo.extend.filter.register('before_post_render', function(data){
    var file_content = fs.readFileSync(path.join(_dirname,"push.js"),"utf-8");
        data.content += file_content;
    return data;
});
