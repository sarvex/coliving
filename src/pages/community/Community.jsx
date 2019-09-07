import React from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Parallax from '../../components/Parallax/Parallax';
import Description from './sections/Description';
import Features from './sections/Features';
import Glimpses from './sections/Glimpses';
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
        <Parallax image={require('../../assets/img/hero-community.webp')} filter="dark">
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem
                md={12}
                sm={12}
                className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}
              >
                <h1 className={classes.title}>Make it happen, together</h1>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <Description/>
            <Features/>
            <Glimpses/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default withStyles(aboutUsStyle)(AboutUsPage);
