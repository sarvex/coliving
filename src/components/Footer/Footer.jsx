import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';

import footerStyle from 'Assets/JSS/material-kit-pro-react/components/footerStyle';

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
