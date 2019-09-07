import React from 'Components/CustomButtons/node_modules/react';
// nodejs library that concatenates classes
import classNames from 'Components/CustomButtons/node_modules/classnames';
// nodejs library to set properties for components
import PropTypes from 'Components/CustomButtons/node_modules/prop-types';

// @material-ui/core components
import withStyles from 'Components/CustomButtons/node_modules/@material-ui/core/styles/withStyles';
import Button from 'Components/CustomButtons/node_modules/@material-ui/core/Button';

import buttonStyle from '../../Assets/JSS/material-kit-pro-react/components/buttonStyle';

const RegularButton = React.forwardRef((props, ref) => {
  const {
    classes,
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    fileButton,
    className,
    ...rest
  } = props;
  const btnClasses = classNames({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [classes.fileButton]: fileButton,
    [className]: className
  });
  return (
    <Button {...rest} ref={ref} className={btnClasses}>
      {children}
    </Button>
  );
});

RegularButton.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'danger',
    'rose',
    'white',
    'twitter',
    'facebook',
    'google',
    'linkedin',
    'pinterest',
    'youtube',
    'tumblr',
    'github',
    'behance',
    'dribbble',
    'reddit',
    'instagram',
    'transparent'
  ]),
  size: PropTypes.oneOf(['sm', 'lg']),
  simple: PropTypes.bool,
  round: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  link: PropTypes.bool,
  justIcon: PropTypes.bool,
  fileButton: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
};

export default withStyles(buttonStyle)(RegularButton);
