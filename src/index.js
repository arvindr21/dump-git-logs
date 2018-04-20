const exec = require('child_process').exec
const hasGit = require('git-check');
const path = require('path');
const fs = require('fs');
const Transformer = require('./transformer.js').default;


const defaults = {
  fileName: 'CHANGELOG.md',
  type: 'default'
};

const GITLOGCMD = {
  default: 'git log --stat --summary',
  raw: 'git log --format=raw --abbrev-commit',
  short: 'git log --format=short --abbrev-commit',
  full: 'git log --format=full --abbrev-commit',
  fuller: 'git log --format=fuller --abbrev-commit',
  email: 'git log --format=email --abbrev-commit',
  oneline: 'git log --format=oneline --abbrev-commit',
  decorate: 'git log --decorate --abbrev-commit',
  pretty: "git log --pretty=format:'%h -%d %s (%ad) <%an>' --abbrev-commit",
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

  if (opts.type.toLowerCase() === 'userdefined') {
    // if the the type is `userdefined`, we need
    // the cmd to be define
    if (!opts.cmd) {
      console.error('For `type`=`userdefined`, `cmd` needs to be defined');
      return;
    }

    // if the type is `userdefined`, user should enter 
    // a `git log` command only. Else we don't process it.
    if (opts.cmd.toLowerCase().indexOf('git log') !== 0) {
      console.error('For `type`=`userdefined`, `cmd` needs to be a `git log` command.');
      return;
    }

    GITLOGCMD['userdefined'] = opts.cmd.toLowerCase();
  }

  let cmd = GITLOGCMD[opts.type.toLowerCase()];
  const gitProcess = exec(cmd);
  const ws = fs.createWriteStream(path.resolve(opts.filePath, opts.fileName));
  gitProcess.stdout.pipe(new Transformer()).pipe(ws);

  return true;
}