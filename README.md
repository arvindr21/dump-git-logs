<big><h1 align="center">dump-git-logs</h1></big>

<p align="center">
  <a href="https://npmjs.org/package/dump-git-logs">
    <img src="https://img.shields.io/npm/v/dump-git-logs.svg?style=flat-square"
         alt="NPM Version">
  </a>

  <a href="https://coveralls.io/r/arvindr21/dump-git-logs">
    <img src="https://img.shields.io/coveralls/arvindr21/dump-git-logs.svg?style=flat-square"
         alt="Coverage Status">
  </a>

  <a href="https://travis-ci.org/arvindr21/dump-git-logs">
    <img src="https://img.shields.io/travis/arvindr21/dump-git-logs.svg?style=flat-square"
         alt="Build Status">
  </a>

  <a href="https://npmjs.org/package/dump-git-logs">
    <img src="http://img.shields.io/npm/dm/dump-git-logs.svg?style=flat-square"
         alt="Downloads">
  </a>

  <a href="https://david-dm.org/arvindr21/dump-git-logs.svg">
    <img src="https://david-dm.org/arvindr21/dump-git-logs.svg?style=flat-square"
         alt="Dependency Status">
  </a>

  <a href="https://github.com/arvindr21/dump-git-logs/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/dump-git-logs.svg?style=flat-square"
         alt="License">
  </a>
</p>

<p align="center"><big>
Simple `git log` dumper, where all we need is to dump git commit history to a file. 
</big></p>
> I like the Angular style commit messages but for smaller projects I think Angular style commit message format is a bit of overkill. Hence created a simple git commit history dumper, so any project that uses git to manage it can get a complete dump of the log in various formats.

## Install

```sh
npm i -D dump-git-logs
```

## Usage
```js
const DumpGitLogs = require('dump-git-logs').default;
const path = require('path');

const options = { // Check below for all the options
    fileName: 'CHANGELOG.md',
    filePath: path.resolve(__dirname, '..'),
    type: 'oneline',
    raw: false
}

DumpGitLogs(options); // Will create a CHANGELOG.md file at the given path
```
`parsed` Ouput for `oneline` type would be as follows



<table>
<thead>
<tr>
<th>Property</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Commit Hash</strong></td>
<td>34a19b73d5827e7dc0f5238ecec12cd57c71e520</td>
</tr>
<tr>
<td><strong>Commit Message</strong></td>
<td>post publish commit</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>Commit Hash</strong></td>
<td>6791829b9fa02bda2460894f54712303ce71a60d</td>
</tr>
<tr>
<td><strong>Commit Message</strong></td>
<td>0.4.0</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>Commit Hash</strong></td>
<td>0cbf2ef96d30876e28247b5df9a52afe3359dd10</td>
</tr>
<tr>
<td><strong>Commit Message</strong></td>
<td>Update to streams and transformers, add more types. Fix: Parsing &amp; Formatting</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>Commit Hash</strong></td>
<td>0ff707511618d611ecd7a6a3f99b11254ffe3fdc</td>
</tr>
<tr>
<td><strong>Commit Message</strong></td>
<td>0.3.0</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>Commit Hash</strong></td>
<td>ebfa2a6023d52377cecf2267ad3684b5acc0749d</td>
</tr>
<tr>
<td><strong>Commit Message</strong></td>
<td>fix dependency issue</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>Commit Hash</strong></td>
<td>78a7f8e3fc9d9886a4ac588bb1a473e6b6a36d70</td>
</tr>
<tr>
<td><strong>Commit Message</strong></td>
<td>0.2.0</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>Commit Hash</strong></td>
<td>44316ba7531f9b7b592370fd987c40db293e9a4c</td>
</tr>
<tr>
<td><strong>Commit Message</strong></td>
<td>fix docs</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>Commit Hash</strong></td>
<td>b890dc6425076b887d9c27ec0844d07476b350d7</td>
</tr>
<tr>
<td><strong>Commit Message</strong></td>
<td>Update LICENSE</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>Commit Hash</strong></td>
<td>b396c1105de52fcabfb937581a18c07f3f7934ee</td>
</tr>
<tr>
<td><strong>Commit Message</strong></td>
<td>Create CODE_OF_CONDUCT.md</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>Commit Hash</strong></td>
<td>e27ae7a4c7d33dc1dacc45c25fd3e5d353574aa2</td>
</tr>
<tr>
<td><strong>Commit Message</strong></td>
<td>Update readme</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>Commit Hash</strong></td>
<td>6172a11b8bcecb1aa8cc30674f13d9281a9425f3</td>
</tr>
<tr>
<td><strong>Commit Message</strong></td>
<td>initial commit</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>Commit Hash</strong></td>
<td>98d5089a8fee0821dc946bcb031de20a76a46d8c</td>
</tr>
<tr>
<td><strong>Commit Message</strong></td>
<td>initial commit</td>
</tr>
</tbody>
</table>


> You can find sample outputs for each type in the `sample-logs` folder.

## Options 
List of options supported by `dump-git-logs`;
### fileName
> Name of the file
* Default: `CHANGELOG.md`
* Required : false

### filePath
> File Path where the log needs to be dumped to
* Required : true

### type
> Git log type
* Default: `default`
* Required : false

### raw
> Should the output be parsed to a table view or not. Applicable only for pre-defined types except `userdefined`.
* Default : false
* Required : false

### type
> Git log type
* Default: `default`
* Required : false

Available Types:

<table>
<thead>
<tr>
<th style="text-align:center">Type</th>
<th style="text-align:left">Command</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">default</td>
<td style="text-align:left"><code>git log --stat --summary</code></td>
</tr>
<tr>
<td style="text-align:center">raw</td>
<td style="text-align:left"><code>git log --format=raw --abbrev-commit</code></td>
</tr>
<tr>
<td style="text-align:center">short</td>
<td style="text-align:left"><code>git log --format=short --abbrev-commit</code></td>
</tr>
<tr>
<td style="text-align:center">full</td>
<td style="text-align:left"><code>git log --format=full --abbrev-commit</code></td>
</tr>
<tr>
<td style="text-align:center">fuller</td>
<td style="text-align:left"><code>git log --format=fuller --abbrev-commit</code></td>
</tr>
<tr>
<td style="text-align:center">email</td>
<td style="text-align:left"><code>git log --format=email --abbrev-commit</code></td>
</tr>
<tr>
<td style="text-align:center">oneline</td>
<td style="text-align:left"><code>git log --format=oneline --abbrev-commit</code></td>
</tr>
<tr>
<td style="text-align:center">decorate</td>
<td style="text-align:left"><code>git log --decorate --abbrev-commit</code></td>
</tr>
</tbody>
</table>
You can find sample outputs for each type in the `sample-logs` folder.

## user defined `git log`
> If you would like to run your own `git log` query, you can do so as below

```js
const DumpGitLogs = require('dump-git-logs').default;
const path = require('path');

const options = { // Check below for all the options
    fileName: 'CHANGELOG.md',
    filePath: path.resolve(__dirname, '..'),
    type: 'userdefined',
    cmd: 'git log -p' // required, if type: 'userdefined'
}

DumpGitLogs(options); // Will create a CHANGELOG.md file at the given path

```


## License

MIT © [Arvind Ravulavaru](http://github.com/arvindr21)

[npm-url]: https://npmjs.org/package/dump-git-logs
[npm-image]: https://img.shields.io/npm/v/dump-git-logs.svg?style=flat-square

[travis-url]: https://travis-ci.org/arvindr21/dump-git-logs
[travis-image]: https://img.shields.io/travis/arvindr21/dump-git-logs.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/arvindr21/dump-git-logs
[coveralls-image]: https://img.shields.io/coveralls/arvindr21/dump-git-logs.svg?style=flat-square

[depstat-url]: https://david-dm.org/arvindr21/dump-git-logs
[depstat-image]: https://david-dm.org/arvindr21/dump-git-logs.svg?style=flat-square

[download-badge]: http://img.shields.io/npm/dm/dump-git-logs.svg?style=flat-square
