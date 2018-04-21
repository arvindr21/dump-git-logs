const HELPERS = require('../utils/helper.js').default;
const CONSTANTS = require('../utils/helper.js').CONSTS;

export default function(stdout, opts) {
  let parsed = '';
  let commits = [];
  // ```
  // 34a19b73d5827e7dc0f5238ecec12cd57c71e520 post publish commit
  // ```

  const logArr = stdout.split(CONSTANTS.NEW_LINE);
  let commit = {};

  logArr.forEach((line) => {
    commit = {};
    if (!line) return;
    let olArr = line.split(CONSTANTS.SPACE);
    commit['Commit Hash'] = olArr.shift();
    commit['Commit Message'] = olArr.join(CONSTANTS.SPACE);
    commits.push(commit);
  });

  parsed = HELPERS.genMDTable(commits);
  return parsed;
}
