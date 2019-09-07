import React from 'Views/LoginPage/node_modules/react';
// nodejs library to set properties for components
import PropTypes from 'Views/LoginPage/node_modules/prop-types';
// @material-ui/core components
import withStyles from 'Views/LoginPage/node_modules/@material-ui/core/styles/withStyles';
import InputAdornment from 'Views/LoginPage/node_modules/@material-ui/core/InputAdornment';
import List from 'Views/LoginPage/node_modules/@material-ui/core/List';
import ListItem from 'Views/LoginPage/node_modules/@material-ui/core/ListItem';
import Icon from 'Views/LoginPage/node_modules/@material-ui/core/Icon';
// @material-ui/icons
import Email from 'Views/LoginPage/node_modules/@material-ui/icons/Email';
import Favorite from 'Views/LoginPage/node_modules/@material-ui/icons/Favorite';
import Face from 'Views/LoginPage/node_modules/@material-ui/icons/Face';
// core components
import Header from 'Views/LoginPage/node_modules/components/Header/Header';
import HeaderLinks from 'Views/LoginPage/node_modules/components/Header/HeaderLinks';
import Footer from 'Views/LoginPage/node_modules/components/Footer/Footer';
import GridContainer from 'Views/LoginPage/node_modules/Components/Instruction/node_modules/components/Grid/GridContainer';
import GridItem from 'Views/LoginPage/node_modules/Components/Instruction/node_modules/components/Grid/GridItem';
import Button from 'Views/LoginPage/node_modules/Components/CustomUpload/node_modules/components/CustomButtons/Button';
import Card from 'Views/LoginPage/node_modules/Components/CustomTabs/node_modules/components/Card/Card';
import CardBody from 'Views/LoginPage/node_modules/Components/CustomTabs/node_modules/components/Card/CardBody';
import CardHeader from 'Views/LoginPage/node_modules/Components/CustomTabs/node_modules/components/Card/CardHeader';
import CustomInput from 'Views/LoginPage/node_modules/components/CustomInput/CustomInput';

import loginPageStyle from 'Views/LoginPage/node_modules/assets/jss/material-kit-pro-react/views/loginPageStyle';

import image from 'assets/img/bg7.jpg';

class LoginPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header
          absolute
          color='transparent'
          brand='Material Kit PRO React'
          links={<HeaderLinks dropdownHoverColor='info' />}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: `url(${  image  })`,
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
          }}>
          <div className={classes.container}>
            <GridContainer justify='center'>
              <GridItem xs={12} sm={12} md={4}>
                <Card>
                  <form className={classes.form}>
                    <CardHeader color='primary' signup className={classes.cardHeader}>
                      <h4 className={classes.cardTitle}>Login</h4>
                      <div className={classes.socialLine}>
                        <Button
                          justIcon
                          color='transparent'
                          className={classes.iconButtons}
                          onClick={e => e.preventDefault()}>
                          <i className='fab fa-twitter' />
                        </Button>
                        <Button
                          justIcon
                          color='transparent'
                          className={classes.iconButtons}
                          onClick={e => e.preventDefault()}>
                          <i className='fab fa-facebook' />
                        </Button>
                        <Button
                          justIcon
                          color='transparent'
                          className={classes.iconButtons}
                          onClick={e => e.preventDefault()}>
                          <i className='fab fa-google-plus-g' />
                        </Button>
                      </div>
                    </CardHeader>
                    <p className={`${classes.description  } ${  classes.textCenter}`}>Or Be Classical</p>
                    <CardBody signup>
                      <CustomInput
                        id='first'
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          placeholder: 'First Name...',
                          type: 'text',
                          startAdornment: (
                            <InputAdornment position='start'>
                              <Face className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <CustomInput
                        id='email'
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          placeholder: 'Email...',
                          type: 'email',
                          startAdornment: (
                            <InputAdornment position='start'>
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <CustomInput
                        id='pass'
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          placeholder: 'Password',
                          type: 'password',
                          startAdornment: (
                            <InputAdornment position='start'>
                              <Icon className={classes.inputIconsColor}>lock_utline</Icon>
                            </InputAdornment>
                          ),
                          autoComplete: 'off',
                        }}
                      />
                    </CardBody>
                    <div className={classes.textCenter}>
                      <Button simple color='primary' size='lg'>
                        Get started
                      </Button>
                    </div>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer
            className={classes.footer}
            content={
              <div>
                <div className={classes.left}>
                  <List className={classes.list}>
                    <ListItem className={classes.inlineBlock}>
                      <a href='https://www.creative-tim.com/?ref=mkpr-login' target='_blank' className={classes.block}>
                        Creative Tim
                      </a>
                    </ListItem>
                    <ListItem className={classes.inlineBlock}>
                      <a
                        href='https://www.creative-tim.com/presentation?ref=mkpr-login'
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
                        href='https://www.creative-tim.com/license?ref=mkpr-login'
                        target='_blank'
                        className={classes.block}>
                        Licenses
                      </a>
                    </ListItem>
                  </List>
                </div>
                <div className={classes.right}>
                  &copy; {1900 + new Date().getYear()} , made with <Favorite className={classes.icon} /> by{' '}
                  <a href='https://www.creative-tim.com?ref=mkpr-login' target='_blank'>
                    Creative Tim
                  </a>{' '}
                  for a better web
                </div>
              </div>
            }
          />
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(loginPageStyle)(LoginPage);
