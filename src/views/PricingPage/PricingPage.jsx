import React from 'Views/PricingPage/node_modules/react';
// nodejs library to set properties for components
import PropTypes from 'Views/PricingPage/node_modules/prop-types';
// nodejs library that concatenates classes
import classNames from 'Views/PricingPage/node_modules/classnames';
// @material-ui/core components
import withStyles from 'Views/PricingPage/node_modules/@material-ui/core/styles/withStyles';
import List from 'Views/PricingPage/node_modules/@material-ui/core/List';
import ListItem from 'Views/PricingPage/node_modules/@material-ui/core/ListItem';
// @material-ui/icons
import Favorite from 'Views/PricingPage/node_modules/@material-ui/icons/Favorite';
// core components
import Header from 'Views/PricingPage/node_modules/components/Header/Header';
import HeaderLinks from 'Views/PricingPage/node_modules/components/Header/HeaderLinks';
import Parallax from 'Views/PricingPage/node_modules/components/Parallax/Parallax';
import GridContainer from 'Views/PricingPage/node_modules/Components/Instruction/node_modules/components/Grid/GridContainer';
import GridItem from 'Views/PricingPage/node_modules/Components/Instruction/node_modules/components/Grid/GridItem';
import Footer from 'Views/PricingPage/node_modules/components/Footer/Footer';
// sections for this page
import SectionPricing from "./Sections/SectionPricing";
import SectionFeatures from "./Sections/SectionFeatures";

import pricingStyle from '../../Assets/JSS/material-kit-pro-react/views/pricingStyle';

class PricingPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  render() {
    const { classes } = this.props;
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
                  To get started, you will need to choose a plan for your needs. You can opt in for the monthly of
                  annual options and go with one fo the three listed below.
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
    );
  }
}

PricingPage.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(pricingStyle)(PricingPage);
