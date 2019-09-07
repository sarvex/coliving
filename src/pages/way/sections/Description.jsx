import React from 'Pages/Way/sections/node_modules/Pages/way/sections/node_modules/react';
import classNames from 'Pages/Way/sections/node_modules/Pages/way/sections/node_modules/classnames';
import withStyles from 'Pages/Way/sections/node_modules/Pages/way/sections/node_modules/@material-ui/core/styles/withStyles';
import GridContainer from '../../../Components/Grid/GridContainer';
import GridItem from '../../../Components/Grid/GridItem';

import sectionsStyle from '../../../Assets/JSS/material-kit-pro-react/views/presentationSections/sectionsStyle';

const SectionAbout = (props) => {
  const { classes } = props;
  return (
    <div className={classes.sectionSections}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem
            md={8}
            className={classNames(classes.mrAuto, classes.mlAuto)}
          >
            <div className={classes.sectionDescription}>

              <h3 className={classes.description}>
                We begin by owning living spaces. And when we own them, we own the
                whole building, not just scattered flats here and there. Once we
                have the building, we convert it to this really interesting space
                that you’d actually want to come home to. We host fun stuff like
                gaming nights, food evenings, stand up comedy night and a whole lot
                more. So you aren’t just living at Coliving. You’re living the Coliving life.
              </h3>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};

export default withStyles(sectionsStyle)(SectionAbout);
