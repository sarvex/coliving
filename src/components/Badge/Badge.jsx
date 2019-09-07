import React from 'Components/Badge/node_modules/react';
import classNames from 'Components/Badge/node_modules/classnames';
import PropTypes from 'Components/Badge/node_modules/prop-types';

import withStyles from 'Components/Badge/node_modules/@material-ui/core/styles/withStyles';

import badgeStyle from '../../Assets/JSS/material-kit-pro-react/components/badgeStyle';

const Badge = ({ ...props }) => {
  const {
 classes, color, children, className
} = props;
  const badgeClasses = classNames({
    [classes.badge]: true,
    [classes[color]]: true,
    [className]: className !== undefined
  });
  return <span className={badgeClasses}>{children}</span>;
};

Badge.defaultProps = {
  color: 'gray'
};

Badge.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    'primary',
    'warning',
    'danger',
    'success',
    'info',
    'rose',
    'gray'
  ]),
  className: PropTypes.string,
  children: PropTypes.node
};

export default withStyles(badgeStyle)(Badge);
