var spawnSync = require('spawn-sync');
var path = require('path');

module.exports = function (delay) {
    spawnSync('node', [path.join(__dirname, 'fixtures', 'sleep')], {
        input: delay + "\n"
    });
};
