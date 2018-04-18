import test from "tape"
import dumpGitLogs from "../src"
const path = require('path');

const options = {
    fileName: 'CHANGELOG.md',
    filePath: path.resolve(__dirname, '..')
}

test("dumpGitLogs", (t) => {
  t.plan(1)
  t.equal(true, dumpGitLogs(options), "return true")
})
