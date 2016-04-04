[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]


# nano-sched-json
JSON parsing and stringifying nano-sched plugin

## data object

* encoding `<String>`
* content `<any>`


## Functions


### json.parse(log, data)

Converts `{ encoding:'utf8', content: '{ a: 1}' }` into `{ encoding:'json', content: { a: 1 } }`.


### json.stringify(log, data)

Converts `{ encoding:'json', content: { a: 1 } }` into `{ encoding:'utf8', content: '{ a: 1 }' }`.


[bithound-image]: https://www.bithound.io/github/Holixus/nano-sched-json/badges/score.svg
[bithound-url]: https://www.bithound.io/github/Holixus/nano-sched-json

[gitter-image]: https://badges.gitter.im/Holixus/nano-sched-json.svg
[gitter-url]: https://gitter.im/Holixus/nano-sched-json

[npm-image]: https://badge.fury.io/js/nano-sched-json.svg
[npm-url]: https://badge.fury.io/js/nano-sched-json

[github-tag]: http://img.shields.io/github/tag/Holixus/nano-sched-json.svg
[github-url]: https://github.com/Holixus/nano-sched-json/tags

[travis-image]: https://travis-ci.org/Holixus/nano-sched-json.svg?branch=master
[travis-url]: https://travis-ci.org/Holixus/nano-sched-json

[coveralls-image]: https://coveralls.io/repos/github/Holixus/nano-sched-json/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/Holixus/nano-sched-json?branch=master

[david-image]: https://david-dm.org/Holixus/nano-sched-json.svg
[david-url]: https://david-dm.org/Holixus/nano-sched-json

[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[license-url]: LICENSE

[downloads-image]: http://img.shields.io/npm/dt/nano-sched-json.svg
[downloads-url]: https://npmjs.org/package/nano-sched-json
