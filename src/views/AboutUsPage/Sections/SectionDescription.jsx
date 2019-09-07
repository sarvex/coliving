import React from "Views/AboutUsPage/Sections/node_modules/react";
// nodejs library to set properties for components
import PropTypes from "Views/AboutUsPage/Sections/node_modules/prop-types";
// nodejs library that concatenates classes
import classNames from "Views/AboutUsPage/Sections/node_modules/classnames";
// core components
import GridContainer from "Views/AboutUsPage/Sections/node_modules/Components/Instruction/node_modules/components/Grid/GridContainer";
import GridItem from "Views/AboutUsPage/Sections/node_modules/Components/Instruction/node_modules/components/Grid/GridItem";
// @material-ui/core components
import withStyles from "Views/AboutUsPage/Sections/node_modules/@material-ui/core/styles/withStyles";

import descriptionStyle from "Views/AboutUsPage/Sections/node_modules/assets/jss/material-kit-pro-react/views/aboutUsSections/descriptionStyle";

function SectionDescription(props) {
  const { classes } = props;
  return (
    <div className={classNames(classes.aboutDescription, classes.textCenter)}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h5 className={classes.description}>
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he wouldn
            {"'"}t scroll to get here. Add a button if you want the user to see
            more.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}

SectionDescription.propTypes = {
  classes: PropTypes.object
};

export default withStyles(descriptionStyle)(SectionDescription);
