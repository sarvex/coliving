import React from 'Components/CustomLinearProgress/node_modules/react';
// nodejs library to set properties for components
import PropTypes from 'Components/CustomLinearProgress/node_modules/prop-types';

// @material-ui/core components
import withStyles from 'Components/CustomLinearProgress/node_modules/@material-ui/core/styles/withStyles';
import LinearProgress from 'Components/CustomLinearProgress/node_modules/@material-ui/core/LinearProgress';

import customLinearProgressStyle from '../../Assets/JSS/material-kit-pro-react/components/customLinearProgressStyle';

function CustomLinearProgress({ ...props }) {
  const { classes, color, ...rest } = props;
  return (
    <LinearProgress
      {...rest}
      classes={{
        root: `${classes.root} ${classes[`${color}Background`]}`,
        bar: `${classes.bar} ${classes[color]}`
      }}
    />
  );
}

CustomLinearProgress.defaultProps = {
  color: 'gray'
};

CustomLinearProgress.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    'primary',
    'warning',
    'danger',
    'success',
    'info',
    'rose',
    'gray'
  ])
};

export default withStyles(customLinearProgressStyle)(CustomLinearProgress);
