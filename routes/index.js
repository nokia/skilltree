var fs = require('fs');

module.exports = function (app){
    fs.readdirSync(__dirname).forEach(function(file) {
        console.log(file);
        if (file == "index.js") return;
        var name = file.substr(0, file.indexOf('.'));
        require('./' + name)(app);
    });
}
