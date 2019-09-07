import React from 'Components/Pagination/node_modules/react';
// nodejs library to set properties for components
import PropTypes from 'Components/Pagination/node_modules/prop-types';
// nodejs library that concatenates classes
import classNames from 'Components/Pagination/node_modules/classnames';

// @material-ui/core components
import withStyles from 'Components/Pagination/node_modules/@material-ui/core/styles/withStyles';
import Button from 'Components/Pagination/node_modules/@material-ui/core/Button';

import paginationStyle from 'Components/Pagination/node_modules/assets/jss/material-kit-pro-react/components/paginationStyle';

function Pagination({ ...props }) {
  const { classes, pages, color, className } = props;
  const paginationClasses = classNames(classes.pagination, className);
  return (
    <ul className={paginationClasses}>
      {pages.map((prop, key) => {
        const paginationLink = classNames({
          [classes.paginationLink]: true,
          [classes[color]]: prop.active,
          [classes.disabled]: prop.disabled,
        });
        return (
          <li className={classes.paginationItem} key={key}>
            {prop.onClick !== undefined ? (
              <Button onClick={prop.onClick} className={paginationLink} disabled={prop.disabled}>
                {prop.text}
              </Button>
            ) : (
              <Button
                onClick={() => alert(`you've clicked ${prop.text}`)}
                className={paginationLink}
                disabled={prop.disabled}>
                {prop.text}
              </Button>
            )}
          </li>
        );
      })}
    </ul>
  );
}

Pagination.defaultProps = {
  color: 'primary',
};

Pagination.propTypes = {
  classes: PropTypes.object.isRequired,
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      active: PropTypes.bool,
      disabled: PropTypes.bool,
      text: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      onClick: PropTypes.func,
    })
  ).isRequired,
  color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger']),
  className: PropTypes.string,
};

export default withStyles(paginationStyle)(Pagination);
