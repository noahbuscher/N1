var path  = require('path');
var spawn = require('child_process').spawn;

var nylasCommandPath = path.resolve(__dirname, '..', '..', 'nylas.exe');
var arguments = process.argv.slice(2);
arguments.unshift('--executed-from', process.cwd());
var options = {detached: true, stdio: 'ignore'};
spawn(nylasCommandPath, arguments, options);
process.exit(0);
