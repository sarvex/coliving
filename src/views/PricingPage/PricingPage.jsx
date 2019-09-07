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
import HeaderLinks from 'Components/Header/HeaderLinks'
import Parallax from 'Components/Parallax/Parallax'
import GridContainer from 'Components/Grid/GridContainer'
import GridItem from 'Components/Grid/GridItem'
import Footer from 'Components/Footer/Footer'
// sections for this page
import SectionPricing from './Sections/SectionPricing'
import SectionFeatures from './Sections/SectionFeatures'

import pricingStyle from '../../Assets/JSS/material-kit-pro-react/views/pricingStyle'

const PricingPage = (props) => {
  const { classes } = props
  return (
    <div>
      <Header
        brand='Material Kit PRO React'
        links={<HeaderLinks dropdownHoverColor='info' />}
        fixed
        color='transparent'
        changeColorOnScroll={{
          height: 300,
          color: 'info',
        }}
      />

      <Parallax image={require('assets/img/bg2.jpg')} filter='dark'>
        <div className={classes.container}>
          <GridContainer>
            <GridItem md={8} sm={8} className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
              <h1 className={classes.title}>Let{"'"}s get started</h1>
              <h4>
                To get started, you will need to choose a plan for your needs. You can opt in for the monthly of annual
                options and go with one fo the three listed below.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionPricing />
          <hr />
          <SectionFeatures />
        </div>
      </div>
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a href='https://www.creative-tim.com/?ref=mkpr-pricing' target='_blank' className={classes.block}>
                    Creative Tim
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href='https://www.creative-tim.com/presentation?ref=mkpr-pricing'
                    target='_blank'
                    className={classes.block}>
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href='//blog.creative-tim.com/' className={classes.block}>
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href='https://www.creative-tim.com/license?ref=mkpr-pricing'
                    target='_blank'
                    className={classes.block}>
                    Licenses
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , made with <Favorite className={classes.icon} /> by{' '}
              <a href='https://www.creative-tim.com?ref=mkpr-pricing' target='_blank'>
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

PricingPage.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(pricingStyle)(PricingPage)
