import React from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Parallax from '../../components/Parallax/Parallax';
import SectionDescription from './sections/Description';
import SectionTeam from './sections/Team';
import SectionServices from './sections/Services';
import SectionOffice from './sections/Office';
import NavBar from '../../sections/NavBar';
import Footer from '../../sections/Footer';

import aboutUsStyle from '../../assets/jss/material-kit-pro-react/views/aboutUsStyle';

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
        <Parallax image={require('assets/img/bg9.jpg')} filter="dark" small>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem md={8} sm={8} className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
                <h1 className={classes.title}>Housr Credits</h1>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <SectionDescription/>
            <SectionTeam/>
            <SectionServices/>
            <SectionOffice/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default withStyles(aboutUsStyle)(AboutUsPage);
