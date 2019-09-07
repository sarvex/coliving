import React from "Views/BlogPostsPage/Sections/node_modules/react";
// nodejs library to set properties for components
import PropTypes from "Views/BlogPostsPage/Sections/node_modules/prop-types";
// @material-ui/core components
import withStyles from "Views/BlogPostsPage/Sections/node_modules/@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import GridContainer from "Views/BlogPostsPage/Sections/node_modules/Components/Instruction/node_modules/components/Grid/GridContainer";
import GridItem from "Views/BlogPostsPage/Sections/node_modules/Components/Instruction/node_modules/components/Grid/GridItem";
import Card from "Views/BlogPostsPage/Sections/node_modules/Components/CustomTabs/node_modules/components/Card/Card";
import CardHeader from "Views/BlogPostsPage/Sections/node_modules/Components/CustomTabs/node_modules/components/Card/CardHeader";
import CardBody from "Views/BlogPostsPage/Sections/node_modules/Components/CustomTabs/node_modules/components/Card/CardBody";
import CardFooter from "Views/BlogPostsPage/Sections/node_modules/components/Card/CardFooter";
import Muted from "Views/BlogPostsPage/Sections/node_modules/components/Typography/Muted";
import Button from "Views/BlogPostsPage/Sections/node_modules/Components/CustomUpload/node_modules/components/CustomButtons/Button";

import bg10 from "assets/img/bg10.jpg";

import cardProfile1 from "assets/img/faces/card-profile1-square.jpg";
import cardProfile4 from "assets/img/faces/card-profile4-square.jpg";

import sectionImageStyle from "Views/BlogPostsPage/Sections/node_modules/assets/jss/material-kit-pro-react/views/blogPostsSections/sectionImageStyle";

function SectionImage({ ...props }) {
  const { classes } = props;
  return (
    <div
      className={classes.section}
      style={{ backgroundImage: `url(${  bg10  })` }}
    >
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.textLeft}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablo">
                      <img src={cardProfile1} alt="..." />
                    </a>
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Alec Thompson</h4>
                    <Muted>
                      <h6>AUTHOR OF THE MONTH</h6>
                    </Muted>
                    <p className={classes.description}>
                      Don{"'"}t be scared of the truth because we need to
                      restart the human foundation in truth...
                    </p>
                  </CardBody>
                  <CardFooter profile plain>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-google" />
                    </Button>
                  </CardFooter>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.textLeft}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablo">
                      <img src={cardProfile4} alt="..." />
                    </a>
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Kendall Andrew</h4>
                    <Muted>
                      <h6>AUTHOR OF THE WEEK</h6>
                    </Muted>
                    <p className={classes.description}>
                      Don{"'"}t be scared of the truth because we need to
                      restart the human foundation in truth...
                    </p>
                  </CardBody>
                  <CardFooter profile plain>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-linkedin-in" />
                    </Button>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-dribbble" />
                    </Button>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-google" />
                    </Button>
                  </CardFooter>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

SectionImage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(sectionImageStyle)(SectionImage);
