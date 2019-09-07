import React from 'Components/Footer/node_modules/react';
import PropTypes from 'Components/Footer/node_modules/prop-types';
import classNames from 'Components/Footer/node_modules/classnames';
import withStyles from 'Components/Footer/node_modules/@material-ui/core/styles/withStyles';

import footerStyle from 'Components/Footer/node_modules/assets/jss/material-kit-pro-react/components/footerStyle';

function Footer(props) {
  const { children, content, classes, theme, big, className } = props;
  const themeType = !(theme === 'transparent' || theme === undefined);
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes[theme]]: themeType,
    [classes.big]: big || children !== undefined,
    [className]: className !== undefined,
  });
  const aClasses = classNames({
    [classes.a]: true,
  });

  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        {children !== undefined ? (
          <div>
            <div className={classes.content}>{children}</div>
            <hr />
          </div>
        ) : (
          ' '
        )}
        {content}
        <div className={classes.clearFix} />
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.oneOf(['dark', 'white', 'transparent']),
  big: PropTypes.bool,
  content: PropTypes.node.isRequired,
};

export default withStyles(footerStyle)(Footer);
