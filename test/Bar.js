//------------------------------------------------------------------------------
// Name: @file@
// Author: rand0me <not.randome@gmail.com>
// Timestamp: 2016-10-04T14:13:04.366Z
// Description:
//    @description@
//------------------------------------------------------------------------------

export default class Bar {
  constructor(foo) {
    this.bar = foo.foo + 'bar';
  }
}

Bar.factory = (foo) => new Bar(foo);
Bar.factory.deps = [ 'Foo' ];
