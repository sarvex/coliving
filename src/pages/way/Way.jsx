import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import GridContainer from 'Components/Grid/GridContainer'
import GridItem from 'Components/Grid/GridItem'
import Parallax from 'Components/Parallax/Parallax'

import NavBar from 'Sections/NavBar'
import aboutUsStyle from 'Assets/JSS/material-kit-pro-react/views/aboutUsStyle'
import SectionDescription from './sections/Description'
import SectionApps from './sections/Apps'
import SectionHome from './sections/Home'
import SectionHeart from './sections/Heart'
import SectionFeatures from './sections/Features'

import Footer from 'Sections/Footer'

const AboutUsPage = (props) => {
  const { classes } = props
  return (
    <div>
      <NavBar />
      <Parallax image={require('Assets/Images/way-hero-cover.webp')} filter='dark'>
        <div className={classes.container}>
          <GridContainer justify='center'>
            <GridItem md={12} sm={12} className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
              <h1 className={classes.title}>Think of us like fun social camps</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionDescription />
      </div>
      <SectionHome />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionApps />
      </div>
      <SectionHeart />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionFeatures />
      </div>
      <Footer />
    </div>
  )
}

export default withStyles(aboutUsStyle)(AboutUsPage)
