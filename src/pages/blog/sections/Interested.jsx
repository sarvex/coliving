import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import TrendingUp from '@material-ui/icons/TrendingUp';
import GridContainer from 'Components/Grid/GridContainer';
import GridItem from 'Components/Grid/GridItem';
import Card from 'Components/Card/Card';
import CardBody from 'Components/Card/CardBody';
import CardHeader from 'Components/Card/CardHeader';
import Info from 'Components/Typography/Info';
import Success from 'Components/Typography/Success';
import Danger from 'Components/Typography/Danger';

import bg5 from 'Assets/Images/bg5.jpg';
import blog5 from 'Assets/Images/examples/blog5.jpg';
import blog6 from 'Assets/Images/examples/blog6.jpg';

import sectionInterestedStyle
  from 'Assets/JSS/material-kit-pro-react/views/blogPostsSections/sectionInterestedStyle';

function SectionInterested({ ...props }) {
  const { classes } = props;
  return (
    <div className={classes.section}>
      <h3 className={`${classes.title} ${classes.textCenter}`}>
        You may also be interested in
      </h3>
      <br/>
      <GridContainer>
        <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
          <Card plain blog>
            <CardHeader image plain>
              <a href="#pablo">
                <img src={bg5} alt="..."/>
              </a>
              <div
                className={classes.coloredShadow}
                style={{
                  backgroundImage: `url(${bg5})`,
                  opacity: '1',
                }}
              />
            </CardHeader>
            <CardBody plain>
              <Info>
                <h6>ENTERPRISE</h6>
              </Info>
              <h4 className={classes.cardTitle}>
                <a href="#pablo">
                  Autodesk looks to future of 3D printing with Project Escher
                </a>
              </h4>
              <p className={classes.description}>
                Like so many organizations these days, Autodesk is a company in
                transition. It was until recently a traditional boxed software
                company selling licenses.
                <a href="#pablo"> Read More </a>
              </p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
          <Card plain blog>
            <CardHeader plain image>
              <a href="#pablo">
                <img src={blog5} alt="..."/>
              </a>
              <div
                className={classes.coloredShadow}
                style={{
                  backgroundImage: `url(${blog5})`,
                  opacity: '1',
                }}
              />
            </CardHeader>
            <CardBody plain>
              <Success>
                <h6>STARTUPS</h6>
              </Success>
              <h4 className={classes.cardTitle}>
                <a href="#pablo">
                  Lyft launching cross-platform service this week
                </a>
              </h4>
              <p className={classes.description}>
                Like so many organizations these days, Autodesk is a company in
                transition. It was until recently a traditional boxed software
                company selling licenses.
                <a href="#pablo"> Read More </a>
              </p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
          <Card plain blog>
            <CardHeader plain image>
              <a href="#pablo">
                <img src={blog6} alt="..."/>
              </a>
              <div
                className={classes.coloredShadow}
                style={{
                  backgroundImage: `url(${blog6})`,
                  opacity: '1',
                }}
              />
            </CardHeader>
            <CardBody plain>
              <Danger>
                <h6>
                  <TrendingUp/>
                  {' '}
                  ENTERPRISE
                </h6>
              </Danger>
              <h4 className={classes.cardTitle}>
                <a href="#pablo">
                  6 insights into the French Fashion landscape
                </a>
              </h4>
              <p className={classes.description}>
                Like so many organizations these days, Autodesk is a company in
                transition. It was until recently a traditional boxed software
                company selling licenses.
                <a href="#pablo"> Read More </a>
              </p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(sectionInterestedStyle)(SectionInterested);
