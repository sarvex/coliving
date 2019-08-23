import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import Header from '../components/Header/Header';
import HeaderLinks from '../components/Header/HeaderLinks';

import headersStyle from '../assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle';
import Logo from '../assets/img/housr.svg';

const SectionHeaders = ({ ...props }) => {
  const { ...rest } = props;
  return (
    // we've set the className to cd-section so we can make smooth scroll to it
    <div className="cd-section" {...rest}>
      <Header
        fixed
        brand={<img src={Logo} height={35} alt="Housr"/>}
        color="transparent"
        links={<HeaderLinks dropdownHoverColor="primary"/>}
        changeColorOnScroll={{
          height: 400,
          color: 'none',
          brand: <img src={Logo} height={35} alt="Housr" />
        }}
      />
    </div>
  );
};

export default withStyles(headersStyle)(SectionHeaders);
