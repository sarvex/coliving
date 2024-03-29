import React from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Gesture from '@material-ui/icons/Gesture';
import Build from '@material-ui/icons/Build';
import GridContainer from 'Components/Grid/GridContainer';
import GridItem from 'Components/Grid/GridItem';
import InfoArea from 'Components/InfoArea/InfoArea';

import servicesStyle from 'Assets/JSS/material-kit-pro-react/views/aboutUsSections/servicesStyle';

function Services(props) {
  const { classes } = props;
  return (
    <div className={classes.services}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(
            classes.mlAuto,
            classes.mrAuto,
            classes.textCenter
          )}
        >
          <h2 className={classes.title}>We build awesome products</h2>
          <h5 className={classes.description}>
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="1. Design"
            description={(
              <span>
                <p>
                  The moment you use Material Kit, you know you’ve never felt
                  anything like it. With a single use, this powerfull UI Kit
                  lets you do more than ever before.
                  {' '}
                </p>
                <a href="#pablo">Find more...</a>
              </span>
)}
            icon={Gesture}
            iconColor="rose"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="2. Develop"
            description={(
              <span>
                <p>
                  Divide details about your product or agency work into parts.
                  Write a few lines about each one. A paragraph describing a
                  feature will be enough.
                  {' '}
                </p>
                <a href="#pablo">Find more...</a>
              </span>
)}
            icon={Build}
            iconColor="rose"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="3. Make Edits"
            description={(
              <span>
                <p>
                  Divide details about your product or agency work into parts.
                  Write a few lines about each one. A paragraph describing a
                  feature will be enough.
                  {' '}
                </p>
                <a href="#pablo">Find more...</a>
              </span>
)}
            icon="mode_edit"
            iconColor="rose"
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(servicesStyle)(Services);
