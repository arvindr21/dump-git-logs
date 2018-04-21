const HELPERS = require('../utils/helper.js').default;
const CONSTANTS = require('../utils/helper.js').CONSTS;

export default function(stdout, opts) {
  let parsed = '';
  let commits = [];
  // ```
  // commit 34a19b7 (HEAD -> master, origin/master)
  // Author: Arvind Ravulavaru <arvind.ravulavaru@gmail.com>
  // Date:   Fri Apr 20 13:19:16 2018 +0530

  //     post publish commit
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

    if (HELPERS.IsDateLine(line)) {
      commit['Date'] = line;
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
