(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './skylight.js', './skylightstateless.js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./skylight'), require('./skylightstateless'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.skylight, global.skylightstateless);
    global.index = mod.exports;
  }
})(this, function (exports, _skylight, _skylightstateless) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_skylight).default;
    }
  });
  Object.defineProperty(exports, 'SkyLightStateless', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_skylightstateless).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});