import React from 'Components/Header/node_modules/react';
import PropTypes from 'Components/Header/node_modules/prop-types';
import { Link } from 'Components/Header/node_modules/react-router-dom';
import withStyles from 'Components/Header/node_modules/@material-ui/core/styles/withStyles';
import List from 'Components/Header/node_modules/@material-ui/core/List';
import ListItem from 'Components/Header/node_modules/@material-ui/core/ListItem';
import Apps from 'Components/Header/node_modules/@material-ui/icons/Apps';
import ShoppingCart from 'Components/Header/node_modules/@material-ui/icons/Call';
import ViewDay from 'Components/Header/node_modules/@material-ui/icons/ViewDay';
import ViewCarousel from 'Components/Header/node_modules/@material-ui/icons/ViewCarousel';

import CustomDropdown from '../CustomDropdown/CustomDropdown';
import Button from '../CustomButtons/Button';

import headerLinksStyle from '../../Assets/JSS/material-kit-pro-react/components/headerLinksStyle';

function HeaderLinks({ ...props }) {
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const smoothScroll = (e, target) => {
    if (window.location.pathname === '/sections') {
      const isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        const targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
      }
    }
  };
  const scrollGo = (element, to, duration) => {
    const start = element.scrollTop;

    const change = to - start;

    let currentTime = 0;

    const increment = 20;

    var animateScroll = function() {
      currentTime += increment;
      const val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };
  const onClickSections = {};

  const { classes, dropdownHoverColor } = props;
  return (
    <List className={`${classes.list} ${classes.mlAuto}`}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText='Locations'
          buttonProps={{
            className: classes.navLink,
            color: 'transparent',
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to='/gurugram' className={classes.dropdownLink}>
              <Apps className={classes.dropdownIcons} /> Gurugram
            </Link>,
            <Link to='/noida' className={classes.dropdownLink}>
              <Apps className={classes.dropdownIcons} /> Noida
            </Link>,
            <Link to='/kota' className={classes.dropdownLink}>
              <Apps className={classes.dropdownIcons} /> Kota
            </Link>,
            <Link to='/mumbai' className={classes.dropdownLink}>
              <Apps className={classes.dropdownIcons} /> Mumbai
            </Link>,
            <Link to='/bengaluru' className={classes.dropdownLink}>
              <Apps className={classes.dropdownIcons} /> Bengaluru
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText='About'
          buttonProps={{
            className: classes.navLink,
            color: 'transparent',
          }}
          buttonIcon={ViewDay}
          dropdownList={[
            <Link to='/story' className={classes.dropdownLink}>
              <ViewDay className={classes.dropdownIcons} /> Story
            </Link>,
            <Link to='/way' className={classes.dropdownLink}>
              <ViewDay className={classes.dropdownIcons} /> Way
            </Link>,
            <Link to='/community' className={classes.dropdownLink}>
              <ViewDay className={classes.dropdownIcons} /> Community
            </Link>,
            <Link to='/events' className={classes.dropdownLink}>
              <ViewDay className={classes.dropdownIcons} /> Events
            </Link>,
            <Link to='/credits' className={classes.dropdownLink}>
              <ViewDay className={classes.dropdownIcons} /> Credits
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText='Contact'
          buttonProps={{
            className: classes.navLink,
            color: 'transparent',
          }}
          buttonIcon={ViewCarousel}
          dropdownList={[
            <Link to='/careers' className={classes.dropdownLink}>
              <ViewCarousel className={classes.dropdownIcons} /> Careers
            </Link>,
            <Link to='/blog' className={classes.dropdownLink}>
              <ViewCarousel className={classes.dropdownIcons} /> Blog
            </Link>,
            <Link to='/tlog' className={classes.dropdownLink}>
              <ViewCarousel className={classes.dropdownIcons} /> Tlog
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href='/call' color={window.innerWidth < 960 ? 'info' : 'primary'} className={classes.navButton} round>
          <ShoppingCart className={classes.icons} /> Request Call
        </Button>
      </ListItem>
    </List>
  );
}

HeaderLinks.defaultProps = {
  hoverColor: 'primary',
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf(['dark', 'primary', 'info', 'success', 'warning', 'danger', 'rose']),
};

export default withStyles(headerLinksStyle)(HeaderLinks);
