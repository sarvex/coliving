import React from 'Pages/Careers/node_modules/Pages/careers/node_modules/react';
import PropTypes from 'Pages/Careers/node_modules/Pages/careers/node_modules/prop-types';
import classNames from 'Pages/Careers/node_modules/Pages/careers/node_modules/classnames';
import withStyles from 'Pages/Careers/node_modules/Pages/careers/node_modules/@material-ui/core/styles/withStyles';
import NavBar from '../../Sections/NavBar';
import Footer from '../../Sections/Footer';

import contactUsStyle from '../../Assets/JSS/material-kit-pro-react/views/contactUsStyle';

import BusinessDevelopment from './sections/Others';
import Transformation from './sections/Transformation';
import Sales from './sections/Sales';
import Marketing from './sections/Marketing';
import Technology from './sections/Technology';
import HumanResource from './sections/HumanResource';
import Administration from './sections/Administration';
import GridContainer from '../../Components/Grid/GridContainer';
import GridItem from '../../Components/Grid/GridItem';
import Parallax from '../../Components/Parallax/Parallax';
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
