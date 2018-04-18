const exec = require('child_process').exec
const hasGit = require('git-check');
const path = require('path');
const fs = require('fs');

const defaults = {
  fileName: 'CHANGELOG.md',
  type: 'long'
};

const GITLOGCMD = {
	short : "git log --graph --pretty=format:'%h -%d %s (%cr) <%an>' --abbrev-commit",
	long: "git log"
}

export default function(opts) {
  if (!hasGit) {
    throw new Error('Git is not installed. Please install Git to use this module.');
  }

  opts = Object.assign({}, opts, defaults);

  if (!opts.filePath) {
    console.error('File path required to save:', opts.fileName);
    return false;
  }

  exec(GITLOGCMD[opts.type], (err, stdout, stderr) => {
    if (err || stderr) {
      console.error(err || stderr);
    } else {
      fs.writeFileSync(path.resolve(opts.filePath, opts.fileName), stdout);
    }
  })


  return true
}
