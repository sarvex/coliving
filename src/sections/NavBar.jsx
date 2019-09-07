import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import Header from 'Components/Header/Header';
import HeaderLinks from 'Components/Header/HeaderLinks';

import headersStyle from 'Assets/JSS/material-kit-pro-react/views/sectionsSections/headersStyle';

const SectionHeaders = ({ ...props }) => {
  const { ...rest } = props;
  return (
    // we've set the className to cd-section so we can make smooth scroll to it
    <div className="cd-section" {...rest}>
      <Header
        fixed
        brand="Coliving.ai"
        color="transparent"
        links={<HeaderLinks dropdownHoverColor="primary"/>}
        changeColorOnScroll={{
          height: 400,
          color: 'none',
          brand: "Coliving.ai"
        }}
      />
    </div>
  );
};

export default withStyles(headersStyle)(SectionHeaders);
