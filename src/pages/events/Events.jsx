import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import GridContainer from 'Components/Grid/GridContainer'
import GridItem from 'Components/Grid/GridItem'
import Parallax from 'Components/Parallax/Parallax'
import aboutUsStyle from 'Assets/JSS/material-kit-pro-react/views/aboutUsStyle'
import NavBar from 'Sections/NavBar'
import Footer from 'Sections/Footer'
import SectionDescription from './sections/Description'
import SectionTeam from './sections/Team'
import SectionServices from './sections/Services'
import SectionOffice from './sections/Office'

const AboutUsPage = (props) => {
  const { classes } = props
  return (
    <div>
      <NavBar />
      <Parallax image={require('Assets/Images/bg9.jpg')} filter='dark'>
        <div className={classes.container}>
          <GridContainer justify='center'>
            <GridItem md={8} sm={8} className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
              <h1 className={classes.title}>Events</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionDescription />
          <SectionTeam />
          <SectionServices />
          <SectionOffice />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default withStyles(aboutUsStyle)(AboutUsPage)
