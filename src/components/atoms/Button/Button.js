import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Button.module.scss';

const Button = ({
  children, type, classes, ...props
}) => (
  // eslint-disable-next-line react/button-has-type
  <button className={classNames(styles.Button, classes.root)} data-testid="Button" type={type} {...props}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  type: PropTypes.string,
  classes: PropTypes.shape({
    root: PropTypes.string,
  }),
};

Button.defaultProps = {
  type: 'button',
  classes: {},
};

export default Button;
