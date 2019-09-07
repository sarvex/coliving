import React from 'Pages/Events/node_modules/Pages/events/node_modules/react';
import classNames from 'Pages/Events/node_modules/Pages/events/node_modules/classnames';
import withStyles from 'Pages/Events/node_modules/Pages/events/node_modules/@material-ui/core/styles/withStyles';
import GridContainer from '../../Components/Grid/GridContainer';
import GridItem from '../../Components/Grid/GridItem';
import Parallax from '../../Components/Parallax/Parallax';
import aboutUsStyle from '../../Assets/JSS/material-kit-pro-react/views/aboutUsStyle';
import SectionDescription from './sections/Description';
import SectionTeam from './sections/Team';
import SectionServices from './sections/Services';
import SectionOffice from './sections/Office';
import NavBar from '../../Sections/NavBar';
import Footer from '../../Sections/Footer';


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
        <Parallax image={require('assets/img/bg9.jpg')} filter="dark">
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem md={8} sm={8} className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
                <h1 className={classes.title}>Events</h1>
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
