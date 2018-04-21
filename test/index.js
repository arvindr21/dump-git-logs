import test from "tape"
import dumpGitLogs from "../src"
const path = require('path');

const logTypes = ['default', 'decorate', 'raw', 'short', 'full', 'fuller', 'email', 'oneline'];
// const logTypes = ['default'];

test("dumpGitLogs Raw", (t) => {
  t.plan(logTypes.length);
  const opts = {
    filePath: path.resolve(__dirname, '..', 'sample-logs', 'raw'),
    raw: true
  }

  logTypes.forEach((type) => {
    opts.type = type;
    opts.fileName = `CHANGELOG-${type}.md`;
    t.equal(true, dumpGitLogs(opts), "return true");
  });
});

test("dumpGitLogs Parsed", (t) => {
  t.plan(logTypes.length);
  const opts = {
    filePath: path.resolve(__dirname, '..', 'sample-logs', 'parsed'),
    raw: false
  }

  logTypes.forEach((type) => {
    opts.type = type;
    opts.fileName = `CHANGELOG-${type}.md`;
    t.equal(true, dumpGitLogs(opts), "return true");
  });
});

test("user defined dumpGitLogs raw", (t) => {
  t.plan(1);

  const opts = {
    filePath: path.resolve(__dirname, '..', 'sample-logs', 'raw'),
    raw: true
  }

  opts.type = 'userdefined';
  opts.fileName = `CHANGELOG-userdefined.md`;
  opts.cmd = `git log`;
  t.equal(true, dumpGitLogs(opts), "return true");

});
