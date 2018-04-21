const HELPERS = require('../utils/helper.js').default;
const CONSTANTS = require('../utils/helper.js').CONSTS;

export default function(stdout, opts) {
  let parsed = '';
  let commits = [];
  // ```
  // From 6791829b9fa02bda2460894f54712303ce71a60d Mon Sep 17 00:00:00 2001
  // From: Arvind Ravulavaru <arvind.ravulavaru@gmail.com>
  // Date: Fri, 20 Apr 2018 13:17:02 +0530
  // Subject: [PATCH] 0.4.0
  //
  // ```

  const logArr = stdout.split(CONSTANTS.NEW_LINE);
  let commit = {};
  let empLn1 = false;

  logArr.forEach((line) => {
    if (HELPERS.IsFromLine(line)) {
      if (commit['From Hash']) {
        // new commit
        commits.push(commit);
        // reset
        commit = {};
      }

      commit['From Hash'] = line;
    }

    if (HELPERS.IsFromCLNLine(line)) {
      commit['From'] = line;
    }

    if (HELPERS.IsDateLine(line)) {
      commit['Date'] = line;
    }

    if (HELPERS.IsSubjectLine(line)) {
      commit['Subject'] = line;
    }

    if (HELPERS.IsEmptyLine(line)) {
      return;
    }

  });

  parsed = HELPERS.genMDTable(commits);
  return parsed;
}
