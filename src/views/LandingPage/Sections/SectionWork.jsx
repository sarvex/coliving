import React from "Views/LandingPage/Sections/node_modules/react";
// nodejs library to set properties for components
import PropTypes from "Views/LandingPage/Sections/node_modules/prop-types";
// @material-ui/core components
import withStyles from "Views/LandingPage/Sections/node_modules/@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "Views/LandingPage/Sections/node_modules/Components/Instruction/node_modules/components/Grid/GridContainer";
import GridItem from "Views/LandingPage/Sections/node_modules/Components/Instruction/node_modules/components/Grid/GridItem";
import CustomInput from "Views/LandingPage/Sections/node_modules/components/CustomInput/CustomInput";
import Button from "Views/LandingPage/Sections/node_modules/Components/CustomUpload/node_modules/components/CustomButtons/Button";

import workStyle from "Views/LandingPage/Sections/node_modules/assets/jss/material-kit-pro-react/views/landingPageSections/workStyle";

class SectionWork extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={8} md={8}>
            <h2 className={classes.title}>Work with us</h2>
            <h4 className={classes.description}>
              Divide details about your product or agency work into parts. Write
              a few lines about each one and contact us about any further
              collaboration. We will responde get back to you in a couple of
              hours.
            </h4>
            <form>
              <GridContainer>
                <GridItem xs={12} sm={6} md={6}>
                  <CustomInput
                    labelText="Your Name"
                    id="name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                  <CustomInput
                    labelText="Your Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <CustomInput
                  labelText="Your Message"
                  id="message"
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5
                  }}
                />
                <GridItem
                  xs={12}
                  sm={4}
                  md={4}
                  className={`${classes.mrAuto  } ${  classes.mlAuto}`}
                >
                  <Button color="primary">Send Message</Button>
                </GridItem>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

SectionWork.propTypes = {
  classes: PropTypes.object
};

export default withStyles(workStyle)(SectionWork);
