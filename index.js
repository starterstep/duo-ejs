var ejs = require('ejs');

module.exports = function plugin() {
    return function *jade(file) {
        if (file.type !== 'ejs') return;

        file.type = 'js';
        file.src = 'module.exports = ' + ejs.compile(file.src, { client: true }).toString();
    }
};