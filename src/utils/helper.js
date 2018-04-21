const os = require('os');
const MDTable = require('markdown-table');

const CONSTANTS = {
  TAB: '\t',
  SPACE: ' ',
  SPACES4: '    ',
  MD_NEWLINE: '\\',
  NEW_LINE: os.EOL,
  CMT: 'commit ',
  TREE: 'tree',
  PARENT: 'parent',
  CMT_COLON: 'Commit:',
  CMT_MSG: 'Commit Message',
  AUTHOR: 'author ',
  COMMITTER: 'committer ',
  AUTHOR_COLON: 'Author:',
  DATE: 'Date:',
  COMMIT_DATE: 'CommitDate:',
  AUTHOR_DATE: 'AuthorDate:',
  SUBJECT: 'Subject:',
  FROM: 'From ',
  FROM_COLON: 'From:',
  FILES_CHNGD: 'files changed,',
  FILE_CHNGD: 'file changed,',
  INSERTIONS: 'insertions(+)',
  DELETIONS: 'deletions(-)',
  FMT_BOLD: '**',
  FMT_ITALICS: '_',
  FMT_CODE_INLINE: '`',
  FMT_CODE_BLOCK: '```',
  FMT_HR: '---',
  PIPE_REGEX: /\|/g,
  FAT_ARROW: '=>',
  ASTERIX: '*',
  CODE_TG_START: '<code>',
  CODE_TG_END: '</code>',
  BR_TG: '<br>'
}

const HELPERS = {
  IsEmptyLine(line) {
    return line.trim().length === 0;
  },
  IsCommitLine(line) {
    return line.indexOf(CONSTANTS.CMT) === 0;
  },
  IsCommitCLNLine(line) {
    return line.indexOf(CONSTANTS.CMT_COLON) === 0;
  },
  IsAuthorLine(line) {
    return line.indexOf(CONSTANTS.AUTHOR_COLON) === 0;
  },
  IsDateLine(line) {
    return line.indexOf(CONSTANTS.DATE) === 0;
  },
  IsCommitMessage(line) {
    return line[0] === CONSTANTS.TAB || line.indexOf(CONSTANTS.SPACES4) === 0;
  },
  IsTreeLine(line) {
    return line.indexOf(CONSTANTS.TREE) === 0;
  },
  IsParentLine(line) {
    return line.indexOf(CONSTANTS.PARENT) === 0;
  },
  IsAuthorSMLLine(line) {
    return line.indexOf(CONSTANTS.AUTHOR) === 0;
  },
  IsCommitterLine(line) {
    return line.indexOf(CONSTANTS.COMMITTER) === 0;
  },
  IsAuthorDateLine(line) {
    return line.indexOf(CONSTANTS.AUTHOR_DATE) === 0;
  },
  IsCommitDateLine(line) {
    return line.indexOf(CONSTANTS.COMMIT_DATE) === 0;
  },
  IsFromLine(line) {
    return line.indexOf(CONSTANTS.FROM) === 0;
  },
  IsFromCLNLine(line) {
    return line.indexOf(CONSTANTS.FROM_COLON) === 0;
  },
  IsSubjectLine(line) {
    return line.indexOf(CONSTANTS.SUBJECT) === 0;
  },

  ////////
  processCMTLine(line) {
    if (this.IsCommitLine(line)) {
      line = CONSTANTS.FMT_BOLD + line + CONSTANTS.FMT_BOLD;
    }
    return line;
  },
  getCommitHash(line) {
    return line.replace(CONSTANTS.CMT, '').trim();
  },
  ////////

  replacePipeWithArrow(line) {
    return line.replace(CONSTANTS.PIPE_REGEX, CONSTANTS.FAT_ARROW);
  },

  ////////
  genMDTable(commits) {
    let arr = [];
    arr.push(['Property', 'Value'])
    commits.forEach((c, i) => {
      let keys = Object.keys(c);
      let a = [];
      keys.forEach((k) => {
        a.push(CONSTANTS.FMT_BOLD + k + CONSTANTS.FMT_BOLD);
        a.push(c[k].trim());
        arr.push(a);
        a = [];
      });
      if (i !== commits.length - 1) {
        arr.push(['', '']);
        arr.push(['', '']);
      }
    });

    return MDTable(arr);
  }
}

export default HELPERS;
exports.CONSTS = CONSTANTS;
