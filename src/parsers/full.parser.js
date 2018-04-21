const HELPERS = require('../utils/helper.js').default;
const CONSTANTS = require('../utils/helper.js').CONSTS;

export default function(stdout, opts) {
  let parsed = '';
  let commits = [];
  // ```
  // commit e27ae7a
  // tree 5461b166dc34353253b6c0eb84a3f58104efe9dc
  // parent 6172a11b8bcecb1aa8cc30674f13d9281a9425f3
  // author Arvind Ravulavaru <arvind.ravulavaru@gmail.com> 1524033386 +0530
  // committer Arvind Ravulavaru <arvind.ravulavaru@gmail.com> 1524033386 +0530

  //     Update readme
  // ```

  const logArr = stdout.split(CONSTANTS.NEW_LINE);
  let empLn1 = false;
  let commit = {};

  logArr.forEach((line) => {
    if (HELPERS.IsCommitLine(line)) {
      if (commit['Commit Hash']) {
        // new commit
        commits.push(commit);
        // reset
        empLn1 = false;
        commit = {};
      }

      // commit['Commit Hash'] = `[${line}](/commit/${HELPERS.getCommitHash(line)})`;
      commit['Commit Hash'] = line;
    }

    if (HELPERS.IsAuthorLine(line)) {
      commit['Author'] = line;
    }

    if (HELPERS.IsCommitCLNLine(line)) {
      commit['Commit'] = line;
    }

    if (HELPERS.IsEmptyLine(line) && !empLn1) {
      empLn1 = true;
      return;
    }

    if (empLn1 && HELPERS.IsCommitMessage(line)) {
      commit['Commit Message'] = line;
    }

  });

  parsed = HELPERS.genMDTable(commits);
  return parsed;
}
