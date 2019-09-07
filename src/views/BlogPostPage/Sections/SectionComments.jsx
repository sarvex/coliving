import React from "Views/BlogPostPage/Sections/node_modules/react";
// nodejs library to set properties for components
import PropTypes from "Views/BlogPostPage/Sections/node_modules/prop-types";
// @material-ui/core components
import withStyles from "Views/BlogPostPage/Sections/node_modules/@material-ui/core/styles/withStyles";
import Tooltip from "Views/BlogPostPage/Sections/node_modules/@material-ui/core/Tooltip";
// @material-ui/icons
import Reply from "Views/BlogPostPage/Sections/node_modules/@material-ui/icons/Reply";
import Favorite from "Views/BlogPostPage/Sections/node_modules/@material-ui/icons/Favorite";
// core components
import GridContainer from "Views/BlogPostPage/Sections/node_modules/Components/Instruction/node_modules/components/Grid/GridContainer";
import GridItem from "Views/BlogPostPage/Sections/node_modules/Components/Instruction/node_modules/components/Grid/GridItem";
import Media from "Views/BlogPostPage/Sections/node_modules/components/Media/Media";
import Button from "Views/BlogPostPage/Sections/node_modules/Components/CustomUpload/node_modules/components/CustomButtons/Button";
import CustomInput from "Views/BlogPostPage/Sections/node_modules/components/CustomInput/CustomInput";

import profile4 from "assets/img/faces/card-profile4-square.jpg";
import profile1 from "assets/img/faces/card-profile1-square.jpg";
import profile6 from "assets/img/faces/card-profile6-square.jpg";

import sectionCommentsStyle from "Views/BlogPostPage/Sections/node_modules/assets/jss/material-kit-pro-react/views/blogPostSections/sectionCommentsStyle";

function SectionComments({ ...props }) {
  const { classes } = props;
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={8}>
          <div>
            <h3 className={classes.title}>3 Comments</h3>
            <Media
              avatar={profile4}
              title={
                <span>
                  Tina Andrew <small>· 7 minutes ago</small>
                </span>
              }
              body={
                <p className={classes.color555}>
                  Chance too good. God level bars. I{"'"}m so proud of
                  @LifeOfDesiigner #1 song in the country. Panda! Don{"'"}t be
                  scared of the truth because we need to restart the human
                  foundation in truth I stand with the most humility. We are so
                  blessed!
                </p>
              }
              footer={
                <div>
                  <Tooltip
                    id="tooltip-tina"
                    title="Reply to comment"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      color="primary"
                      simple
                      className={classes.footerButtons}
                    >
                      <Reply className={classes.footerIcons} /> Reply
                    </Button>
                  </Tooltip>

                  <Button
                    color="danger"
                    simple
                    className={classes.footerButtons}
                  >
                    <Favorite className={classes.footerIcons} /> 243
                  </Button>
                </div>
              }
            />
            <Media
              avatar={profile1}
              title={
                <span>
                  John Camber <small>· Yesterday</small>
                </span>
              }
              body={
                <span className={classes.color555}>
                  <p>
                    Hello guys, nice to have you on the platform! There will be
                    a lot of great stuff coming soon. We will keep you posted
                    for the latest news.
                  </p>
                  <p>
                    Don{"'"}t forget, You{"'"}re Awesome!
                  </p>
                </span>
              }
              footer={
                <div>
                  <Tooltip
                    id="tooltip-john"
                    title="Reply to comment"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      color="primary"
                      simple
                      className={classes.footerButtons}
                    >
                      <Reply className={classes.footerIcons} /> Reply
                    </Button>
                  </Tooltip>

                  <Button link className={classes.footerButtons}>
                    <Favorite className={classes.footerIcons} /> 25
                  </Button>
                </div>
              }
              innerMedias={[
                <Media
                  key={Date.now()}
                  avatar={profile4}
                  title={
                    <span>
                      Tina Andrew <small>· 12 Hours Ago</small>
                    </span>
                  }
                  body={
                    <span className={classes.color555}>
                      <p>
                        Hello guys, nice to have you on the platform! There will
                        be a lot of great stuff coming soon. We will keep you
                        posted for the latest news.
                      </p>
                      <p>
                        Don{"'"}t forget, You{"'"}re Awesome!
                      </p>
                    </span>
                  }
                  footer={
                    <Tooltip
                      id="tooltip-tina2"
                      title="Reply to comment"
                      placement="top"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button
                        color="primary"
                        simple
                        className={classes.footerButtons}
                      >
                        <Reply className={classes.footerIcons} /> Reply
                      </Button>
                    </Tooltip>
                  }
                />
              ]}
            />
          </div>
          <h3 className={classes.title}>Post your comment</h3>
          <Media
            avatar={profile6}
            body={
              <CustomInput
                labelText=" Write some nice stuff or nothing..."
                id="nice"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  multiline: true,
                  rows: 5
                }}
              />
            }
            footer={
              <Button color="primary" round className={classes.footerButtons}>
                Post comment
              </Button>
            }
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}

SectionComments.propTypes = {
  classes: PropTypes.object
};

export default withStyles(sectionCommentsStyle)(SectionComments);
