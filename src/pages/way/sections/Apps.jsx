import React from 'Pages/Way/sections/node_modules/Pages/way/sections/node_modules/react';
import withStyles from 'Pages/Way/sections/node_modules/Pages/way/sections/node_modules/@material-ui/core/styles/withStyles';
import iphone from 'assets/img/sections/iphone.png';
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
              <h2 className={classes.title}>Super App for hassle-free living.</h2>
              <h4 className={classes.description}>The App shows you the location of the empty parking spot in your building, shows you the breakfast menu, tells you about the event that’s on for the day, let’s you navigate the resident traffic at the pool and the gym, shows you partnership discounts available and also introduces you to the other members of the Housr Community.</h4>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

export default withStyles(featuresStyle)(SectionFeatures);
