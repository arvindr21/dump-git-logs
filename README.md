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
Dump raw git logs into a file
</big></p>


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
    type: 'custom'
}

DumpGitLogs(options); // Will create a CHANGELOG.md file at the given path
```

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
<th style="text-align:center">Command</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">default</td>
<td style="text-align:center"><code>git log --decorate --abbrev-commit</code></td>
</tr>
<tr>
<td style="text-align:center">raw</td>
<td style="text-align:center"><code>git log --raw --abbrev-commit</code></td>
</tr>
<tr>
<td style="text-align:center">oneline</td>
<td style="text-align:center"><code>git log --oneline --abbrev-commit</code></td>
</tr>
<tr>
<td style="text-align:center">custom</td>
<td style="text-align:center"><code>git log --pretty=format:'%h -%d %s (%ad) &lt;%an&gt;' --abbrev-commit</code></td>
</tr>
</tbody>
</table>
You can find sample outputs for each type in the `sample-logs` folder.

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
