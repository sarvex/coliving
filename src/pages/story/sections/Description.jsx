import React from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import GridContainer from 'Components/Grid/GridContainer';
import GridItem from 'Components/Grid/GridItem';

import descriptionStyle from 'Assets/JSS/material-kit-pro-react/views/aboutUsSections/descriptionStyle';

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
          <h2 className={classes.title}>Our Vision</h2>
          <h3 className={classes.description}>
            is to change the way millenials live.
          </h3>
        </GridItem>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h2 className={classes.title}>Our Mission</h2>
          <h3 className={classes.description}>
            is to create smart social hubs of mega co-living spaces that house experiences, foster communities and bring
            millennials together.
          </h3>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(descriptionStyle)(SectionDescription);
