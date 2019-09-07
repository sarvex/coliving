import React from 'react';import classNames from 'classnames';import withStyles from '@material-ui/core/styles/withStyles';import GridContainer from '../../components/Grid/GridContainer';import GridItem from '../../components/Grid/GridItem';import Parallax from '../../components/Parallax/Parallax';import landingPageStyle from '../../assets/jss/material-kit-pro-react/views/landingPageStyle';import SectionProduct from './sections/Product';import SectionTeam from './sections/Team';import SectionWork from './sections/Work';import NavBar from '../../sections/NavBar';import Footer from '../../sections/Footer';class LandingPage extends React.Component {  componentDidMount() {    window.scrollTo(0, 0);    document.body.scrollTop = 0;  }
  render() {    const { classes, ...rest } = this.props;    return (      <div>        <NavBar />        <Parallax image={require('assets/img/bg8.jpg')} filter='dark'>          <div className={classes.container}>            <GridContainer justify="center">              <GridItem xs={12} sm={6} md={6}>                <h1 className={classes.title}>In News</h1>              </GridItem>            </GridContainer>          </div>        </Parallax>        <div className={classNames(classes.main, classes.mainRaised)}>          <div className={classes.container}>            <SectionProduct />            <SectionTeam />            <SectionWork />          </div>        </div>        <Footer />      </div>    );  }}export default withStyles(landingPageStyle)(LandingPage);