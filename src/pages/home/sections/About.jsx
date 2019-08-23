import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import Button from '../../../components/CustomButtons/Button';

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
              <h2 className={classes.title}>
                When you open a Housr door, you open to a community way of
                living
              </h2>
              <h5 className={classes.description}>
                Think Facebook. Think Instagram. What’s that about?
                Communities right? Your feed is all the wonderful, talented
                people you follow. They follow you. There’s a constant
                exchange of conversations and thoughts. You send new friend
                requests, like posts and share fun stuff. Now, imagine all of
                that, in a beautifully designed, tech enabled, co-living
                space. You finish a day at college, or work. Come home to your
                clan, and you pretty much be yourself. That’s Housr.
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
  );
};

export default withStyles(sectionsStyle)(SectionAbout);
