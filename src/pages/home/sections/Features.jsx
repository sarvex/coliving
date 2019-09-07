import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Code from '@material-ui/icons/PlaylistAddCheck';
import FormatPaint from '@material-ui/icons/EventSeat';
import Dashboard from '@material-ui/icons/Wifi';
import Living from '@material-ui/icons/Business';
import ViewCarousel from '@material-ui/icons/Weekend';
import AccessTime from '@material-ui/icons/AccessibilityNew';
import AttachMoney from '@material-ui/icons/LocalLaundryService';
import Safe from '@material-ui/icons/Fingerprint';
import GridContainer from 'Components/Grid/GridContainer';
import GridItem from 'Components/Grid/GridItem';
import InfoArea from 'Components/InfoArea/InfoArea';

import featuresStyle from 'Assets/JSS/material-kit-pro-react/views/sectionsSections/featuresStyle';
import bg9 from 'Assets/Images/bg9.jpg';

const SectionFeatures = ({ ...props }) => {
  const { classes, ...rest } = props;
  return (
    <div className="cd-section" {...rest}>
      <div
        className={classes.features5}
        style={{ backgroundImage: `url(${bg9})` }}
      >
        <GridContainer>
          <GridItem xs={12} sm={8} md={8} className={`${classes.mlAuto} ${classes.mrAuto} ${classes.textCenter}`}>
            <h2 className={classes.title}>
              Everything you need to live better
            </h2>
          </GridItem>
          <div className={classes.container}>
            <GridContainer className={classes.gridContainer}>
              <GridItem xs={12} sm={3} md={2} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={Code}
                  title="All Inclusive Rent"
                  description="All Inclusive Rent"
                />
              </GridItem>
              <GridItem xs={12} sm={3} md={2} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={FormatPaint}
                  title="Fully Furnished"
                  description="Fully Furnished"
                />
              </GridItem>
              <GridItem xs={12} sm={3} md={2} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={Dashboard}
                  title="Superfast WiFi"
                  description="Superfast WiFi"
                />
              </GridItem>
              <GridItem xs={12} sm={3} md={2} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={Living}
                  title="Smart Living"
                  description="Smart Living"
                />
              </GridItem>
              <GridItem xs={12} sm={3} md={2} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={ViewCarousel}
                  title="Games Room"
                  description="Games Room"
                />
              </GridItem>
              <GridItem xs={12} sm={3} md={2} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={AccessTime}
                  title="Gym"
                  description="Gym"
                />
              </GridItem>
            </GridContainer>
            <GridContainer className={classes.gridContainer}>
              <GridItem xs={12} sm={3} md={2} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={ViewCarousel}
                  title="Hangout Lounges"
                  description="Hangout Lounges"
                />
              </GridItem>
              <GridItem xs={12} sm={3} md={2} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={AccessTime}
                  title="Housekeeping"
                  description="Housekeeping"
                />
              </GridItem>
              <GridItem xs={12} sm={3} md={2} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={AttachMoney}
                  title="Laundry Facilities"
                  description="Laundry Facilities"
                />
              </GridItem>
              <GridItem xs={12} sm={3} md={2} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={Safe}
                  title="Safe & Secure"
                  description="Safe & Secure"
                />
              </GridItem>
              <GridItem xs={12} sm={3} md={2} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={AttachMoney}
                  title="Netflix & Prime"
                  description="Netflix & Prime Video"
                />
              </GridItem>
              <GridItem xs={12} sm={3} md={2} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={AttachMoney}
                  title="24X7 Support"
                  description="24X7 Support"
                />
              </GridItem>
            </GridContainer>
          </div>
        </GridContainer>
      </div>
    </div>
  );
};

export default withStyles(featuresStyle)(SectionFeatures);
