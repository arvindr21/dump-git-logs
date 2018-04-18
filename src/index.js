const exec = require('child_process').exec
const hasGit = require('git-check');
const path = require('path');
const fs = require('fs');

const defaults = {
  fileName: 'CHANGELOG.md',
  type: 'default'
};

const GITLOGCMD = {
  raw: "git log --raw --abbrev-commit",
  custom: "git log --pretty=format:'%h -%d %s (%ad) <%an>' --abbrev-commit",
  oneline: "git log --oneline --abbrev-commit",
  default: "git log --decorate --abbrev-commit"
}

export default function(opts) {
  if (!hasGit) {
    throw new Error('Git is not installed. Please install Git to use this module.');
  }

  opts = Object.assign({}, defaults, opts);

  if (!opts.filePath) {
    console.error('File path required to save:', opts.fileName);
    return false;
  }

  let cmd = GITLOGCMD[opts.type.toLowerCase()];
  exec(cmd, (err, stdout, stderr) => {
    if (err || stderr) {
      console.error(err || stderr);
    } else {
      let out = `# ${opts.fileName.replace(/\.[^/.]+$/, '')}\n` + stdout;
      fs.writeFileSync(path.resolve(opts.filePath, opts.fileName), out);
    }
  });

  return true
}
