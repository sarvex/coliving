import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "Components/Grid/GridContainer";
import GridItem from "Components/Grid/GridItem";
import Button from "Components/CustomButtons/Button";
import Card from "Components/Card/Card";
import CardBody from "Components/Card/CardBody";
import CustomInput from "Components/CustomInput/CustomInput";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui icons
import Mail from "@material-ui/icons/Mail";

import bg7 from "Assets/Images/bg7.jpg";

import styles from "Assets/JSS/material-kit-pro-react/views/componentsSections/preFooter";

const SectionPreFooter = props => {
  const { classes } = props;
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.title}>
          <h3>Pre-Footer Areas</h3>
        </div>
      </div>
      <div
        className={classNames(
          classes.socialLine,
          classes.textCenter,
          classes.white
        )}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem md={12}>
              <h4 className={classes.title}>Thank you for your support!</h4>
            </GridItem>
            <Button
              color="twitter"
              round
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              <i className="fab fa-twitter" /> Twitter · 2.5K
            </Button>
            <Button
              color="facebook"
              round
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              <i className="fab fa-facebook" /> Facebook · 3.2k
            </Button>
            <Button
              color="google"
              round
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              <i className="fab fa-google-plus-g" /> Google · 1.2k
            </Button>
            <Button
              color="dribbble"
              round
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              <i className="fab fa-dribbble" /> Dribbble · 1.8k
            </Button>
          </GridContainer>
        </div>
      </div>
      <br />
      <br />
      <div
        className={classNames(
          classes.socialLine,
          classes.textCenter,
          classes.white,
          classes.bigIcons
        )}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={2} md={2} className={classes.border}>
              <Button
                color="twitter"
                justIcon
                simple
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fab fa-twitter" />
              </Button>
            </GridItem>
            <GridItem xs={12} sm={2} md={2} className={classes.border}>
              <Button
                color="facebook"
                justIcon
                simple
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fab fa-facebook" />
              </Button>
            </GridItem>
            <GridItem xs={12} sm={2} md={2} className={classes.border}>
              <Button
                color="google"
                justIcon
                simple
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fab fa-google-plus-g" />
              </Button>
            </GridItem>
            <GridItem xs={12} sm={2} md={2} className={classes.border}>
              <Button
                color="dribbble"
                justIcon
                simple
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fab fa-dribbble" />
              </Button>
            </GridItem>
            <GridItem xs={12} sm={2} md={2} className={classes.border}>
              <Button
                color="youtube"
                justIcon
                simple
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fab fa-youtube" />
              </Button>
            </GridItem>
            <GridItem xs={12} sm={2} md={2} className={classes.border}>
              <Button
                color="instagram"
                justIcon
                simple
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fab fa-instagram" />
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <br />
      <br />
      <div
        className={classNames(
          classes.socialLine,
          classes.textCenter,
          classes.dark,
          classes.bigIcons
        )}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={2} md={2} className={classes.border}>
              <Button
                color="white"
                justIcon
                simple
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fab fa-twitter" />
              </Button>
            </GridItem>
            <GridItem xs={12} sm={2} md={2} className={classes.border}>
              <Button
                color="white"
                justIcon
                simple
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fab fa-facebook" />
              </Button>
            </GridItem>
            <GridItem xs={12} sm={2} md={2} className={classes.border}>
              <Button
                color="white"
                justIcon
                simple
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fab fa-google-plus-g" />
              </Button>
            </GridItem>
            <GridItem xs={12} sm={2} md={2} className={classes.border}>
              <Button
                color="white"
                justIcon
                simple
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fab fa-dribbble" />
              </Button>
            </GridItem>
            <GridItem xs={12} sm={2} md={2} className={classes.border}>
              <Button
                color="white"
                justIcon
                simple
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fab fa-youtube" />
              </Button>
            </GridItem>
            <GridItem xs={12} sm={2} md={2} className={classes.border}>
              <Button
                color="white"
                justIcon
                simple
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fab fa-instagram" />
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <br />
      <br />
      <div
        className={classNames(
          classes.subscribeLine,
          classes.subscribeLineImage
        )}
        style={{ backgroundImage: `url(${bg7})` }}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={6}
              md={6}
              className={classNames(classes.mlAuto, classes.mrAuto)}
            >
              <div className={classes.textCenter}>
                <h3 className={classes.title}>Subscribe to our Newsletter</h3>
                <p className={classes.description}>
                  Join our newsletter and get news in your inbox every week! We
                  hate spam too, so no worries about this.
                </p>
              </div>
              <Card raised className={classes.card}>
                <CardBody className={classes.cardBody}>
                  <form>
                    <GridContainer>
                      <GridItem xs={12} sm={6} md={6} lg={8}>
                        <CustomInput
                          id="emailPreFooter"
                          formControlProps={{
                            fullWidth: true,
                            className: classes.cardForm
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Mail />
                              </InputAdornment>
                            ),
                            placeholder: "Your Email..."
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={6} md={6} lg={4}>
                        <Button
                          color="primary"
                          block
                          className={classes.subscribeButton}
                        >
                          subscribe
                        </Button>
                      </GridItem>
                    </GridContainer>
                  </form>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <br />
      <br />
      <div
        className={classNames(
          classes.subscribeLine,
          classes.subscribeLineWhite
        )}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <h3 className={classes.title}>Get Tips & Tricks every Week!</h3>
              <p className={classes.description}>
                Join our newsletter and get news in your inbox every week! We
                hate spam too, so no worries about this.
              </p>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card plain>
                <CardBody>
                  <form>
                    <GridContainer>
                      <GridItem xs={12} sm={6} md={6} lg={8}>
                        <CustomInput
                          id="emailPreFooter2"
                          formControlProps={{
                            fullWidth: true,
                            className: classes.formFix
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Mail />
                              </InputAdornment>
                            ),
                            placeholder: "Your Email..."
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={6} md={6} lg={4}>
                        <Button
                          color="rose"
                          round
                          block
                          className={classes.subscribeButton}
                        >
                          subscribe
                        </Button>
                      </GridItem>
                    </GridContainer>
                  </form>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
};

SectionPreFooter.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(SectionPreFooter);
