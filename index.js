const exec = require('child_process').exec;
if (process.argv[2]) {
    exec(`ruby ./node_modules/get_diffs/git_Difference.rb -p ${process.argv[2]}`, (err, stdout, stderr) => {
        if (err) { console.log(err); }
        console.log(stdout);
    });
} else {
    exec('ruby ./node_modules/get_diffs/git_Difference.rb', (err, stdout, stderr) => {
        if (err) { console.log(err); }
        console.log(stdout);
    });

}