import test from "tape"
import dumpGitLogs from "../src"
const path = require('path');

const opts = {
  filePath: path.resolve(__dirname, '..', 'sample-logs'),
}

const logTypes = ['default', 'decorate', 'raw', 'short', 'full', 'fuller', 'email', 'oneline', 'pretty'];
// const logTypes = ['default'];

test("dumpGitLogs", (t) => {
  t.plan(logTypes.length);

  logTypes.forEach((type) => {
    opts.type = type;
    opts.fileName = `CHANGELOG-${type}.md`;
    t.equal(true, dumpGitLogs(opts), "return true");
  });
});


test("user defined dumpGitLogs", (t) => {
  t.plan(1);

  opts.type = 'userdefined';
  opts.fileName = `CHANGELOG-userdefined.md`;
  opts.cmd = `git log`;
  t.equal(true, dumpGitLogs(opts), "return true");

});
