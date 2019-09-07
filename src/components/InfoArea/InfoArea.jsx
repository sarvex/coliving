import React from "Components/InfoArea/node_modules/react";
// nodejs library to set properties for components
import PropTypes from "Components/InfoArea/node_modules/prop-types";
// nodejs library that concatenates classes
import classNames from "Components/InfoArea/node_modules/classnames";
// @material-ui/core components
import withStyles from "Components/InfoArea/node_modules/@material-ui/core/styles/withStyles";
import Icon from "Components/InfoArea/node_modules/@material-ui/core/Icon";

import infoStyle from "Components/InfoArea/node_modules/assets/jss/material-kit-pro-react/components/infoStyle";

function InfoArea({ ...props }) {
  const { classes, title, description, iconColor, vertical, className } = props;
  const iconWrapper = classNames({
    [classes.iconWrapper]: true,
    [classes[iconColor]]: true,
    [classes.iconWrapperVertical]: vertical
  });
  const iconClasses = classNames({
    [classes.icon]: true,
    [classes.iconVertical]: vertical
  });
  const infoAreaClasses = classNames({
    [classes.infoArea]: true,
    [className]: className !== undefined
  });
  let icon = null;
  switch (typeof props.icon) {
    case "string":
      icon = <Icon className={iconClasses}>{props.icon}</Icon>;
      break;
    default:
      icon = <props.icon className={iconClasses} />;
      break;
  }
  return (
    <div className={infoAreaClasses}>
      <div className={iconWrapper}>{icon}</div>
      <div className={classes.descriptionWrapper}>
        <h4 className={classes.title}>{title}</h4>
        <div className={classes.description}>{description}</div>
      </div>
    </div>
  );
}

InfoArea.defaultProps = {
  iconColor: "gray"
};

InfoArea.propTypes = {
  classes: PropTypes.object.isRequired,
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node,
  iconColor: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  vertical: PropTypes.bool,
  className: PropTypes.string
};

export default withStyles(infoStyle)(InfoArea);
