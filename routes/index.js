/*
*   Scans the routes directory and automatically adds the routes
*/

var fs = require('fs');

module.exports = function (app){
    fs.readdirSync(__dirname).forEach(function(file) {
        if (file == "index.js" || file == "helpers.js") return;
        var name = file.substr(0, file.indexOf('.'));
        require('./' + name)(app);
    });
}
