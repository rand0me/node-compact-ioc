//------------------------------------------------------------------------------
// Name: src/CompactIOC.js
// Author: rand0me <not.randome@gmail.com>
// Timestamp: 2016-10-04T12:58:49.876Z
// Description:
//    Compact Inversion of Control implementation
//------------------------------------------------------------------------------

export default class CompactIOC {
  constructor() {
    this.factories = {};
    this.cache = {};
  }
  pub(name, factory) {
    this.factories[name] = factory;
  }
  unpub(name) {
    delete this.factories[name];
    delete this.cache[name];
  }
  get(name, mocks = {}) {
    const factory = this.factories[name];

    if (!factory) return false;

    if (!Array.isArray(factory.deps)) return this.cache[name] = factory.call({});

    if (this.cache[name]) return this.cache[name];
    else return this.cache[name] = factory.apply({}, factory.deps.map((dep) => mocks[dep] || this.cache[dep] || this.get(dep, mocks)));
  }
  flush(name) {
    delete this.cache[name];
  }
}
