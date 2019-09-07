import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite'
// core components
import Header from 'Components/Header/Header'
import GridContainer from 'Components/Grid/GridContainer'
import GridItem from 'Components/Grid/GridItem'
import Parallax from 'Components/Parallax/Parallax'
import Footer from 'Components/Footer/Footer'
// sections for this page
import HeaderLinks from 'Components/Header/HeaderLinks'
import aboutUsStyle from 'Assets/JSS/material-kit-pro-react/views/aboutUsStyle'
import SectionDescription from "./Sections/SectionDescription"
import SectionTeam from "./Sections/SectionTeam"
import SectionServices from "./Sections/SectionServices"
import SectionOffice from "./Sections/SectionOffice"
import SectionContact from "./Sections/SectionContact"


class AboutUsPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        <Header
          brand='Material Kit PRO React'
          links={<HeaderLinks dropdownHoverColor='info'/>}
          fixed
          color='transparent'
          changeColorOnScroll={{
            height: 300,
            color: 'info',
          }}
        />
        <Parallax image={require('assets/img/bg9.jpg')} filter='dark'>
          <div className={classes.container}>
            <GridContainer justify='center'>
              <GridItem md={8} sm={8} className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
                <h1 className={classes.title}>About Us</h1>
                <h4>Meet the amazing team behind this project and find out more about how we work.</h4>
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
            <SectionContact/>
          </div>
        </div>
        <Footer
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a href='https://www.creative-tim.com/?ref=mkpr-about-us' className={classes.block} target='_blank'>
                      Creative Tim
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href='https://www.creative-tim.com/presentation?ref=mkpr-about-us'
                      className={classes.block}
                      target='_blank'>
                      About us
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a href='//blog.creative-tim.com/' className={classes.block} target='_blank'>
                      Blog
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href='https://www.creative-tim.com/license?ref=mkpr-about-us'
                      className={classes.block}
                      target='_blank'>
                      Licenses
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()} , made with <Favorite className={classes.icon}/> by{' '}
                <a href='https://www.creative-tim.com?ref=mkpr-about-us' target='_blank'>
                  Creative Tim
                </a>{' '}
                for a better web.
              </div>
            </div>
          }
        />
      </div>
    )
  }
}

AboutUsPage.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(aboutUsStyle)(AboutUsPage)
