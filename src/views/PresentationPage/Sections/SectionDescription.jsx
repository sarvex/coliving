import React from "Views/PresentationPage/Sections/node_modules/react";
// nodejs library to set properties for components
import PropTypes from "Views/PresentationPage/Sections/node_modules/prop-types";
// core components
import GridContainer from "Views/PresentationPage/Sections/node_modules/Components/Instruction/node_modules/components/Grid/GridContainer";
import GridItem from "Views/PresentationPage/Sections/node_modules/Components/Instruction/node_modules/components/Grid/GridItem";
import InfoArea from "Views/PresentationPage/Sections/node_modules/components/InfoArea/InfoArea";

// @material-ui icons
import Apps from "Views/PresentationPage/Sections/node_modules/@material-ui/icons/Apps";
import ViewDay from "Views/PresentationPage/Sections/node_modules/@material-ui/icons/ViewDay";
import ViewCarousel from "Views/PresentationPage/Sections/node_modules/@material-ui/icons/ViewCarousel";
// @material-ui/core components
import withStyles from "Views/PresentationPage/Sections/node_modules/@material-ui/core/styles/withStyles";

import descriptionStyle from "Views/PresentationPage/Sections/node_modules/assets/jss/material-kit-pro-react/views/presentationSections/descriptionStyle";

class SectionDescription extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem md={8} sm={8}>
              <h4 className={classes.description}>
                Material Kit React PRO is a Material-UI Kit with a fresh, new
                design inspired by Google{"'"}s Material Design. You asked for
                it, so we built it. It{"'"}s a great pleasure to introduce to
                you the material concepts in an easy to use and beautiful set of
                components.
              </h4>
            </GridItem>
          </GridContainer>
          <div className={classes.features}>
            <GridContainer>
              <GridItem md={4} sm={4}>
                <InfoArea
                  title="Huge Number of Components"
                  description="Every element that you need in a product comes built in as a component. All components fit perfectly with each other and can take variations in colour."
                  icon={Apps}
                  iconColor="danger"
                  vertical
                />
              </GridItem>
              <GridItem md={4} sm={4}>
                <InfoArea
                  title="Multi-Purpose Sections"
                  description="Putting together a page has never been easier than matching together sections. From team presentation to pricing options, you can easily customise and built your pages."
                  icon={ViewDay}
                  iconColor="primary"
                  vertical
                />
              </GridItem>
              <GridItem md={4} sm={4}>
                <InfoArea
                  title="Example Pages"
                  description="If you want to get inspiration or just show something directly to your clients, you can jump start your development with our pre-built example pages."
                  icon={ViewCarousel}
                  iconColor="success"
                  vertical
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

SectionDescription.propTypes = {
  classes: PropTypes.object
};

export default withStyles(descriptionStyle)(SectionDescription);
