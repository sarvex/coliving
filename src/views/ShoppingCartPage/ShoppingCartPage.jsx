import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Tooltip from '@material-ui/core/Tooltip'
import Favorite from '@material-ui/icons/Favorite'
import Close from '@material-ui/icons/Close'
import Remove from '@material-ui/icons/Remove'
import Add from '@material-ui/icons/Add'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import Header from 'Components/Header/Header'
import HeaderLinks from 'Components/Header/HeaderLinks'
import Parallax from 'Components/Parallax/Parallax'
import GridContainer from 'Components/Grid/GridContainer'
import GridItem from 'Components/Grid/GridItem'
import Footer from 'Components/Footer/Footer'
import Table from 'Components/Table/Table'
import Button from 'Components/CustomButtons/Button'
import Card from 'Components/Card/Card'
import CardBody from 'Components/Card/CardBody'

import shoppingCartStyle from 'Assets/JSS/material-kit-pro-react/views/shoppingCartStyle'

import product1 from 'Assets/Images/product1.jpg'
import product2 from 'Assets/Images/product2.jpg'
import product3 from 'Assets/Images/product3.jpg'

const ShoppingCartPage = (props) => {
  const { classes } = props
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

      <Parallax image={require('assets/img/examples/bg2.jpg')} filter='dark'>
        <div className={classes.container}>
          <GridContainer>
            <GridItem md={8} sm={8} className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
              <h2 className={classes.title}>Shopping Page</h2>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Card plain>
            <CardBody plain>
              <h3 className={classes.cardTitle}>Shopping Cart</h3>
              <Table
                tableHead={['', 'PRODUCT', 'COLOR', 'SIZE', 'PRICE', 'QTY', 'AMOUNT', '']}
                tableData={[
                  [
                    <div className={classes.imgContainer} key={1}>
                      <img src={product1} alt='...' className={classes.img}/>
                    </div>,
                    <span key={1}>
                        <a href='#jacket' className={classes.tdNameAnchor}>
                          Spring Jacket
                        </a>
                        <br/>
                        <small className={classes.tdNameSmall}>by Dolce&amp;Gabbana</small>
                      </span>,
                    'Red',
                    'M',
                    <span key={1}>
                        <small className={classes.tdNumberSmall}>€</small> 549
                      </span>,
                    <span key={1}>
                        1{` `}
                      <div className={classes.buttonGroup}>
                          <Button color='info' size='sm' round className={classes.firstButton}>
                            <Remove/>
                          </Button>
                          <Button color='info' size='sm' round className={classes.lastButton}>
                            <Add/>
                          </Button>
                        </div>
                      </span>,
                    <span key={1}>
                        <small className={classes.tdNumberSmall}>€</small> 549
                      </span>,
                    <Tooltip
                      key={1}
                      id='close1'
                      title='Remove item'
                      placement='left'
                      classes={{ tooltip: classes.tooltip }}>
                      <Button link className={classes.actionButton}>
                        <Close/>
                      </Button>
                    </Tooltip>,
                  ],
                  [
                    <div className={classes.imgContainer} key={1}>
                      <img src={product2} alt='...' className={classes.img}/>
                    </div>,
                    <span key={1}>
                        <a href='#jacket' className={classes.tdNameAnchor}>
                          Short Pants{' '}
                        </a>
                        <br/>
                        <small className={classes.tdNameSmall}>by Gucci</small>
                      </span>,
                    'Purple',
                    'M',
                    <span key={1}>
                        <small className={classes.tdNumberSmall}>€</small> 499
                      </span>,
                    <span key={1}>
                        2{` `}
                      <div className={classes.buttonGroup}>
                          <Button color='info' size='sm' round className={classes.firstButton}>
                            <Remove/>
                          </Button>
                          <Button color='info' size='sm' round className={classes.lastButton}>
                            <Add/>
                          </Button>
                        </div>
                      </span>,
                    <span key={1}>
                        <small className={classes.tdNumberSmall}>€</small> 998
                      </span>,
                    <Tooltip
                      key={1}
                      id='close2'
                      title='Remove item'
                      placement='left'
                      classes={{ tooltip: classes.tooltip }}>
                      <Button link className={classes.actionButton}>
                        <Close/>
                      </Button>
                    </Tooltip>,
                  ],
                  [
                    <div className={classes.imgContainer} key={1}>
                      <img src={product3} alt='...' className={classes.img}/>
                    </div>,
                    <span key={1}>
                        <a href='#jacket' className={classes.tdNameAnchor}>
                          Pencil Skirt
                        </a>
                        <br/>
                        <small className={classes.tdNameSmall}>by Valentino</small>
                      </span>,
                    'White',
                    'XL',
                    <span key={1}>
                        <small className={classes.tdNumberSmall}>€</small> 799
                      </span>,
                    <span key={1}>
                        1{` `}
                      <div className={classes.buttonGroup}>
                          <Button color='info' size='sm' round className={classes.firstButton}>
                            <Remove/>
                          </Button>
                          <Button color='info' size='sm' round className={classes.lastButton}>
                            <Add/>
                          </Button>
                        </div>
                      </span>,
                    <span key={1}>
                        <small className={classes.tdNumberSmall}>€</small> 799
                      </span>,
                    <Tooltip
                      key={1}
                      id='close3'
                      title='Remove item'
                      placement='left'
                      classes={{ tooltip: classes.tooltip }}>
                      <Button link className={classes.actionButton}>
                        <Close/>
                      </Button>
                    </Tooltip>,
                  ],
                  {
                    purchase: true,
                    colspan: '3',
                    amount: (
                      <span>
                          <small>€</small>2,346
                        </span>
                    ),
                    col: {
                      colspan: 3,
                      text: (
                        <Button color='info' round>
                          Complete Purchase <KeyboardArrowRight/>
                        </Button>
                      ),
                    },
                  },
                ]}
                tableShopping
                customHeadCellClasses={[
                  classes.textCenter,
                  classes.description,
                  classes.description,
                  classes.textRight,
                  classes.textRight,
                  classes.textRight,
                ]}
                customHeadClassesForCells={[0, 2, 3, 4, 5, 6]}
                customCellClasses={[
                  classes.tdName,
                  classes.customFont,
                  classes.customFont,
                  classes.tdNumber,
                  `${classes.tdNumber} ${classes.tdNumberAndButtonGroup}`,
                  `${classes.tdNumber} ${classes.textCenter}`,
                ]}
                customClassesForCells={[1, 2, 3, 4, 5, 6]}
              />
            </CardBody>
          </Card>
        </div>
      </div>
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href='https://www.creative-tim.com/?ref=mkpr-shopping-cart'
                    target='_blank'
                    className={classes.block}>
                    Creative Tim
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href='https://www.creative-tim.com/presentation?ref=mkpr-shopping-cart'
                    target='_blank'
                    className={classes.block}>
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href='https://blog.creative-tim.com/?ref=mkpr-shopping-cart'
                    target='_blank'
                    className={classes.block}>
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href='https://www.creative-tim.com/license?ref=mkpr-shopping-cart'
                    target='_blank'
                    className={classes.block}>
                    Licenses
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , made with <Favorite className={classes.icon}/> by{' '}
              <a href='https://www.creative-tim.com?ref=mkpr-shopping-cart' target='_blank'>
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

export default withStyles(shoppingCartStyle)(ShoppingCartPage)
