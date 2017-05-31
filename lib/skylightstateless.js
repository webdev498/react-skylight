(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', './styles', './utils/assign'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('./styles'), require('./utils/assign'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.styles, global.assign);
    global.skylightstateless = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _styles, _assign) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _styles2 = _interopRequireDefault(_styles);

  var _assign2 = _interopRequireDefault(_assign);

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

  class SkyLightStateless extends _react2.default.Component {

    onOverlayClicked() {
      if (this.props.onOverlayClicked) {
        this.props.onOverlayClicked();
      }
    }

    onCloseClicked() {
      if (this.props.onCloseClicked) {
        this.props.onCloseClicked();
      }
    }

    render() {
      const mergeStyles = key => (0, _assign2.default)({}, _styles2.default[key], this.props[key]);
      const { isVisible } = this.props;
      const dialogStyles = mergeStyles('dialogStyles');
      const overlayStyles = mergeStyles('overlayStyles');
      const closeButtonStyle = mergeStyles('closeButtonStyle');
      const titleStyle = mergeStyles('titleStyle');
      overlayStyles.display = dialogStyles.display = 'block';

      let overlay;
      if (this.props.showOverlay) {
        overlay = _react2.default.createElement('div', { className: 'skylight-overlay',
          onClick: () => this.onOverlayClicked(),
          style: overlayStyles
        });
      }

      return isVisible ? _react2.default.createElement(
        'section',
        { className: 'skylight-wrapper' },
        overlay,
        _react2.default.createElement(
          'div',
          { className: 'skylight-dialog', style: dialogStyles },
          _react2.default.createElement(
            'a',
            { role: 'button', className: 'skylight-close-button',
              onClick: () => this.onCloseClicked(),
              style: closeButtonStyle
            },
            '\xD7'
          ),
          _react2.default.createElement(
            'h2',
            { style: titleStyle },
            this.props.title
          ),
          this.props.children
        )
      ) : _react2.default.createElement('div', null);
    }
  }

  exports.default = SkyLightStateless;
  SkyLightStateless.displayName = 'SkyLightStateless';

  SkyLightStateless.sharedPropTypes = {
    closeButtonStyle: _propTypes2.default.object,
    dialogStyles: _propTypes2.default.object,
    onCloseClicked: _propTypes2.default.func,
    onOverlayClicked: _propTypes2.default.func,
    overlayStyles: _propTypes2.default.object,
    showOverlay: _propTypes2.default.bool,
    title: _propTypes2.default.string,
    titleStyle: _propTypes2.default.object
  };

  SkyLightStateless.propTypes = _extends({}, SkyLightStateless.sharedPropTypes, {
    isVisible: _propTypes2.default.bool
  });

  SkyLightStateless.defaultProps = {
    title: '',
    showOverlay: true,
    overlayStyles: _styles2.default.overlayStyles,
    dialogStyles: _styles2.default.dialogStyles,
    closeButtonStyle: _styles2.default.closeButtonStyle
  };
});