const util = require('util');
const Transform = require('stream').Transform;
const os = require('os');

const CONSTANTS = {
  TAB: '\t',
  SPACES4: '    ',
  MD_NEWLINE: '\\',
  NEW_LINE: os.EOL,
  CMT: 'commit ',
  CMT_COLON: 'Commit:',
  CMT_MSG: 'Commit Message',
  AUTHOR: 'author ',
  COMMITTER: 'committer ',
  AUTHOR_COLON: 'Author:',
  DATE: 'Date:',
  COMMIT_DATE: 'CommitDate:',
  AUTHOR_DATE: 'AuthorDate:',
  SUBJECT: 'Subject:',
  FROM: 'FROM ',
  FROM_COLON: 'FROM:',
  FILES_CHNGD: 'files changed,',
  FILE_CHNGD: 'file changed,',
  INSERTIONS: 'insertions(+)',
  DELETIONS: 'deletions(-)',
  FMT_BOLD: '**',
  FMT_ITALICS: '_',
  FMT_CODE_INLINE: '`',
  FMT_CODE_BLOCK: '```',
  FMT_HR: '---'
}

function Transformer(options) {
  Transform.call(this, options);
}

util.inherits(Transformer, Transform);

Transformer.prototype._transform = function(data, encoding, callback) {
  let out = '';
  data = data.toString();
  const logArr = data.split(os.EOL)
  logArr.forEach((line, idx) => {
    if (!line) return;
    let MD_NEWLINE = true;

    if (line.indexOf(CONSTANTS.CMT) === 0) {
      line = CONSTANTS.FMT_BOLD + line + CONSTANTS.FMT_BOLD;
    }

    if (line.indexOf(CONSTANTS.AUTHOR_COLON) === 0 ||
      line.indexOf(CONSTANTS.CMT_COLON) === 0 ||
      line.indexOf(CONSTANTS.AUTHOR) === 0 ||
      line.indexOf(CONSTANTS.COMMITTER) === 0) {
      line = CONSTANTS.FMT_ITALICS + line + CONSTANTS.FMT_ITALICS;
    }

    if (line.indexOf(CONSTANTS.DATE) === 0 ||
      line.indexOf(CONSTANTS.COMMIT_DATE) === 0) {
      line = CONSTANTS.FMT_CODE_INLINE + line + CONSTANTS.FMT_CODE_INLINE;
      MD_NEWLINE = false;
    }

    if (line.indexOf(CONSTANTS.AUTHOR_DATE) === 0) {
      line = CONSTANTS.FMT_CODE_INLINE + line + CONSTANTS.FMT_CODE_INLINE;
    }

    if ((line.indexOf(CONSTANTS.FILES_CHNGD) > 0 && line.indexOf(CONSTANTS.INSERTIONS)) ||
      (line.indexOf(CONSTANTS.FILES_CHNGD) > 0 && line.indexOf(CONSTANTS.DELETIONS)) ||
      (line.indexOf(CONSTANTS.FILE_CHNGD) > 0 && line.indexOf(CONSTANTS.INSERTIONS)) ||
      (line.indexOf(CONSTANTS.FILE_CHNGD) > 0 && line.indexOf(CONSTANTS.DELETIONS))) {
      line = line + CONSTANTS.NEW_LINE + CONSTANTS.NEW_LINE + CONSTANTS.FMT_HR;
      MD_NEWLINE = false;
    }

    if (line.indexOf(CONSTANTS.SUBJECT) === 0) {
      line = CONSTANTS.FMT_CODE_BLOCK + CONSTANTS.NEW_LINE + line + CONSTANTS.NEW_LINE + CONSTANTS.FMT_CODE_BLOCK + CONSTANTS.NEW_LINE + CONSTANTS.FMT_HR;
      MD_NEWLINE = false;
    }

    // Commit message start with 4 spaces or a tab
    if (line[0] === CONSTANTS.TAB || line.indexOf(CONSTANTS.SPACES4) === 0) {
      line = CONSTANTS.FMT_CODE_BLOCK + CONSTANTS.NEW_LINE + CONSTANTS.CMT_MSG + ': ' + line + CONSTANTS.NEW_LINE + CONSTANTS.FMT_CODE_BLOCK;
      out += line + CONSTANTS.NEW_LINE + CONSTANTS.FMT_HR + CONSTANTS.NEW_LINE;
    } else {
      if (logArr.length === idx) {
        MD_NEWLINE = false;
      }
      out += line + (MD_NEWLINE ? CONSTANTS.MD_NEWLINE : '') + os.EOL;
    }
  });
  callback(null, out);
}


export default Transformer;
