import React from 'react';
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';

import sectionsStyle from '../../../assets/jss/material-kit-pro-react/views/presentationSections/sectionsStyle';

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
                more. So you aren’t just living at Housr. You’re living the Housr life.
              </h3>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};

export default withStyles(sectionsStyle)(SectionAbout);
