import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// nodejs library that concatenates classes
import classNames from 'classnames'
// core components
import Header from 'Components/Header/Header'
import GridContainer from 'Components/Grid/GridContainer'
import GridItem from 'Components/Grid/GridItem'
import Parallax from 'Components/Parallax/Parallax'
import Button from 'Components/CustomButtons/Button'
import Card from 'Components/Card/Card'
import CardBody from 'Components/Card/CardBody'
import CustomInput from 'Components/CustomInput/CustomInput'
import Footer from 'Components/Footer/Footer'
// sections for this page
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import InputAdornment from '@material-ui/core/InputAdornment'
// @material-ui icons
import Mail from '@material-ui/icons/Mail'

import ecommerceHeader from 'Assets/Images/examples/ecommerce-header.jpg'
import face1 from 'Assets/Images/faces/card-profile6-square.jpg'
import face2 from 'Assets/Images/faces/christian.jpg'
import face3 from 'Assets/Images/faces/card-profile4-square.jpg'
import face4 from 'Assets/Images/faces/card-profile1-square.jpg'
import face5 from 'Assets/Images/faces/marc.jpg'
import face6 from 'Assets/Images/faces/kendall.jpg'
import face7 from 'Assets/Images/faces/card-profile5-square.jpg'
import face8 from 'Assets/Images/faces/card-profile2-square.jpg'

import styles from 'Assets/JSS/material-kit-pro-react/views/ecommerceStyle'

import SectionBlog from './Sections/SectionBlog'
import SectionProducts from './Sections/SectionProducts'
import SectionLatestOffers from './Sections/SectionLatestOffers'
import HeaderLinks from '../../Components/Header/HeaderLinks'

const EcommercePage = (props) => {
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
      <Parallax image={require('assets/img/examples/clark-street-merc.jpg')} filter='dark'>
        <div className={classes.container}>
          <GridContainer>
            <GridItem md={8} sm={8} className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
              <div className={classes.brand}>
                <h1 className={classes.title}>Ecommerce Page!</h1>
                <h4>
                  Free global delivery for all products. Use coupon <b>25summer</b> for an extra 25% Off
                </h4>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionLatestOffers />
        <SectionProducts />
      </div>
      <SectionBlog />
      <div
        className={classNames(classes.subscribeLine, classes.subscribeLineImage)}
        style={{ backgroundImage: `url(${ecommerceHeader})` }}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6} className={classNames(classes.mlAuto, classes.mrAuto)}>
              <div className={classes.textCenter}>
                <h3 className={classes.title}>Subscribe to our Newsletter</h3>
                <p className={classes.description}>
                  Join our newsletter and get news in your inbox every week! We hate spam too, so no worries about this.
                </p>
              </div>
              <Card raised className={classes.card}>
                <CardBody className={classes.cardBody}>
                  <form>
                    <GridContainer>
                      <GridItem xs={12} sm={6} md={6} lg={8}>
                        <CustomInput
                          id='emailPreFooter'
                          formControlProps={{
                            fullWidth: true,
                            className: classes.cardForm,
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment position='start'>
                                <Mail />
                              </InputAdornment>
                            ),
                            placeholder: 'Your Email...',
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={6} md={6} lg={4}>
                        <Button color='rose' block className={classes.subscribeButton}>
                          subscribe
                        </Button>
                      </GridItem>
                    </GridContainer>
                  </form>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>

      <Footer
        theme='dark'
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href='http://blog.creative-tim.com/?ref=mkpr-e-ecommerce'
                    target='_blank'
                    className={classes.block}>
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href='https://www.creative-tim.com/presentation?ref=mkpr-e-ecommerce'
                    target='_blank'
                    className={classes.block}>
                    Presentation
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href='#pablito' onClick={(e) => e.preventDefault()} className={classes.block}>
                    Discover
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href='#pablito' onClick={(e) => e.preventDefault()} className={classes.block}>
                    Payment
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href='https://www.creative-tim.com/contact-us?ref=mkpr-e-ecommerce'
                    target='_blank'
                    className={classes.block}>
                    Contact us
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              Copyright &copy; {1900 + new Date().getYear()}{' '}
              <a href='https://www.creative-tim.com?ref=mkpr-e-ecommerce' target='_blank' className={classes.aClasses}>
                Creative Tim
              </a>{' '}
              All Rights Reserved.
            </div>
          </div>
        }>
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
            <h5>About Us</h5>
            <p>
              Creative Tim is a startup that creates design tools that make the web development process faster and
              easier.{' '}
            </p>
            <p>
              We love the web and care deeply for how users interact with a digital product. We power businesses and
              individuals to create better looking web projects around the world.{' '}
            </p>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <h5>Social Feed</h5>
            <div className={classes.socialFeed}>
              <div>
                <i className='fab fa-twitter' />
                <p>How to handle ethical disagreements with your clients.</p>
              </div>
              <div>
                <i className='fab fa-twitter' />
                <p>The tangible benefits of designing at 1x pixel density.</p>
              </div>
              <div>
                <i className='fab fa-facebook-square' />
                <p>A collection of 25 stunning sites that you can use for inspiration.</p>
              </div>
            </div>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <h5>Instagram Feed</h5>
            <div className={classes.galleryFeed}>
              <img src={face1} className={classNames(classes.img, classes.imgRaised, classes.imgRounded)} alt='...' />
              <img src={face2} className={classNames(classes.img, classes.imgRaised, classes.imgRounded)} alt='...' />
              <img src={face3} className={classNames(classes.img, classes.imgRaised, classes.imgRounded)} alt='...' />
              <img src={face4} className={classNames(classes.img, classes.imgRaised, classes.imgRounded)} alt='...' />
              <img src={face5} className={classNames(classes.img, classes.imgRaised, classes.imgRounded)} alt='...' />
              <img src={face6} className={classNames(classes.img, classes.imgRaised, classes.imgRounded)} alt='...' />
              <img src={face7} className={classNames(classes.img, classes.imgRaised, classes.imgRounded)} alt='...' />
              <img src={face8} className={classNames(classes.img, classes.imgRaised, classes.imgRounded)} alt='...' />
            </div>
          </GridItem>
        </GridContainer>
      </Footer>
    </div>
  )
}

EcommercePage.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(EcommercePage)
