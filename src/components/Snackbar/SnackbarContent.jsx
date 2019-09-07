import React from 'Components/Snackbar/node_modules/react';
// nodejs library to set properties for components
import PropTypes from 'Components/Snackbar/node_modules/prop-types';
// @material-ui/core components
import withStyles from 'Components/Snackbar/node_modules/@material-ui/core/styles/withStyles';
import Snack from 'Components/Snackbar/node_modules/@material-ui/core/SnackbarContent';
import IconButton from 'Components/Snackbar/node_modules/@material-ui/core/IconButton';
import Icon from 'Components/Snackbar/node_modules/@material-ui/core/Icon';
// @material-ui/icons
import Close from 'Components/Snackbar/node_modules/@material-ui/icons/Close';
// core components

import snackbarContentStyle from 'Components/Snackbar/node_modules/assets/jss/material-kit-pro-react/components/snackbarContentStyle';

class SnackbarContent extends React.Component {
  constructor(props) {
    super(props);
    this.closeAlert = this.closeAlert.bind(this);
    const { classes, message, color, close, icon } = props;
    let action = [];
    if (close !== undefined) {
      action = [
        <IconButton
          className={classes.iconButton}
          key='close'
          aria-label='Close'
          color='inherit'
          onClick={this.closeAlert}>
          <Close className={classes.close} />
        </IconButton>,
      ];
    }
    let snackIcon = null;
    switch (typeof icon) {
      case 'object':
        snackIcon = <props.icon className={classes.icon} />;
        break;
      case 'string':
        snackIcon = <Icon className={classes.icon}>{props.icon}</Icon>;
        break;
      default:
        snackIcon = null;
        break;
    }
    this.state = {
      alert: (
        <Snack
          message={
            <div>
              {snackIcon}
              {message}
              {close !== undefined ? action : null}
            </div>
          }
          classes={{
            root: `${classes.root} ${classes[color]}`,
            message: `${classes.message} ${classes.container}`,
          }}
        />
      ),
    };
  }

  closeAlert() {
    this.setState({ alert: null });
  }

  render() {
    return this.state.alert;
  }
}

SnackbarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  message: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['info', 'success', 'warning', 'danger', 'primary']),
  close: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

export default withStyles(snackbarContentStyle)(SnackbarContent);
