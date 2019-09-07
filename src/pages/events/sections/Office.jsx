import React from 'Pages/Events/sections/node_modules/Pages/events/sections/node_modules/react';
import classNames from 'Pages/Events/sections/node_modules/Pages/events/sections/node_modules/classnames';
import withStyles from 'Pages/Events/sections/node_modules/Pages/events/sections/node_modules/@material-ui/core/styles/withStyles';
import GridContainer from '../../../Components/Grid/GridContainer';
import GridItem from '../../../Components/Grid/GridItem';

import officeStyle from '../../../Assets/JSS/material-kit-pro-react/views/aboutUsSections/officeStyle';

import office1 from '../../../assets/img/examples/office1.jpg';
import office2 from '../../../assets/img/examples/office2.jpg';
import office3 from '../../../assets/img/examples/office3.jpg';
import office4 from '../../../assets/img/examples/office4.jpg';
import office5 from '../../../assets/img/examples/office5.jpg';

function Office(props) {
  const { classes } = props;
  return (
    <div className={classes.office}>
      <GridContainer className={classes.textCenter}>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h2 className={classes.title}>Our office is our second home</h2>
          <h4 className={classes.description}>
            Here are some pictures from our office. You can see the place looks
            like a palace and is fully equiped with everything you need to get
            the job done.
          </h4>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={4} sm={4}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded,
            )}
            src={office1}
            alt="office1"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded,
            )}
            src={office2}
            alt="office2"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded,
            )}
            src={office3}
            alt="office3"
          />
        </GridItem>
        <GridItem md={6} sm={6}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded,
            )}
            src={office4}
            alt="office4"
          />
        </GridItem>
        <GridItem md={6} sm={6}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded,
            )}
            src={office5}
            alt="office5"
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(officeStyle)(Office);
