import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import GridContainer from 'Components/Grid/GridContainer'
import GridItem from 'Components/Grid/GridItem'
import Parallax from 'Components/Parallax/Parallax'

import landingPageStyle from 'Assets/JSS/material-kit-pro-react/views/landingPageStyle'

import NavBar from 'Sections/NavBar'
import Footer from 'Sections/Footer'
import SectionProduct from './sections/Product'
import SectionTeam from './sections/Team'
import SectionWork from './sections/Work'

const LandingPage = (props) => {
  const { classes, ...rest } = props
  return (
    <div>
      <NavBar />
      <Parallax image={require('Assets/Images/bg8.jpg')} filter='dark'>
        <div className={classes.container}>
          <GridContainer justify='center'>
            <GridItem xs={12} sm={6} md={6}>
              <h1 className={classes.title}>Apps</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionProduct />
          <SectionTeam />
          <SectionWork />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default withStyles(landingPageStyle)(LandingPage)
