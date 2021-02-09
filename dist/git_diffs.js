#!/usr/bin/env node


'use strict';

var exec = require('child_process').exec;
if (process.argv[2]) {
    exec('ruby ' + __dirname + '/git_Difference.rb -p ' + process.argv[2], function (err, stdout, stderr) {
        if (err) {
            console.log(err);
        }
        console.log(stdout);
    });
} else {
    exec('ruby ' + __dirname + '/git_Difference.rb', function (err, stdout, stderr) {
        if (err) {
            console.log(err);
        }
        console.log(stdout);
    });
}
