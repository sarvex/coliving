import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// nodejs library that concatenates classes
import classNames from 'classnames'
// react component used to create nice image meadia player
import ImageGallery from 'react-image-gallery'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
// @material-ui/icons
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import LocalShipping from '@material-ui/icons/LocalShipping'
import VerifiedUser from '@material-ui/icons/VerifiedUser'
import Favorite from '@material-ui/icons/Favorite'
// core components
import Header from 'Components/Header/Header'
import HeaderLinks from 'Components/Header/HeaderLinks'
import Parallax from 'Components/Parallax/Parallax'
import GridContainer from 'Components/Grid/GridContainer'
import GridItem from 'Components/Grid/GridItem'
import Footer from 'Components/Footer/Footer'
import Button from 'Components/CustomButtons/Button'
import Accordion from 'Components/Accordion/Accordion'
import InfoArea from 'Components/InfoArea/InfoArea'
import Card from 'Components/Card/Card'
import CardHeader from 'Components/Card/CardHeader'
import CardBody from 'Components/Card/CardBody'
import CardFooter from 'Components/Card/CardFooter'
import Tooltip from '@material-ui/core/Tooltip'

import productStyle from 'Assets/JSS/material-kit-pro-react/views/productStyle'

// images
import cardProduct1 from 'Assets/Images/examples/card-product1.jpg'
import cardProduct3 from 'Assets/Images/examples/card-product3.jpg'
import cardProduct4 from 'Assets/Images/examples/card-product4.jpg'
import cardProduct2 from 'Assets/Images/examples/card-product2.jpg'
import product1 from 'Assets/Images/examples/product1.jpg'
import product2 from 'Assets/Images/examples/product2.jpg'
import product3 from 'Assets/Images/examples/product3.jpg'
import product4 from 'Assets/Images/examples/product4.jpg'

class ProductPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      colorSelect: '0',
      sizeSelect: '0',
    }
  }

  handleSelect = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const { classes } = this.props
    const images = [
      {
        original: product3,
        thumbnail: product3,
      },
      {
        original: product4,
        thumbnail: product4,
      },
      {
        original: product1,
        thumbnail: product1,
      },
      {
        original: product2,
        thumbnail: product2,
      },
    ]
    return (
      <div className={classes.productPage}>
        <Header
          brand='Material Kit PRO React'
          links={<HeaderLinks dropdownHoverColor='rose' />}
          fixed
          color='transparent'
          changeColorOnScroll={{
            height: 100,
            color: 'rose',
          }}
        />
        <Parallax image={require('assets/img/bg6.jpg')} filter='rose' className={classes.pageHeader}>
          <div className={classes.container}>
            <GridContainer className={classes.titleRow}>
              <GridItem md={4} className={classes.mlAuto}>
                <Button color='white' className={classes.floatRight}>
                  <ShoppingCart /> 0 items
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.section, classes.sectionGray)}>
          <div className={classes.container}>
            <div className={classNames(classes.main, classes.mainRaised)}>
              <GridContainer>
                <GridItem md={6} sm={6}>
                  <ImageGallery showFullscreenButton={false} showPlayButton={false} startIndex={3} items={images} />
                </GridItem>
                <GridItem md={6} sm={6}>
                  <h2 className={classes.title}>Becky Silk Blazer</h2>
                  <h3 className={classes.mainPrice}>$335</h3>
                  <Accordion
                    active={0}
                    activeColor='rose'
                    collapses={[
                      {
                        title: 'Description',
                        content: (
                          <p>
                            Eres{"'"} daring {"'"}Grigri Fortune{"'"} swimsuit has the fit and coverage of a bikini in a
                            one-piece silhouette. This fuchsia style is crafted from the label{"'"}s sculpting peau
                            douce fabric and has flattering cutouts through the torso and back. Wear yours with mirrored
                            sunglasses on vacation.
                          </p>
                        ),
                      },
                      {
                        title: 'Designer Information',
                        content: (
                          <p>
                            An infusion of West Coast cool and New York attitude, Rebecca Minkoff is synonymous with It
                            girl style. Minkoff burst on the fashion scene with her best-selling {"'"}Morning After Bag
                            {"'"} and later expanded her offering with the Rebecca Minkoff Collection - a range of luxe
                            city staples with a {'"'}downtown romantic{'"'} theme.
                          </p>
                        ),
                      },
                      {
                        title: 'Details and Care',
                        content: (
                          <ul>
                            <li>Storm and midnight-blue stretch cotton-blend</li>
                            <li>
                              Notch lapels, functioning buttoned cuffs, two front flap pockets, single vent, internal
                              pocket
                            </li>
                            <li>Two button fastening</li>
                            <li>84% cotton, 14% nylon, 2% elastane</li>
                            <li>Dry clean</li>
                          </ul>
                        ),
                      },
                    ]}
                  />
                  <GridContainer className={classes.pickSize}>
                    <GridItem md={6} sm={6}>
                      <label>Select color</label>
                      <FormControl fullWidth className={classes.selectFormControl}>
                        <Select
                          MenuProps={{
                            className: classes.selectMenu,
                          }}
                          classes={{
                            select: classes.select,
                          }}
                          value={this.state.colorSelect}
                          onChange={this.handleSelect}
                          inputProps={{
                            name: 'colorSelect',
                            id: 'color-select',
                          }}>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected,
                            }}
                            value='0'>
                            Rose
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected,
                            }}
                            value='1'>
                            Gray
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected,
                            }}
                            value='2'>
                            White
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </GridItem>
                    <GridItem md={6} sm={6}>
                      <label>Select size</label>
                      <FormControl fullWidth className={classes.selectFormControl}>
                        <Select
                          MenuProps={{
                            className: classes.selectMenu,
                          }}
                          classes={{
                            select: classes.select,
                          }}
                          value={this.state.sizeSelect}
                          onChange={this.handleSelect}
                          inputProps={{
                            name: 'sizeSelect',
                            id: 'size-select',
                          }}>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected,
                            }}
                            value='0'>
                            Small
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected,
                            }}
                            value='1'>
                            Medium
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected,
                            }}
                            value='2'>
                            Large
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </GridItem>
                  </GridContainer>
                  <GridContainer className={classes.pullRight}>
                    <Button round color='rose'>
                      Add to Cart &nbsp; <ShoppingCart />
                    </Button>
                  </GridContainer>
                </GridItem>
              </GridContainer>
            </div>
            <div className={classNames(classes.features, classes.textCenter)}>
              <GridContainer>
                <GridItem md={4} sm={4}>
                  <InfoArea
                    title='2 Days Delivery'
                    description='Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.'
                    icon={LocalShipping}
                    iconColor='info'
                    vertical
                  />
                </GridItem>
                <GridItem md={4} sm={4}>
                  <InfoArea
                    title='Refundable Policy'
                    description='Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.'
                    icon={VerifiedUser}
                    iconColor='success'
                    vertical
                  />
                </GridItem>
                <GridItem md={4} sm={4}>
                  <InfoArea
                    title='Popular Item'
                    description='Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.'
                    icon={Favorite}
                    iconColor='rose'
                    vertical
                  />
                </GridItem>
              </GridContainer>
            </div>
            <div className={classes.relatedProducts}>
              <h3 className={classNames(classes.title, classes.textCenter)}>You may also be interested in:</h3>
              <GridContainer>
                <GridItem sm={6} md={3}>
                  <Card product>
                    <CardHeader image>
                      <a href='#pablo'>
                        <img src={cardProduct1} alt='cardProduct' />
                      </a>
                    </CardHeader>
                    <CardBody>
                      <h6 className={classNames(classes.cardCategory, classes.textRose)}>Trending</h6>
                      <h4 className={classes.cardTitle}>Dolce & Gabbana</h4>
                      <div className={classes.cardDescription}>
                        Dolce & Gabbana{"'"}s {"'"}Greta{"'"} tote has been crafted in Italy from hard-wearing red
                        textured-leather.
                      </div>
                    </CardBody>
                    <CardFooter className={classes.justifyContentBetween}>
                      <div className={classes.price}>
                        <h4>$1,459</h4>
                      </div>
                      <div className={classes.stats}>
                        <Tooltip
                          id='tooltip-top'
                          title='Save to Wishlist'
                          placement='top'
                          classes={{ tooltip: classes.tooltip }}>
                          <Button justIcon color='rose' simple>
                            <Favorite />
                          </Button>
                        </Tooltip>
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
                <GridItem sm={6} md={3}>
                  <Card product>
                    <CardHeader image>
                      <a href='#pablo'>
                        <img src={cardProduct3} alt='cardProduct3' />
                      </a>
                    </CardHeader>
                    <CardBody>
                      <h6 className={classes.cardCategory}>Popular</h6>
                      <h4 className={classes.cardTitle}>Balmain</h4>
                      <div className={classes.cardDescription}>
                        Balmain{"'"}s mid-rise skinny jeans are cut with stretch to ensure they retain their second-skin
                        fit but move comfortably.
                      </div>
                    </CardBody>
                    <CardFooter className={classes.justifyContentBetween}>
                      <div className={classes.price}>
                        <h4>$459</h4>
                      </div>
                      <div className={classes.stats}>
                        <Tooltip
                          id='tooltip-top'
                          title='Save to Wishlist'
                          placement='top'
                          classes={{ tooltip: classes.tooltip }}>
                          <Button justIcon link>
                            <Favorite />
                          </Button>
                        </Tooltip>
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
                <GridItem sm={6} md={3}>
                  <Card product>
                    <CardHeader image>
                      <a href='#pablo'>
                        <img src={cardProduct4} alt='cardProduct4' />
                      </a>
                    </CardHeader>
                    <CardBody>
                      <h6 className={classes.cardCategory}>Popular</h6>
                      <h4 className={classes.cardTitle}>Balenciaga</h4>
                      <div className={classes.cardDescription}>
                        Balenciaga{"'"}s black textured-leather wallet is finished with the label{"'"}s iconic {"'"}
                        Giant{"'"} studs. This is where you can...
                      </div>
                    </CardBody>
                    <CardFooter className={classes.justifyContentBetween}>
                      <div className={classes.price}>
                        <h4>$590</h4>
                      </div>
                      <div className={classes.stats}>
                        <Tooltip
                          id='tooltip-top'
                          title='Save to Wishlist'
                          placement='top'
                          classes={{ tooltip: classes.tooltip }}>
                          <Button justIcon color='rose' simple>
                            <Favorite />
                          </Button>
                        </Tooltip>
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
                <GridItem sm={6} md={3}>
                  <Card product>
                    <CardHeader image>
                      <a href='#pablo'>
                        <img src={cardProduct2} alt='cardProduct2' />
                      </a>
                    </CardHeader>
                    <CardBody>
                      <h6 className={classNames(classes.cardCategory, classes.textRose)}>Trending</h6>
                      <h4 className={classes.cardTitle}>Dolce & Gabbana</h4>
                      <div className={classes.cardDescription}>
                        Dolce & Gabbana{"'"}s {"'"}Greta{"'"} tote has been crafted in Italy from hard-wearing red
                        textured-leather.
                      </div>
                    </CardBody>
                    <CardFooter className={classes.justifyContentBetween}>
                      <div className={classes.price}>
                        <h4>$1,459</h4>
                      </div>
                      <div className={classes.stats}>
                        <Tooltip
                          id='tooltip-top'
                          title='Save to Wishlist'
                          placement='top'
                          classes={{ tooltip: classes.tooltip }}>
                          <Button justIcon link>
                            <Favorite />
                          </Button>
                        </Tooltip>
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer
          // theme="dark"
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
                <a href='https://www.creative-tim.com?ref=mkpr-pricing' target='_blank' className={classes.aClasses}>
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

ProductPage.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(productStyle)(ProductPage)
