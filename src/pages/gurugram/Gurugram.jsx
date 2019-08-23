import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import FormatAlignLeft from '@material-ui/icons/FormatAlignLeft';
import Parallax from '../../components/Parallax/Parallax';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Button from '../../components/CustomButtons/Button';
import SectionText from './sections/Description';
import SectionSimilarStories from './sections/Similar';
import NavBar from '../../sections/NavBar';
import Footer from '../../sections/Footer';

import blogPostPageStyle from '../../assets/jss/material-kit-pro-react/views/blogPostPageStyle';

class Gurugram extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <NavBar/>
        <Parallax image={require('assets/img/cover-gurgaon.webp')} filter="dark">
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem md={8} className={classes.textCenter}>
                <h1 className={classes.title}>
                  Gurugram
                </h1>
                <h4 className={classes.subtitle}>
                  Coming Soon...
                </h4>
                <br/>
                <Button color="rose" size="lg" round>
                  <FormatAlignLeft/>
                  {' '}
                  Pre Book
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classes.main}>
          <div className={classes.container}>
            <SectionText/>
          </div>
        </div>
        <SectionSimilarStories/>
        <Footer/>
      </div>
    );
  }
}

export default withStyles(blogPostPageStyle)(Gurugram);
