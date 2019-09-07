import React from 'Components/Typography/node_modules/react';
// nodejs library to set properties for components
import PropTypes from 'Components/Typography/node_modules/prop-types';
// @material-ui/core components
import withStyles from 'Components/Typography/node_modules/@material-ui/core/styles/withStyles';
// core components
import typographyStyle from 'Components/Typography/node_modules/assets/jss/material-kit-pro-react/components/typographyStyle';

function Rose({ ...props }) {
  const { classes, children } = props;
  return <div className={`${classes.defaultFontStyle} ${classes.roseText}`}>{children}</div>;
}

Rose.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
};

export default withStyles(typographyStyle)(Rose);
