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
    type: 'pretty'
}

DumpGitLogs(options); // Will create a CHANGELOG.md file at the given path
```
Ouput for `pretty` type would be as follows

```
0ff7075 - (HEAD -> master, tag: v0.3.0, origin/master) 0.3.0 (Wed Apr 18 12:20:13 2018 +0530) <Arvind Ravulavaru>
ebfa2a6 - fix dependency issue (Wed Apr 18 12:18:43 2018 +0530) <Arvind Ravulavaru>
78a7f8e - (tag: v0.2.0) 0.2.0 (Wed Apr 18 12:11:46 2018 +0530) <Arvind Ravulavaru>
44316ba - fix docs (Wed Apr 18 12:11:09 2018 +0530) <Arvind Ravulavaru>
b890dc6 - Update LICENSE (Wed Apr 18 12:10:13 2018 +0530) <Arvind Ravulavaru>
b396c11 - Create CODE_OF_CONDUCT.md (Wed Apr 18 12:09:13 2018 +0530) <Arvind Ravulavaru>
e27ae7a - Update readme (Wed Apr 18 12:06:26 2018 +0530) <Arvind Ravulavaru>
6172a11 - initial commit (Wed Apr 18 11:51:13 2018 +0530) <Arvind Ravulavaru>
98d5089 - initial commit (Wed Apr 18 11:05:40 2018 +0530) <Arvind Ravulavaru>

```
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
<tr>
<td style="text-align:center">pretty</td>
<td style="text-align:left"><code>git log --pretty=format:'%h -%d %s (%ad) <%an>' --abbrev-commit</code></td>
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
