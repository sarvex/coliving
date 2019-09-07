import React from 'Pages/Privacy/node_modules/Pages/privacy/node_modules/react';
import classNames from 'Pages/Privacy/node_modules/Pages/privacy/node_modules/classnames';
import withStyles from 'Pages/Privacy/node_modules/Pages/privacy/node_modules/@material-ui/core/styles/withStyles';
import GridContainer from '../../Components/Grid/GridContainer';
import GridItem from '../../Components/Grid/GridItem';
import Parallax from '../../Components/Parallax/Parallax';

import landingPageStyle from '../../Assets/JSS/material-kit-pro-react/views/landingPageStyle';

import SectionPolicy from './sections/Policy';
import NavBar from '../../Sections/NavBar';
import Footer from '../../Sections/Footer';

class LandingPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <NavBar/>
        <Parallax image={require('assets/img/bg8.jpg')} filter='dark'>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={6} md={6}>
                <h1 className={classes.title}>Privacy Policy</h1>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <SectionPolicy/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
