import React from 'Pages/Kota/node_modules/Pages/kota/node_modules/react';
import withStyles from 'Pages/Kota/node_modules/Pages/kota/node_modules/@material-ui/core/styles/withStyles';
import FormatAlignLeft from 'Pages/Kota/node_modules/Pages/kota/node_modules/@material-ui/icons/FormatAlignLeft';
import Parallax from '../../Components/Parallax/Parallax';
import GridContainer from '../../Components/Grid/GridContainer';
import GridItem from '../../Components/Grid/GridItem';
import Button from '../../Components/CustomButtons/Button';
import SectionText from './sections/Description';
import SectionSimilarStories from './sections/Similar';
import NavBar from '../../Sections/NavBar';
import Footer from '../../Sections/Footer';

import blogPostPageStyle from '../../Assets/JSS/material-kit-pro-react/views/blogPostPageStyle';

class Kota extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <NavBar/>
        <Parallax image={require('assets/img/bg10.jpg')} filter="dark">
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem md={8} className={classes.textCenter}>
                <h1 className={classes.title}>
                  Kota
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

export default withStyles(blogPostPageStyle)(Kota);
