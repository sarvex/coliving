import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// core components
import typographyStyle from 'Assets/JSS/material-kit-pro-react/components/typographyStyle';

function Info({ ...props }) {
  const { classes, children } = props;
  return <div className={`${classes.defaultFontStyle} ${classes.infoText}`}>{children}</div>;
}

Info.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
};

export default withStyles(typographyStyle)(Info);
