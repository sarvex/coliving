import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import NavBar from '../../sections/NavBar';
import Footer from '../../sections/Footer';

import contactUsStyle from '../../assets/jss/material-kit-pro-react/views/contactUsStyle';

import BusinessDevelopment from './sections/Others';
import Transformation from './sections/Transformation';
import Sales from './sections/Sales';
import Marketing from './sections/Marketing';
import Technology from './sections/Technology';
import HumanResource from './sections/HumanResource';
import Administration from './sections/Administration';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Parallax from '../../components/Parallax/Parallax';
import Finance from './sections/Finance';

class Careers extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <NavBar />
        <Parallax
          image={require('assets/img/bg4.jpg')}
          className={classes.parallax}
          small
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1>
                    Work with the Badass Team
                  </h1>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)} id="main-panel">
          <Sales />
          <HumanResource />
          <Technology />
          <Transformation />
          <BusinessDevelopment />
          <Marketing />
          <Finance />
          <Administration />
          <Footer />
        </div>
      </div>
    );
  }
}

Careers.propTypes = {
  classes: PropTypes.object
};

export default withStyles(contactUsStyle)(Careers);
