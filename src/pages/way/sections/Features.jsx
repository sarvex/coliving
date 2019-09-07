import React from 'Pages/Way/sections/node_modules/Pages/way/sections/node_modules/react';
import withStyles from 'Pages/Way/sections/node_modules/Pages/way/sections/node_modules/@material-ui/core/styles/withStyles';
import iphone from 'Assets/Images/sections/iphone.png';
import iphone2 from 'Assets/Images/sections/iphone2.png';
import GridContainer from '../../../Components/Grid/GridContainer';
import GridItem from '../../../Components/Grid/GridItem';
import featuresStyle from '../../../Assets/JSS/material-kit-pro-react/views/sectionsSections/featuresStyle';


function SectionFeatures({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className='cd-section' {...rest}>
      <div className={classes.container}>
        <div className={classes.features3}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <div className={classes.phoneContainer}>
                <img src={iphone} alt='...'/>
              </div>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <h2 className={classes.title}>You're in safe hands.</h2>
              <h4 className={classes.description}>Biometric ins and outs, facial recognition, 24x7 concierge, guards and wardens in each building are some of the things that make Coliving a safe place to live. Separate floors for women, men and unisex living allow you to choose a space where you feel most secure.</h4>
            </GridItem>
          </GridContainer>
        </div>
        <div className={classes.features3}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
                <h2 className={classes.title}>Ecosystem of service partners to make life easier</h2>
                <h4 className={classes.description}>Coliving gives you access to exclusive discounts and offers with our partner companies. Whether it’s ride-hailing, food delivery, merchandise, salon and grooming services, restaurants and pubs, Housr residents get offers that are exclusively created keeping their needs in mind.
                </h4>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <div className={classes.phoneContainer}>
                <img src={iphone2} alt='...'/>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

export default withStyles(featuresStyle)(SectionFeatures);
