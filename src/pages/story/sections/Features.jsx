import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import ChildFriendly from '@material-ui/icons/ChildFriendly';
import WatchLater from '@material-ui/icons/WatchLater';

import Extension from '@material-ui/icons/Extension';
import iphone from 'Assets/Images/sections/iphone.png';
import iphone2 from 'Assets/Images/sections/iphone2.png';
import GridContainer from 'Components/Grid/GridContainer';
import GridItem from 'Components/Grid/GridItem';
import featuresStyle from 'Assets/JSS/material-kit-pro-react/views/sectionsSections/featuresStyle';

import InfoArea from 'Components/InfoArea/InfoArea';

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
              <h2 className={classes.title}>We challenge ourselves, everyday.</h2>
              <InfoArea
                className={classes.infoArea}
                icon={Extension}
                title='We are in a perpetual beta phase.'
                description='Constantly improving, innovating, rethinking. We question what we do and how we do it and how we can make it better.'
                iconColor='primary'
              />
              <InfoArea
                className={classes.infoArea}
                icon={ChildFriendly}
                title='We like to think outside the circle.'
                description='Boxes are so yesterday. We like circles. And more often than not, thinking outside it makes way for creativity.'
                iconColor='primary'
              />
              <InfoArea
                className={classes.infoArea}
                icon={WatchLater}
                title='Re-thinking the simple things excite us.'
                description='The more we re-think of doing something that’s been done before, the better we do it the next time.'
                iconColor='primary'
              />
            </GridItem>
          </GridContainer>
        </div>
        <div className={classes.features3}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <h2 className={classes.title}>We are Hospitable.</h2>
              <InfoArea
                className={classes.infoArea}
                icon={Extension}
                title='Welcome Home.'
                description='The moment you use Material Kit, you know you’ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before.'
                iconColor='primary'
              />
              <InfoArea
                className={classes.infoArea}
                icon={ChildFriendly}
                title='Always at your Service.'
                description='We take care of all the boring stuff like maintenance, safety, security, privacy, etc. Right from welcome parties to cleaning up after you’re gone, we are always at your service.'
                iconColor='primary'
              />
              <InfoArea
                className={classes.infoArea}
                icon={WatchLater}
                title='We give you space.'
                description='We go out of our way to provide a comfortable, secure, safe and fun environment. We respect privacy, space and personal time.'
                iconColor='primary'
              />
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
