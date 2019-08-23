import React from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import Footer from '../components/Footer/Footer';

import face1 from '../assets/img/faces/card-profile6-square.jpg';
import face2 from '../assets/img/faces/christian.jpg';
import face3 from '../assets/img/faces/card-profile4-square.jpg';
import face4 from '../assets/img/faces/card-profile1-square.jpg';
import face5 from '../assets/img/faces/marc.jpg';
import face6 from '../assets/img/faces/kendall.jpg';
import face7 from '../assets/img/faces/card-profile5-square.jpg';
import face8 from '../assets/img/faces/card-profile2-square.jpg';

import styles from '../assets/jss/material-kit-pro-react/views/componentsSections/footerStyle';

const SectionFooter = (props) => {
  const { classes } = props;
  return (
    <div className={classes.section}>
      <Footer
        theme="dark"
        content={(
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a href="/apps" className={classes.block}>Apps</a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="/news" className={classes.block}>Housr In News</a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="/hacks" className={classes.block}>Housr Hacks</a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="/faqs" className={classes.block}>FAQs</a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="/privacy" className={classes.block}>Privacy Policy</a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="/cancel" className={classes.block}>Cancellation Policy</a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              Copyright &copy;
              {' '}
              {1900 + new Date().getYear()}
              {' '}
              <a href="/" className={classes.aClasses}>Housr</a>
              {' '}
              All Rights Reserved.
            </div>
          </div>
        )}
      >
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
            <h5>About Us</h5>
            <p>Housr is a social hub of mega co-living spaces that fosters communities.</p>
            <p>
              We begin by owning living spaces. And when we own them, we own the whole building, not just scattered
              flats here and there.
            </p>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <h5>Social Feed</h5>
            <div className={classes.socialFeed}>
              <div>
                <i className="fab fa-twitter"/>
                <p>How to handle ethical disagreements with your clients.</p>
              </div>
              <div>
                <i className="fab fa-twitter"/>
                <p>The tangible benefits of designing at 1x pixel density.</p>
              </div>
              <div>
                <i className="fab fa-facebook-square"/>
                <p>A collection of 25 stunning sites that you can use for inspiration.</p>
              </div>
            </div>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <h5>Instagram Feed</h5>
            <div className={classes.galleryFeed}>
              <img src={face1} className={classNames(classes.img, classes.imgRaised, classes.imgRoundedCircle)} alt="..."/>
              <img src={face2} className={classNames(classes.img, classes.imgRaised, classes.imgRoundedCircle)} alt="..."/>
              <img src={face3} className={classNames(classes.img, classes.imgRaised, classes.imgRoundedCircle)} alt="..."/>
              <img src={face4} className={classNames(classes.img, classes.imgRaised, classes.imgRoundedCircle)} alt="..."/>
              <img src={face5} className={classNames(classes.img, classes.imgRaised, classes.imgRoundedCircle)} alt="..."/>
              <img src={face6} className={classNames(classes.img, classes.imgRaised, classes.imgRoundedCircle)} alt="..."/>
              <img src={face7} className={classNames(classes.img, classes.imgRaised, classes.imgRoundedCircle)} alt="..."/>
              <img src={face8} className={classNames(classes.img, classes.imgRaised, classes.imgRoundedCircle)} alt="..."/>
            </div>
          </GridItem>
        </GridContainer>
      </Footer>
    </div>
  );
};

export default withStyles(styles)(SectionFooter);
