"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//------------------------------------------------------------------------------
// Name: src/CompactIOC.js
// Author: rand0me <not.randome@gmail.com>
// Timestamp: 2016-10-04T12:58:49.876Z
// Description:
//    Compact Inversion of Control implementation
//------------------------------------------------------------------------------

var CompactIOC = function () {
  function CompactIOC() {
    _classCallCheck(this, CompactIOC);

    this.factories = {};
    this.cache = {};
  }

  _createClass(CompactIOC, [{
    key: "pub",
    value: function pub(name, factory) {
      this.factories[name] = factory;
    }
  }, {
    key: "unpub",
    value: function unpub(name) {
      delete this.factories[name];
      delete this.cache[name];
    }
  }, {
    key: "get",
    value: function get(name) {
      var _this = this;

      var mocks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var factory = this.factories[name];

      if (!factory) return false;

      if (!Array.isArray(factory.deps)) return this.cache[name] = factory.call({});

      if (this.cache[name]) return this.cache[name];else return this.cache[name] = factory.apply({}, factory.deps.map(function (dep) {
        return mocks[dep] || _this.cache[dep] || _this.get(dep, mocks);
      }));
    }
  }, {
    key: "flush",
    value: function flush(name) {
      delete this.cache[name];
    }
  }]);

  return CompactIOC;
}();

exports.default = CompactIOC;
module.exports = exports["default"];