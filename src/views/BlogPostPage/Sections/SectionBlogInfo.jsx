import React from "Views/BlogPostPage/Sections/node_modules/react";
// nodejs library to set properties for components
import PropTypes from "Views/BlogPostPage/Sections/node_modules/prop-types";
// @material-ui/core components
import withStyles from "Views/BlogPostPage/Sections/node_modules/@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import GridContainer from "Views/BlogPostPage/Sections/node_modules/Components/Instruction/node_modules/components/Grid/GridContainer";
import GridItem from "Views/BlogPostPage/Sections/node_modules/Components/Instruction/node_modules/components/Grid/GridItem";
import Badge from "Views/BlogPostPage/Sections/node_modules/components/Badge/Badge";
import Button from "Views/BlogPostPage/Sections/node_modules/Components/CustomUpload/node_modules/components/CustomButtons/Button";
import Card from "Views/BlogPostPage/Sections/node_modules/Components/CustomTabs/node_modules/components/Card/Card";
import CardAvatar from "Views/BlogPostPage/Sections/node_modules/components/Card/CardAvatar";

import profileImage from "assets/img/faces/card-profile1-square.jpg";

import sectionBlogInfoStyle from "Views/BlogPostPage/Sections/node_modules/assets/jss/material-kit-pro-react/views/blogPostSections/sectionBlogInfoStyle";

function SectionBlogInfo({ ...props }) {
  const { classes } = props;
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={8}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <div className={classes.blogTags}>
                Tags:
                <Badge color="primary">Photography</Badge>
                <Badge color="primary">Stories</Badge>
                <Badge color="primary">Castle</Badge>
              </div>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Button color="google" round className={classes.buttons}>
                <i className="fab fa-google" /> 232
              </Button>
              <Button color="twitter" round className={classes.buttons}>
                <i className="fab fa-twitter" /> 910
              </Button>
              <Button color="facebook" round className={classes.buttons}>
                <i className="fab fa-facebook-square" /> 872
              </Button>
            </GridItem>
          </GridContainer>
          <hr />
          <Card plain profile className={classes.card}>
            <GridContainer>
              <GridItem xs={12} sm={2} md={2}>
                <CardAvatar plain profile>
                  <img src={profileImage} alt="..." />
                </CardAvatar>
              </GridItem>
              <GridItem xs={12} sm={8} md={8}>
                <h4 className={classes.cardTitle}>Alec Thompson</h4>
                <p className={classes.description}>
                  I{"'"}ve been trying to figure out the bed design for the
                  master bedroom at our Hidden Hills compound...I like good
                  music from Youtube.
                </p>
              </GridItem>
              <GridItem xs={12} sm={2} md={2}>
                <Button round className={classes.pullRight}>
                  Follow
                </Button>
              </GridItem>
            </GridContainer>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

SectionBlogInfo.propTypes = {
  classes: PropTypes.object
};

export default withStyles(sectionBlogInfoStyle)(SectionBlogInfo);
