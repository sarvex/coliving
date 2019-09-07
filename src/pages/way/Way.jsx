import React from 'Pages/Way/node_modules/Pages/way/node_modules/react';
import classNames from 'Pages/Way/node_modules/Pages/way/node_modules/classnames';
import withStyles from 'Pages/Way/node_modules/Pages/way/node_modules/@material-ui/core/styles/withStyles';
import GridContainer from '../../Components/Grid/GridContainer';
import GridItem from '../../Components/Grid/GridItem';
import Parallax from '../../Components/Parallax/Parallax';

import SectionDescription from './sections/Description';
import SectionApps from './sections/Apps';
import SectionHome from './sections/Home';
import SectionHeart from './sections/Heart';
import SectionFeatures from './sections/Features';

import NavBar from '../../Sections/NavBar';
import Footer from '../../Sections/Footer';

import aboutUsStyle from '../../Assets/JSS/material-kit-pro-react/views/aboutUsStyle';

class AboutUsPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <NavBar/>
        <Parallax image={require('../../assets/img/way-hero-cover.webp')} filter="dark">
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem md={12} sm={12} className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter,)}>
                <h1 className={classes.title}>Think of us like fun social camps</h1>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <SectionDescription/>
        </div>
        <SectionHome/>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <SectionApps/>
        </div>
        <SectionHeart/>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <SectionFeatures/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default withStyles(aboutUsStyle)(AboutUsPage);
