compact-ioc [![Build Status]](https://travis-ci.org/rand0me/node-compact-ioc)
==========================================
[![NPM]](https://nodei.co/npm/compact-ioc/)

## Installation
```
npm install --save compact-ioc
```

## Usage
```javascript
// container.js
import CompactIOC from '../src/CompactIOC';
export default new CompactIOC();
```
```javascript
// Foo.js
import container from './container';

export default class Foo {
  constructor() {
    this.foo = 'foo';
  }
}

Foo.factory = () => new Foo();
container.pub('Foo', Foo.factory);
```
```javascript
// Bar.js
import container from './container';

export default class Bar {
  constructor(foo) {
    this.bar = foo.foo + 'bar';
  }
}

Bar.factory = (foo) => new Bar(foo);
Bar.factory.deps = [ 'Foo' ];
container.pub('Bar', Bar.factory);
```

## License (TL;DR - This is ISC license)
Copyright (c) 2016, rand0me <not.randome@gmail.com>

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.


[Build Status]: https://travis-ci.org/rand0me/node-compact-ioc.svg?branch=master
[NPM]: https://nodei.co/npm/compact-ioc.png
