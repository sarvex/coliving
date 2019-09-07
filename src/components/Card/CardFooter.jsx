import React from 'Components/Card/node_modules/react';
// nodejs library that concatenates classes
import classNames from 'Components/Card/node_modules/classnames';
// nodejs library to set properties for components
import PropTypes from 'Components/Card/node_modules/prop-types';
// @material-ui/core components
import withStyles from 'Components/Card/node_modules/@material-ui/core/styles/withStyles';
// @material-ui/icons

// core components
import cardFooterStyle from '../../Assets/JSS/material-kit-pro-react/components/cardFooterStyle';

function CardFooter({ ...props }) {
  const {
    classes,
    className,
    children,
    plain,
    profile,
    pricing,
    testimonial,
    ...rest
  } = props;
  const cardFooterClasses = classNames({
    [classes.cardFooter]: true,
    [classes.cardFooterPlain]: plain,
    [classes.cardFooterProfile]: profile || testimonial,
    [classes.cardFooterPricing]: pricing,
    [classes.cardFooterTestimonial]: testimonial,
    [className]: className !== undefined
  });
  return (
    <div className={cardFooterClasses} {...rest}>
      {children}
    </div>
  );
}

CardFooter.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  pricing: PropTypes.bool,
  testimonial: PropTypes.bool,
  children: PropTypes.node
};

export default withStyles(cardFooterStyle)(CardFooter);
