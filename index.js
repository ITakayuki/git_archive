#!/usr/bin/env node

'use strict';

const exec = require('child_process').exec;
if (process.argv[2]) {
    exec(`ruby ${__dirname}/git_Difference.rb -p ${process.argv[2]}`, (err, stdout, stderr) => {
        if (err) { console.log(err); }
        console.log(stdout);
    });
} else {
    exec(`ruby ${__dirname}/git_Difference.rb`, (err, stdout, stderr) => {
        if (err) { console.log(err); }
        console.log(stdout);
    });

}