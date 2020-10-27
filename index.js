const exec = require('child_process').exec;
exec('ruby ./git_Difference.rb', (err, stdout, stderr) => {
    if (err) { console.log(err); }
    console.log(stdout);
});
