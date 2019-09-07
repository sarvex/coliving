import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import GridContainer from 'Components/Grid/GridContainer'
import GridItem from 'Components/Grid/GridItem'
import Parallax from 'Components/Parallax/Parallax'
import NavBar from 'Sections/NavBar'
import Footer from 'Sections/Footer'
import aboutUsStyle from 'Assets/JSS/material-kit-pro-react/views/aboutUsStyle'
import Description from './sections/Description'
import Features from './sections/Features'
import Glimpses from './sections/Glimpses'

const AboutUsPage = (props) => {
  const { classes } = props
  return (
    <div>
      <NavBar />
      <Parallax image={require('Assets/Images/hero-community.webp')} filter='dark'>
        <div className={classes.container}>
          <GridContainer justify='center'>
            <GridItem md={12} sm={12} className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
              <h1 className={classes.title}>Make it happen, together</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Description />
          <Features />
          <Glimpses />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default withStyles(aboutUsStyle)(AboutUsPage)
