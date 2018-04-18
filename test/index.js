import test from "tape"
import dumpGitLogs from "../src"
const path = require('path');

const opts = {
  filePath: path.resolve(__dirname, '..', 'sample-logs'),
}

const logTypes = ['raw', 'oneline', 'default', 'custom'];

test("dumpGitLogs", (t) => {
  t.plan(logTypes.length);

  logTypes.forEach((type) => {
  	opts.type = type;
  	opts.fileName = `CHANGELOG-${type}.md`;
    t.equal(true, dumpGitLogs(opts), "return true");
  });
});
