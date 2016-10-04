//------------------------------------------------------------------------------
// Name: @file@
// Author: @author@ <@email@>
// Timestamp: @timestamp@
// Description:
//    @description@
//------------------------------------------------------------------------------

import tape from 'tape';
import CompactIOC from '../src/CompactIOC';
import Foo from './Foo';
import Bar from './Bar';

const testContainer = new CompactIOC();


tape('Index', t => {
  t.equal(typeof CompactIOC, 'function', 'Default export is a function');

  t.ok(testContainer instanceof CompactIOC, 'Constructor works');

  testContainer.pub('Foo', Foo.factory);

  const foo = testContainer.get('Foo');

  t.ok(foo, 'Container resolves module');
  t.equals(foo.foo, 'foo', 'Module is what it must be');
  t.ok(testContainer.cache['Foo'], 'Container caches modules');

  testContainer.pub('Bar', Bar.factory);
  const bar = testContainer.get('Bar');
  t.ok(bar);
  t.equals(bar.bar, 'foobar');

  t.end();
});
