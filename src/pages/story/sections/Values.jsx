import React from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import Card from '../../../components/Card/Card';
import CardAvatar from '../../../components/Card/CardAvatar';
import CardBody from '../../../components/Card/CardBody';

import teamStyle from '../../../assets/jss/material-kit-pro-react/views/aboutUsSections/teamStyle';

import FaceMarc from '../../../assets/img/faces/marc.jpg';
import FaceChristian from '../../../assets/img/faces/christian.jpg';
import FaceKendall from '../../../assets/img/faces/kendall.jpg';
import FaceAvatar from '../../../assets/img/faces/avatar.jpg';

function SectionTeam(props) {
  const { classes } = props;
  return (
    <div className={classes.team}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(
            classes.mrAuto,
            classes.mlAuto,
            classes.textCenter,
          )}
        >
          <h2 className={classes.title}>Our Values</h2>
          <h3 className={classes.description}>
            We love People.
          </h3>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem sm={12} md={6} lg={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <img src={FaceMarc} alt="profile-pic" className={classes.img}/>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>We are a people’s brand.</h4>
              <h5 className={classes.cardDescription}>
                We love bringing people together. Everything we do is about people and centred around them.
              </h5>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem sm={12} md={6} lg={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <img src={FaceChristian} alt="profile-pic" className={classes.img}/>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>We focus on tiny details.</h4>
              <h5 className={classes.cardDescription}>
                We never miss wishing you on your birthday or throwing you a housewarming party.
              </h5>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem sm={12} md={6} lg={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <img src={FaceKendall} alt="profile-pic" className={classes.img}/>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>We give you experiences.</h4>
              <h5 className={classes.cardDescription}>
                By activating events, gaming nights, cultural stuff, food evenings, and the whole shebang.
              </h5>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem sm={12} md={6} lg={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <img src={FaceAvatar} alt="profile-pic" className={classes.img}/>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>We love tech</h4>
              <h5 className={classes.cardDescription}>
                Because tech connects people and makes life easier for them. We love communities and we love
                collaborating.
              </h5>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem sm={12} md={6} lg={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <img src={FaceMarc} alt="profile-pic" className={classes.img}/>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>We love warm and cozy.</h4>
              <h5 className={classes.cardDescription}>
                We ensure the spaces we design makes you feel comfortable and truly at home.
              </h5>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(teamStyle)(SectionTeam);
