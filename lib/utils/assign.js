(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.assign = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (target, ...args) {
    if (target === null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    const newTarget = target;
    for (let index = 0; index < args.length; index++) {
      const source = args[index];
      if (source !== null) {
        for (const key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            newTarget[key] = source[key];
          }
        }
      }
    }
    return newTarget;
  };
});