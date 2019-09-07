import React from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';

import presentationStyle from '../../assets/jss/material-kit-pro-react/views/presentationStyle';
import About from './sections/About';
import Features from './sections/Features';
import Community from './sections/Community';
import Credits from './sections/Credits';
import PreFooter from './sections/PreFooter';
import NavBar from '../../sections/NavBar';
import Footer from '../../sections/Footer';
import Parallax from '../../components/Parallax/Parallax';
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Cover from '../../assets/img/examples/city.jpg'

class Home extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <NavBar/>
        <Parallax image={Cover} filter="dark">
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem md={12} sm={12} className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
                <h1 className={classes.title}>Domotics</h1>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <About/>
        </div>
        <Features/>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <Community/>
        </div>
        <Credits/>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <PreFooter/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default withStyles(presentationStyle)(Home);
