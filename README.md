# node-homedir

Get the effective user's homedir, if Node.js >= v16.0.0 .

Always return the homedir of the current executor， even execute with `sudo -u [user] node app.js` without `-i`.

[Reference Issue](https://github.com/nodejs/node/issues/5582)

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/node-homedir.svg?style=flat-square
[npm-url]: https://npmjs.org/package/node-homedir
[travis-image]: https://img.shields.io/travis/node-modules/node-homedir.svg?style=flat-square
[travis-url]: https://travis-ci.org/node-modules/node-homedir
[codecov-image]: https://codecov.io/github/node-modules/node-homedir/coverage.svg?branch=master
[codecov-url]: https://codecov.io/github/node-modules/node-homedir?branch=master
[snyk-image]: https://snyk.io/test/npm/node-homedir/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/node-homedir
[download-image]: https://img.shields.io/npm/dm/node-homedir.svg?style=flat-square
[download-url]: https://npmjs.org/package/node-homedir

## Installation

```bash
npm install node-homedir
```

## Usage

Commonjs

```js
const { homedir } = require('node-homedir');

console.log(homedir());
```

ESM & TypeScript

```ts
import { homedir } from 'node-homedir';

console.log(homedir());
```

## License

[MIT](LICENSE)
