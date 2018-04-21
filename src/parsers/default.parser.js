const HELPERS = require('../utils/helper.js').default;
const CONSTANTS = require('../utils/helper.js').CONSTS;

export default function(stdout, opts) {
  let parsed = '';
  let commits = [];
  // The parser needs to convert the text to
  // an object. For that we need to have a 
  // Snapshot of the output we are processing.
  // Below is for the `default` type
  // ```
  // commit 34a19b73d5827e7dc0f5238ecec12cd57c71e520
  // Author: Arvind Ravulavaru <arvind.ravulavaru@gmail.com>
  // Date:   Fri Apr 20 13:19:16 2018 +0530

  //     post publish commit

  //  sample-logs/CHANGELOG-decorate.md    | 16 ++++++++++++-
  //  sample-logs/CHANGELOG-default.md     | 46 ++++++++++++++++++++++++++++++++++++
  //  sample-logs/CHANGELOG-email.md       | 15 ++++++++++++
  //  sample-logs/CHANGELOG-full.md        | 14 +++++++++++
  //  sample-logs/CHANGELOG-fuller.md      | 18 ++++++++++++++
  //  sample-logs/CHANGELOG-oneline.md     |  2 ++
  //  sample-logs/CHANGELOG-pretty.md      |  4 +++-
  //  sample-logs/CHANGELOG-raw.md         | 18 ++++++++++++++
  //  sample-logs/CHANGELOG-short.md       | 12 ++++++++++
  //  sample-logs/CHANGELOG-userdefined.md | 14 +++++++++++
  //  10 files changed, 157 insertions(+), 2 deletions(-)

  // ```
  //
  // It start with a commit & ends with file changes 
  // for each commit.
  const logArr = stdout.split(CONSTANTS.NEW_LINE);
  let empLn1 = false;
  let empLn2 = false;
  let commit = {};

  logArr.forEach((line) => {
    if (HELPERS.IsCommitLine(line)) {
      if (commit['Commit Hash']) {
        // new commit
        commit['File Changes'] =
          CONSTANTS.CODE_TG_START +
          HELPERS.replacePipeWithArrow(commit['File Changes'].join(CONSTANTS.BR_TG).trim()) +
          CONSTANTS.CODE_TG_END;

        commits.push(commit);
        // reset
        empLn1 = false;
        empLn2 = false;
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

    if (HELPERS.IsEmptyLine(line) && empLn1) {
      empLn2 = true;
      return;
    }

    if (empLn2) {
      // these are the file changes
      commit['File Changes'] = commit['File Changes'] || [];
      commit['File Changes'].push(line);
    }

  });

  parsed = HELPERS.genMDTable(commits);
  return parsed;
}
