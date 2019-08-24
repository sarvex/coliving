import React from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Parallax from '../../components/Parallax/Parallax';
import SectionDescription from './sections/Description';
import SectionValues from './sections/Values';
import SectionFeatures from './sections/Features';
import SectionTeam from './sections/Team';
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
        <Parallax image={require('assets/img/story.webp')} filter="dark" small>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem md={12} sm={12} className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
                <h1 className={classes.title}>Coliving.ai is a social hub of mega co-living spaces that fosters
                  communities</h1>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <SectionDescription/>
            <SectionValues/>
            <SectionFeatures/>
          </div>
          <SectionTeam/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default withStyles(aboutUsStyle)(AboutUsPage);
