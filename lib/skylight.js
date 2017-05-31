(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', './skylightstateless'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('./skylightstateless'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.skylightstateless);
    global.skylight = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _skylightstateless) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _skylightstateless2 = _interopRequireDefault(_skylightstateless);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  const isOpening = (s1, s2) => !s1.isVisible && s2.isVisible;
  const isClosing = (s1, s2) => s1.isVisible && !s2.isVisible;

  class SkyLight extends _react2.default.Component {

    constructor(props) {
      super(props);
      this.state = { isVisible: false };
    }

    componentWillUpdate(nextProps, nextState) {
      if (isOpening(this.state, nextState) && this.props.beforeOpen) {
        this.props.beforeOpen();
      }

      if (isClosing(this.state, nextState) && this.props.beforeClose) {
        this.props.beforeClose();
      }
    }

    componentDidUpdate(prevProps, prevState) {
      if (isOpening(prevState, this.state) && this.props.afterOpen) {
        this.props.afterOpen();
      }

      if (isClosing(prevState, this.state) && this.props.afterClose) {
        this.props.afterClose();
      }
    }

    show() {
      this.setState({ isVisible: true });
    }

    hide() {
      this.setState({ isVisible: false });
    }

    _onOverlayClicked() {
      if (this.props.hideOnOverlayClicked) {
        this.hide();
      }

      if (this.props.onOverlayClicked) {
        this.props.onOverlayClicked();
      }
    }

    render() {
      return _react2.default.createElement(_skylightstateless2.default, _extends({}, this.props, {
        isVisible: this.state.isVisible,
        onOverlayClicked: () => this._onOverlayClicked(),
        onCloseClicked: () => this.hide()
      }));
    }
  }

  exports.default = SkyLight;
  SkyLight.displayName = 'SkyLight';

  SkyLight.propTypes = _extends({}, _skylightstateless2.default.sharedPropTypes, {
    afterClose: _propTypes2.default.func,
    afterOpen: _propTypes2.default.func,
    beforeClose: _propTypes2.default.func,
    beforeOpen: _propTypes2.default.func,
    hideOnOverlayClicked: _propTypes2.default.bool
  });

  SkyLight.defaultProps = _extends({}, _skylightstateless2.default.defaultProps, {
    hideOnOverlayClicked: false
  });
});