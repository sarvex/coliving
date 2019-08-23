import React from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';

import presentationStyle from '../../assets/jss/material-kit-pro-react/views/presentationStyle';
import Header from './sections/Header';
import About from './sections/About';
import Features from './sections/Features';
import Community from './sections/Community';
import Credits from './sections/Credits';
import PreFooter from './sections/PreFooter';
import NavBar from '../../sections/NavBar';
import Footer from '../../sections/Footer';

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
        <Header/>
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
