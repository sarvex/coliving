import React from 'Components/Grid/node_modules/react';
// nodejs library to set properties for components
import PropTypes from 'Components/Grid/node_modules/prop-types';
// @material-ui/core components
import withStyles from 'Components/Grid/node_modules/@material-ui/core/styles/withStyles';
import Grid from 'Components/Grid/node_modules/@material-ui/core/Grid';

const style = {
  grid: {
    position: 'relative',
    width: '100%',
    minHeight: '1px',
    paddingRight: '15px',
    paddingLeft: '15px',
    /* flexBasis: "auto" */
  },
};

function GridItem({ ...props }) {
  const { classes, children, className, ...rest } = props;
  return (
    <Grid item {...rest} className={`${classes.grid} ${className}`}>
      {children}
    </Grid>
  );
}

GridItem.defaultProps = {
  className: '',
};

GridItem.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default withStyles(style)(GridItem);
