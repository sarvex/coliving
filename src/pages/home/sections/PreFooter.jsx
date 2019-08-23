import React from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';

import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import Button from '../../../components/CustomButtons/Button';
import preFooterStyle from '../../../assets/jss/material-kit-pro-react/views/componentsSections/preFooter';

import mint from '../../../assets/img/mint.svg';
import cnbc from '../../../assets/img/cnbc.svg';
import realty from '../../../assets/img/et-realty.svg';
import inc42 from '../../../assets/img/inc42.svg';
import rediff from '../../../assets/img/rediff.svg';
import techcircle from '../../../assets/img/techcircle.svg';


const SectionPreFooter = (props) => {
  const { classes } = props;
  return (
    <div>
      <div className={classNames(classes.socialLine, classes.textCenter, classes.white, classes.bigIcons,)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={2} md={2} className={classes.border}>
              <Button color="twitter" justIcon simple href="#pablo" onClick={e => e.preventDefault()}>
                <img height={55} src={mint} alt={mint}/>
              </Button>
            </GridItem>
            <GridItem xs={12} sm={2} md={2} className={classes.border}>
              <Button color="facebook" justIcon simple href="#pablo" onClick={e => e.preventDefault()}>
                <img height={55} src={cnbc} alt={cnbc}/>
              </Button>
            </GridItem>
            <GridItem xs={12} sm={2} md={2} className={classes.border}>
              <Button color="google" justIcon simple href="#pablo" onClick={e => e.preventDefault()}>
                <img height={55} src={inc42} alt={inc42}/>
              </Button>
            </GridItem>
            <GridItem xs={12} sm={2} md={2} className={classes.border}>
              <Button color="dribbble" justIcon simple href="#pablo" onClick={e => e.preventDefault()}>
                <img height={55} src={rediff} alt={rediff}/>
              </Button>
            </GridItem>
            <GridItem xs={12} sm={2} md={2} className={classes.border}>
              <Button color="youtube" justIcon simple href="#pablo" onClick={e => e.preventDefault()}>
                <img height={55} src={techcircle} alt={techcircle}/>
              </Button>
            </GridItem>
            <GridItem xs={12} sm={2} md={2} className={classes.border}>
              <Button color="instagram" justIcon simple href="#pablo" onClick={e => e.preventDefault()}>
                <img height={55} src={realty} alt={realty}/>
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
};

export default withStyles(preFooterStyle)(SectionPreFooter);
