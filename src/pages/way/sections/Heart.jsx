import React from 'react';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import Code from '@material-ui/icons/PlaylistAddCheck';
import FormatPaint from '@material-ui/icons/EventSeat';
import Dashboard from '@material-ui/icons/Wifi';
import Power from '@material-ui/icons/Power';
import ViewCarousel from '@material-ui/icons/Tv';
import AccessTime from '@material-ui/icons/AccessibilityNew';
import AttachMoney from '@material-ui/icons/LocalLaundryService';
import Safe from '@material-ui/icons/Fingerprint';
import GridContainer from 'Components/Grid/GridContainer';
import GridItem from 'Components/Grid/GridItem';
import InfoArea from 'Components/InfoArea/InfoArea';
import Button from 'Components/CustomButtons/Button';

import featuresStyle from 'Assets/JSS/material-kit-pro-react/views/sectionsSections/featuresStyle';
import bg9 from 'Assets/Images/bg9.jpg';

function SectionFeatures({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className="cd-section" {...rest}>
      <div
        className={classes.features5}
        style={{ backgroundImage: `url(${bg9})` }}
      >
        <GridContainer>
          <GridItem xs={12} sm={8} md={8} className={`${classes.mlAuto} ${classes.mrAuto} ${classes.textCenter}`}>
            <h2 className={classes.title}>The Heart</h2>
          </GridItem>
          <div className={classes.container}>
            <GridContainer className={classes.gridContainer}>
              <GridItem xs={12} sm={3} md={2} className={classes.gridItem}>
                <InfoArea vertical className={classes.infoArea5} icon={Code} title="All Inclusive Rent" iconColor="info"/>
              </GridItem>
              <GridItem xs={12} sm={3} md={2} className={classes.gridItem}>
                <InfoArea vertical className={classes.infoArea5} icon={FormatPaint} title="Fully Furnished" iconColor="danger"/>
              </GridItem>
              <GridItem xs={12} sm={3} md={2} className={classes.gridItem}>
                <InfoArea vertical className={classes.infoArea5} icon={Dashboard} title="Superfast WiFi" iconColor="primary"/>
              </GridItem>
              <GridItem xs={12} sm={3} md={2} className={classes.gridItem}>
                <InfoArea vertical className={classes.infoArea5} icon={Power} title="Full Power Backup" iconColor="primary"/>
              </GridItem>
              <GridItem xs={12} sm={3} md={2} className={classes.gridItem}>
                <InfoArea vertical className={classes.infoArea5} icon={ViewCarousel} title="Games Room"/>
              </GridItem>
              <GridItem xs={12} sm={3} md={2} className={classes.gridItem}>
                <InfoArea vertical className={classes.infoArea5} icon={AccessTime} title="Gym"/>
              </GridItem>
            </GridContainer>
            <GridContainer className={classes.gridContainer}>
              <GridItem xs={12} sm={3} md={2} className={classes.gridItem}>
                <InfoArea vertical className={classes.infoArea5} icon={ViewCarousel} title="TV"/>
              </GridItem>
              <GridItem xs={12} sm={3} md={2} className={classes.gridItem}>
                <InfoArea vertical className={classes.infoArea5} icon={AccessTime} title="Housekeeping"/>
              </GridItem>
              <GridItem xs={12} sm={3} md={2} className={classes.gridItem}>
                <InfoArea vertical className={classes.infoArea5} icon={AttachMoney} title="Laundry Facilities"/>
              </GridItem>
              <GridItem xs={12} sm={3} md={2} className={classes.gridItem}>
                <InfoArea vertical className={classes.infoArea5} icon={Safe} title="Safe & Secure"/>
              </GridItem>
              <GridItem xs={12} sm={3} md={2} className={classes.gridItem}>
                <InfoArea vertical className={classes.infoArea5} icon={AttachMoney} title="Netflix & Prime Video"/>
              </GridItem>
              <GridItem xs={12} sm={3} md={2} className={classes.gridItem}>
                <InfoArea vertical className={classes.infoArea5} icon={AttachMoney} title="24X7 Support"/>
              </GridItem>
            </GridContainer>
          </div>
        </GridContainer>
        <GridContainer className={classes.gridContainer}>
          <GridItem xs={12} sm={8} md={8} className={`${classes.mlAuto} ${classes.mrAuto} ${classes.textCenter}`}>
            <br/>
            <Link to="/way">
              <Button color="danger" size="lg" round>
                Know More
              </Button>
            </Link>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

export default withStyles(featuresStyle)(SectionFeatures);
