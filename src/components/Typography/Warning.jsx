import React from 'Components/Typography/node_modules/react';
// nodejs library to set properties for components
import PropTypes from 'Components/Typography/node_modules/prop-types';
// @material-ui/core components
import withStyles from 'Components/Typography/node_modules/@material-ui/core/styles/withStyles';
// core components
import typographyStyle from 'Components/Typography/node_modules/assets/jss/material-kit-pro-react/components/typographyStyle';

const Warning = ({ ...props }) => {
  const { classes, children } = props;
  return <div className={`${classes.defaultFontStyle} ${classes.warningText}`}>{children}</div>;
};

Warning.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
};

export default withStyles(typographyStyle)(Warning);
