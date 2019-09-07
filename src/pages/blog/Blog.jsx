import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import GridContainer from 'Components/Grid/GridContainer';
import GridItem from 'Components/Grid/GridItem';
import Parallax from 'Components/Parallax/Parallax';
import NavBar from 'Sections/NavBar';
import Footer from 'Sections/Footer';
import blogPostsPageStyle from 'Assets/JSS/material-kit-pro-react/views/blogPostsPageStyle';
import SectionPills from './sections/Pills';
import SectionInterested from './sections/Interested';
import SectionImage from './sections/Image';
import SubscribeLine from './sections/Subscribe';


class Blog extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <NavBar/>
        <Parallax image={require('Assets/Images/bg10.jpg')} filter="dark">
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
                <h2 className={classes.title}>
                  A Place for Entrepreneurs to Share and Discover New Stories
                </h2>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classes.main}>
          <div className={classes.container}>
            <SectionPills/>
            <SectionInterested/>
          </div>
          <SectionImage/>
          <SubscribeLine/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default withStyles(blogPostsPageStyle)(Blog);
