import React from 'Components/Card/node_modules/react';
// nodejs library that concatenates classes
import classNames from 'Components/Card/node_modules/classnames';
// nodejs library to set properties for components
import PropTypes from 'Components/Card/node_modules/prop-types';
// @material-ui/core components
import withStyles from 'Components/Card/node_modules/@material-ui/core/styles/withStyles';
// @material-ui/icons

// core components
import cardHeaderStyle from '../../Assets/JSS/material-kit-pro-react/components/cardHeaderStyle';

function CardHeader({ ...props }) {
  const {
    classes,
    className,
    children,
    color,
    plain,
    image,
    contact,
    signup,
    noShadow,
    ...rest
  } = props;
  const cardHeaderClasses = classNames({
    [classes.cardHeader]: true,
    [classes[`${color}CardHeader`]]: color,
    [classes.cardHeaderPlain]: plain,
    [classes.cardHeaderImage]: image,
    [classes.cardHeaderContact]: contact,
    [classes.cardHeaderSignup]: signup,
    [classes.noShadow]: noShadow,
    [className]: className !== undefined
  });
  return (
    <div className={cardHeaderClasses} {...rest}>
      {children}
    </div>
  );
}

CardHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'warning',
    'success',
    'danger',
    'info',
    'primary',
    'rose'
  ]),
  plain: PropTypes.bool,
  image: PropTypes.bool,
  contact: PropTypes.bool,
  signup: PropTypes.bool,
  noShadow: PropTypes.bool,
  children: PropTypes.node
};

export default withStyles(cardHeaderStyle)(CardHeader);
