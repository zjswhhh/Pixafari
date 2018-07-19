import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Button.css';

class Button extends Component {
  render() {
    return <button className="button">{this.props.text}</button>;
  }
}

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
