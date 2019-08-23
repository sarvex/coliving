import React from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';

import officeStyle from '../../../assets/jss/material-kit-pro-react/views/aboutUsSections/officeStyle';

// office
import office1 from '../../../assets/img/community-life1.webp';
import office2 from '../../../assets/img/community-life2.webp';
import office3 from '../../../assets/img/community-life3.webp';
import office4 from '../../../assets/img/community-life4.webp';
import office5 from '../../../assets/img/community-life5.webp';

function SectionOffice(props) {
  const { classes } = props;
  return (
    <div className={classes.office}>
      <GridContainer className={classes.textCenter}>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h2 className={classes.title}>Glimpses of Housr Life</h2>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={12} sm={12}>
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
        <GridItem md={6} sm={6}>
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
        <GridItem md={6} sm={6}>
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

export default withStyles(officeStyle)(SectionOffice);
