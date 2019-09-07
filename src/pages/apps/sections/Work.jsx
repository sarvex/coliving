import React from 'Pages/Apps/sections/node_modules/Pages/apps/sections/node_modules/react';
import withStyles from 'Pages/Apps/sections/node_modules/Pages/apps/sections/node_modules/@material-ui/core/styles/withStyles';

import GridContainer from '../../../Components/Grid/GridContainer';
import GridItem from '../../../Components/Grid/GridItem';
import CustomInput from '../../../Components/CustomInput/CustomInput';
import Button from '../../../Components/CustomButtons/Button';

import workStyle from '../../../Assets/JSS/material-kit-pro-react/views/landingPageSections/workStyle';

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
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                  <CustomInput
                    labelText="Your Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <CustomInput
                  labelText="Your Message"
                  id="message"
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea,
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5,
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

export default withStyles(workStyle)(SectionWork);
