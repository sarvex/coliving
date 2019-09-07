import React from 'Components/Card/node_modules/react';
// nodejs library that concatenates classes
import classNames from 'Components/Card/node_modules/classnames';
// nodejs library to set properties for components
import PropTypes from 'Components/Card/node_modules/prop-types';
// @material-ui/core components
import withStyles from 'Components/Card/node_modules/@material-ui/core/styles/withStyles';
// @material-ui/icons

// core components
import cardBodyStyle from '../../Assets/JSS/material-kit-pro-react/components/cardBodyStyle';

const CardBody = ({ ...props }) => {
  const {
    classes,
    className,
    children,
    background,
    plain,
    formHorizontal,
    pricing,
    signup,
    color,
    ...rest
  } = props;
  const cardBodyClasses = classNames({
    [classes.cardBody]: true,
    [classes.cardBodyBackground]: background,
    [classes.cardBodyPlain]: plain,
    [classes.cardBodyFormHorizontal]: formHorizontal,
    [classes.cardPricing]: pricing,
    [classes.cardSignup]: signup,
    [classes.cardBodyColor]: color,
    [className]: className !== undefined
  });
  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  );
}

CardBody.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  background: PropTypes.bool,
  plain: PropTypes.bool,
  formHorizontal: PropTypes.bool,
  pricing: PropTypes.bool,
  signup: PropTypes.bool,
  color: PropTypes.bool,
  children: PropTypes.node
};

export default withStyles(cardBodyStyle)(CardBody);
