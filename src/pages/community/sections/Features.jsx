import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';

import featuresStyle from '../../../assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle';

import experience from '../../../assets/img/com-experience.svg';
import beYou from '../../../assets/img/be-you.svg';

function SectionFeatures({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.container}>
        <div className={classes.features3}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <img src={experience} alt="..."/>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <h2 className={classes.title}>
                Experience it with people like you
              </h2>
              <h4>
                Communities are all about experiences. We bring alive experiences that bring people closer. So
                you don’t come back home to a neighbour. You come home to a friend.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
        <div className={classes.features3}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <h2 className={classes.title}>
                Be who you want to be.
              </h2>
              <h4>
                We love diversity. So come as you are, whoever you are. What you eat, who you love and who you
                worship doesn’t matter to us. No judgements are passed. As Coliving
                buildings host hundreds of residents, chances are you will find people who are just like you.
              </h4>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <img src={beYou} alt="..."/>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

export default withStyles(featuresStyle)(SectionFeatures);
