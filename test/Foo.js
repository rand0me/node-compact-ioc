//------------------------------------------------------------------------------
// Name: test/Foo.js
// Author: rand0me <not.randome@gmail.com>
// Timestamp: 2016-10-04T14:11:55.725Z
// Description:
//    @description@
//------------------------------------------------------------------------------

export default class Foo {
  constructor() {
    this.foo = 'foo';
  }
}

Foo.factory = () => new Foo();
