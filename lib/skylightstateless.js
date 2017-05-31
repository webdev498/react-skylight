var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import assign from './utils/assign';

export default class SkyLightStateless extends React.Component {

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
    const mergeStyles = key => assign({}, styles[key], this.props[key]);
    const { isVisible } = this.props;
    const dialogStyles = mergeStyles('dialogStyles');
    const overlayStyles = mergeStyles('overlayStyles');
    const closeButtonStyle = mergeStyles('closeButtonStyle');
    const titleStyle = mergeStyles('titleStyle');
    overlayStyles.display = dialogStyles.display = 'block';

    let overlay;
    if (this.props.showOverlay) {
      overlay = React.createElement('div', { className: 'skylight-overlay',
        onClick: () => this.onOverlayClicked(),
        style: overlayStyles
      });
    }

    return isVisible ? React.createElement(
      'section',
      { className: 'skylight-wrapper' },
      overlay,
      React.createElement(
        'div',
        { className: 'skylight-dialog', style: dialogStyles },
        React.createElement(
          'a',
          { role: 'button', className: 'skylight-close-button',
            onClick: () => this.onCloseClicked(),
            style: closeButtonStyle
          },
          '\xD7'
        ),
        React.createElement(
          'h2',
          { style: titleStyle },
          this.props.title
        ),
        this.props.children
      )
    ) : React.createElement('div', null);
  }
}

SkyLightStateless.displayName = 'SkyLightStateless';

SkyLightStateless.sharedPropTypes = {
  closeButtonStyle: PropTypes.object,
  dialogStyles: PropTypes.object,
  onCloseClicked: PropTypes.func,
  onOverlayClicked: PropTypes.func,
  overlayStyles: PropTypes.object,
  showOverlay: PropTypes.bool,
  title: PropTypes.string,
  titleStyle: PropTypes.object
};

SkyLightStateless.propTypes = _extends({}, SkyLightStateless.sharedPropTypes, {
  isVisible: PropTypes.bool
});

SkyLightStateless.defaultProps = {
  title: '',
  showOverlay: true,
  overlayStyles: styles.overlayStyles,
  dialogStyles: styles.dialogStyles,
  closeButtonStyle: styles.closeButtonStyle
};