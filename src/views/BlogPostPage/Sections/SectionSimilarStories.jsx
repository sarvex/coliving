import React from "Views/BlogPostPage/Sections/node_modules/react";
// nodejs library to set properties for components
import PropTypes from "Views/BlogPostPage/Sections/node_modules/prop-types";
// @material-ui/core components
import withStyles from "Views/BlogPostPage/Sections/node_modules/@material-ui/core/styles/withStyles";
// @material-ui/icons
import TrendingUp from "Views/BlogPostPage/Sections/node_modules/@material-ui/icons/TrendingUp";
// core components
import GridContainer from "Views/BlogPostPage/Sections/node_modules/Components/Instruction/node_modules/components/Grid/GridContainer";
import GridItem from "Views/BlogPostPage/Sections/node_modules/Components/Instruction/node_modules/components/Grid/GridItem";
import Card from "Views/BlogPostPage/Sections/node_modules/Components/CustomTabs/node_modules/components/Card/Card";
import CardHeader from "Views/BlogPostPage/Sections/node_modules/Components/CustomTabs/node_modules/components/Card/CardHeader";
import CardBody from "Views/BlogPostPage/Sections/node_modules/Components/CustomTabs/node_modules/components/Card/CardBody";
import Info from "Views/BlogPostPage/Sections/node_modules/components/Typography/Info";
import Success from "Views/BlogPostPage/Sections/node_modules/components/Typography/Success";
import Danger from "Views/BlogPostPage/Sections/node_modules/components/Typography/Danger";

import blog6 from "assets/img/examples/blog6.jpg";
import blog8 from "assets/img/examples/blog8.jpg";
import blog7 from "assets/img/examples/blog7.jpg";

import sectionSimilarStoriesStyle from "Views/BlogPostPage/Sections/node_modules/assets/jss/material-kit-pro-react/views/blogPostSections/sectionSimilarStoriesStyle";

function SectionSimilarStories({ ...props }) {
  const { classes } = props;
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem md={12}>
            <h2 className={`${classes.title  } ${  classes.textCenter}`}>
              Similar Stories
            </h2>
            <br />
            <GridContainer>
              <GridItem xs={12} sm={4} md={4}>
                <Card blog>
                  <CardHeader image>
                    <a href="#pablo">
                      <img src={blog6} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${  blog6  })`,
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                  <CardBody>
                    <Info>
                      <h6>ENTERPRISE</h6>
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
                      <img src={blog8} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${  blog8  })`,
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                  <CardBody>
                    <Success>
                      <h6>STARTUPS</h6>
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
                      <img src={blog7} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${  blog7  })`,
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                  <CardBody>
                    <Danger>
                      <h6>
                        <TrendingUp /> ENTERPRISE
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

SectionSimilarStories.propTypes = {
  classes: PropTypes.object
};

export default withStyles(sectionSimilarStoriesStyle)(SectionSimilarStories);
