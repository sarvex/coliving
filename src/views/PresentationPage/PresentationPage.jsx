import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import Header from 'Components/Header/Header'
import HeaderLinks from 'Components/Header/HeaderLinks'
import Parallax from 'Components/Parallax/Parallax'
import Footer from 'Components/Footer/Footer'
import GridContainer from 'Components/Grid/GridContainer'
import GridItem from 'Components/Grid/GridItem'
import Button from 'Components/CustomButtons/Button'

import presentationStyle from 'Assets/JSS/material-kit-pro-react/views/presentationStyle'
import SectionDescription from './Sections/SectionDescription'
import SectionComponents from './Sections/SectionComponents'
import SectionCards from './Sections/SectionCards'
import SectionContent from './Sections/SectionContent'
import SectionSections from './Sections/SectionSections'
import SectionExamples from './Sections/SectionExamples'
import SectionFreeDemo from './Sections/SectionFreeDemo'
import SectionOverview from './Sections/SectionOverview'
import SectionPricing from './Sections/SectionPricing'

const PresentationPage = (props) => {
  const { classes } = props
  return (
    <div>
      <Header
        brand='Material Kit PRO React'
        links={<HeaderLinks dropdownHoverColor='info' />}
        fixed
        color='transparent'
        changeColorOnScroll={{
          height: 400,
          color: 'info',
        }}
      />
      <Parallax image={require('assets/img/bg4.jpg')} className={classes.parallax}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1>
                  Material Kit React
                  <span className={classes.proBadge}>PRO</span>
                </h1>
                <h3 className={classes.title}>A Badass Material-UI Kit based on Material Design.</h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionDescription />
        <SectionComponents />
        <SectionCards />
        <SectionContent />
        <SectionSections />
        <SectionExamples />
        <SectionFreeDemo />
        <SectionOverview />
      </div>
      <SectionPricing />
      <Footer
        theme='white'
        content={
          <div>
            <div className={classes.left}>
              <a
                href='https://www.creative-tim.com/product/material-kit-pro-react?ref=mkpr-presentation'
                className={classes.footerBrand}>
                Material Kit PRO React
              </a>
            </div>
            <div className={classes.pullCenter}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a href='https://www.creative-tim.com/?ref=mkpr-presentation' className={classes.block}>
                    Creative Tim
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href='https://www.creative-tim.com/presentation?ref=mkpr-presentation' className={classes.block}>
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href='//blog.creative-tim.com/' className={classes.block}>
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href='https://www.creative-tim.com/license?ref=mkpr-presentation' className={classes.block}>
                    Licenses
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.rightLinks}>
              <ul>
                <li>
                  <Button
                    href='https://twitter.com/CreativeTim?ref=creativetim'
                    target='_blank'
                    color='twitter'
                    justIcon
                    simple>
                    <i className='fab fa-twitter' />
                  </Button>
                </li>
                <li>
                  <Button
                    href='https://dribbble.com/creativetim?ref=creativetim'
                    target='_blank'
                    color='dribbble'
                    justIcon
                    simple>
                    <i className='fab fa-dribbble' />
                  </Button>
                </li>
                <li>
                  <Button
                    href='https://instagram.com/CreativeTimOfficial?ref=creativetim'
                    target='_blank'
                    color='instagram'
                    justIcon
                    simple>
                    <i className='fab fa-instagram' />
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        }
      />
    </div>
  )
}

PresentationPage.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(presentationStyle)(PresentationPage)
