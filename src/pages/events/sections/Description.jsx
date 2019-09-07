import React from 'Pages/Events/sections/node_modules/Pages/events/sections/node_modules/react';
import classNames from 'Pages/Events/sections/node_modules/Pages/events/sections/node_modules/classnames';
import withStyles from 'Pages/Events/sections/node_modules/Pages/events/sections/node_modules/@material-ui/core/styles/withStyles';
import GridContainer from '../../../Components/Grid/GridContainer';
import GridItem from '../../../Components/Grid/GridItem';

import descriptionStyle from '../../../Assets/JSS/material-kit-pro-react/views/aboutUsSections/descriptionStyle';

function Description(props) {
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
            {'\''}
            t scroll to get here. Add a button if you want the user to see
            more.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(descriptionStyle)(Description);
