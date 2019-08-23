import React from 'react';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';

import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';

import Button from '../../../components/CustomButtons/Button';

import sectionsStyle from '../../../assets/jss/material-kit-pro-react/views/presentationSections/sectionsStyle';
import classNames from 'classnames';

const SectionAbout = (props) => {
  const { classes } = props;
  return (
    <div className={classes.sectionSections}>
      <div className={classes.container}>
        <div className={classes.features3}>
          <GridContainer justify="center">
            <GridItem
              md={8}
              className={classNames(classes.mrAuto, classes.mlAuto)}
            >
              <div className={classes.sectionDescription}>
                <h2 className={classes.title}>
                  It’s happening at Housr
                </h2>
                <h5 className={classes.description}>
                  Whether you are a social butterfly or a lone wolf, you will always find something that will excite you
                  at Housr. We bring alive experiences. A stand up comedy night here, a soccer evening there, a
                  kickboxing
                  session, a Shark Tank inspired event where you bring your world-changing ideas. It’s all happening at
                  Housr. And, if you’d like something else, hey, we’re always open to ideas. So bring them on!
                </h5>
                <Link to="/story">
                  <Button color="danger" size="lg" round>
                    <i className="fas fa-ticket-alt"/>
                    Know More
                  </Button>
                </Link>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
};

export default withStyles(sectionsStyle)(SectionAbout);
