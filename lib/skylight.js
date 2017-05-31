var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import PropTypes from 'prop-types';
import SkylightStateless from './skylightstateless';

const isOpening = (s1, s2) => !s1.isVisible && s2.isVisible;
const isClosing = (s1, s2) => s1.isVisible && !s2.isVisible;

export default class SkyLight extends React.Component {

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
    return React.createElement(SkylightStateless, _extends({}, this.props, {
      isVisible: this.state.isVisible,
      onOverlayClicked: () => this._onOverlayClicked(),
      onCloseClicked: () => this.hide()
    }));
  }
}

SkyLight.displayName = 'SkyLight';

SkyLight.propTypes = _extends({}, SkylightStateless.sharedPropTypes, {
  afterClose: PropTypes.func,
  afterOpen: PropTypes.func,
  beforeClose: PropTypes.func,
  beforeOpen: PropTypes.func,
  hideOnOverlayClicked: PropTypes.bool
});

SkyLight.defaultProps = _extends({}, SkylightStateless.defaultProps, {
  hideOnOverlayClicked: false
});