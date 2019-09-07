import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import TrendingUp from '@material-ui/icons/TrendingUp';
import GridContainer from 'Components/Grid/GridContainer';
import GridItem from 'Components/Grid/GridItem';
import Card from 'Components/Card/Card';
import CardHeader from 'Components/Card/CardHeader';
import CardBody from 'Components/Card/CardBody';
import Info from 'Components/Typography/Info';
import Success from 'Components/Typography/Success';
import Danger from 'Components/Typography/Danger';

import blog6 from 'Assets/Images/examples/blog6.jpg';
import blog8 from 'Assets/Images/examples/blog8.jpg';
import blog7 from 'Assets/Images/examples/blog7.jpg';

import sectionSimilarStoriesStyle
  from 'Assets/JSS/material-kit-pro-react/views/blogPostSections/sectionSimilarStoriesStyle';

function SectionSimilarStories({ ...props }) {
  const { classes } = props;
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem md={12}>
            <h2 className={`${classes.title} ${classes.textCenter}`}>
              Similar...
            </h2>
            <br/>
            <GridContainer>
              <GridItem xs={12} sm={4} md={4}>
                <Card blog>
                  <CardHeader image>
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
                  <CardBody>
                    <Info>
                      <h6>SUITES</h6>
                    </Info>
                    <h4 className={classes.cardTitle}>
                      <a href="#pablo">
                        Autodesk looks to future of 3D printing with Project
                        Escher
                      </a>
                    </h4>
                    <p className={classes.description}>
                      Like so many organizations these days, Autodesk is a
                      company in transition. It was until recently a traditional
                      boxed software company selling licenses.
                      <a href="#pablo"> Read More </a>
                    </p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={4} md={4}>
                <Card blog>
                  <CardHeader image>
                    <a href="#pablo">
                      <img src={blog8} alt="..."/>
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${blog8})`,
                        opacity: '1',
                      }}
                    />
                  </CardHeader>
                  <CardBody>
                    <Success>
                      <h6>HOUSE</h6>
                    </Success>
                    <h4 className={classes.cardTitle}>
                      <a href="#pablo">
                        Lyft launching cross-platform service this week
                      </a>
                    </h4>
                    <p className={classes.description}>
                      Like so many organizations these days, Autodesk is a
                      company in transition. It was until recently a traditional
                      boxed software company selling licenses.
                      <a href="#pablo"> Read More </a>
                    </p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={4} md={4}>
                <Card blog>
                  <CardHeader image>
                    <a href="#pablo">
                      <img src={blog7} alt="..."/>
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${blog7})`,
                        opacity: '1',
                      }}
                    />
                  </CardHeader>
                  <CardBody>
                    <Danger>
                      <h6>
                        <TrendingUp/>
                        {' '}
                        STUDENTS
                      </h6>
                    </Danger>
                    <h4 className={classes.cardTitle}>
                      <a href="#pablo">
                        6 insights into the French Fashion landscape
                      </a>
                    </h4>
                    <p className={classes.description}>
                      Like so many organizations these days, Autodesk is a
                      company in transition. It was until recently a traditional
                      boxed software company selling licenses.
                      <a href="#pablo"> Read More </a>
                    </p>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}


export default withStyles(sectionSimilarStoriesStyle)(SectionSimilarStories);
