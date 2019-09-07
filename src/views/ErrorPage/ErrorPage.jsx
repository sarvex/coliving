import React from 'Views/ErrorPage/node_modules/react';
// nodejs library to set properties for components
import PropTypes from 'Views/ErrorPage/node_modules/prop-types';
// @material-ui/core components
import withStyles from 'Views/ErrorPage/node_modules/@material-ui/core/styles/withStyles';
import List from 'Views/ErrorPage/node_modules/@material-ui/core/List';
import ListItem from 'Views/ErrorPage/node_modules/@material-ui/core/ListItem';
// @material-ui/icons
import Favorite from 'Views/ErrorPage/node_modules/@material-ui/icons/Favorite';
// core components
import Header from 'Views/ErrorPage/node_modules/components/Header/Header';
import HeaderLinks from 'Views/ErrorPage/node_modules/components/Header/HeaderLinks';
import Footer from 'Views/ErrorPage/node_modules/components/Footer/Footer';
import GridContainer from 'Views/ErrorPage/node_modules/Components/Instruction/node_modules/components/Grid/GridContainer';
import GridItem from 'Views/ErrorPage/node_modules/Components/Instruction/node_modules/components/Grid/GridItem';

import errorPageStyle from 'Views/ErrorPage/node_modules/assets/jss/material-kit-pro-react/views/errorPageStyles';

import image from 'assets/img/clint-mckoy.jpg';

class ErrorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [1],
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          absolute
          color='transparent'
          brand='Material Kit PRO React'
          links={<HeaderLinks dropdownHoverColor='dark' />}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: `url(${  image  })`,
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
          }}>
          {/* <div className={classes.container}> */}
          <div className={classes.contentCenter}>
            <GridContainer>
              <GridItem md={12}>
                <h1 className={classes.title}>404</h1>
                <h2 className={classes.subTitle}>Page not found :(</h2>
                <h4 className={classes.description}>Ooooups! Looks like you got lost.</h4>
              </GridItem>
            </GridContainer>
          </div>
          {/* </div> */}
        </div>
        <Footer
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a href='https://www.creative-tim.com/?ref=mkpr-error' target='_blank' className={classes.block}>
                      Creative Tim
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href='https://www.creative-tim.com/presentation/?ref=mkpr-error'
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
                      href='https://www.creative-tim.com/license/?ref=mkpr-error'
                      target='_blank'
                      className={classes.block}>
                      Licenses
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()} , made with <Favorite className={classes.icon} /> by{' '}
                <a href='https://www.creative-tim.com/?ref=mkpr-error' target='_blank'>
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

ErrorPage.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(errorPageStyle)(ErrorPage);
