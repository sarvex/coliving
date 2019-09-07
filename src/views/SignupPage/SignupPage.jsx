import React from 'Views/SignupPage/node_modules/react';
// nodejs library to set properties for components
import PropTypes from 'Views/SignupPage/node_modules/prop-types';
// @material-ui/core components
import withStyles from 'Views/SignupPage/node_modules/@material-ui/core/styles/withStyles';
import InputAdornment from 'Views/SignupPage/node_modules/@material-ui/core/InputAdornment';
import Checkbox from 'Views/SignupPage/node_modules/@material-ui/core/Checkbox';
import FormControlLabel from 'Views/SignupPage/node_modules/@material-ui/core/FormControlLabel';
import List from 'Views/SignupPage/node_modules/@material-ui/core/List';
import ListItem from 'Views/SignupPage/node_modules/@material-ui/core/ListItem';
import Icon from 'Views/SignupPage/node_modules/@material-ui/core/Icon';
// @material-ui/icons
import Timeline from 'Views/SignupPage/node_modules/@material-ui/icons/Timeline';
import Code from 'Views/SignupPage/node_modules/@material-ui/icons/Code';
import Group from 'Views/SignupPage/node_modules/@material-ui/icons/Group';
import Face from 'Views/SignupPage/node_modules/@material-ui/icons/Face';
import Email from 'Views/SignupPage/node_modules/@material-ui/icons/Email';
import Check from 'Views/SignupPage/node_modules/@material-ui/icons/Check';
import Favorite from 'Views/SignupPage/node_modules/@material-ui/icons/Favorite';
// core components
import Header from 'Views/SignupPage/node_modules/components/Header/Header';
import HeaderLinks from 'Views/SignupPage/node_modules/components/Header/HeaderLinks';
import Footer from 'Views/SignupPage/node_modules/components/Footer/Footer';
import GridContainer from 'Views/SignupPage/node_modules/Components/Instruction/node_modules/components/Grid/GridContainer';
import GridItem from 'Views/SignupPage/node_modules/Components/Instruction/node_modules/components/Grid/GridItem';
import Button from 'Views/SignupPage/node_modules/Components/CustomUpload/node_modules/components/CustomButtons/Button';
import Card from 'Views/SignupPage/node_modules/Components/CustomTabs/node_modules/components/Card/Card';
import CardBody from 'Views/SignupPage/node_modules/Components/CustomTabs/node_modules/components/Card/CardBody';
import InfoArea from 'Views/SignupPage/node_modules/components/InfoArea/InfoArea';
import CustomInput from 'Views/SignupPage/node_modules/components/CustomInput/CustomInput';

import signupPageStyle from 'Views/SignupPage/node_modules/assets/jss/material-kit-pro-react/views/signupPageStyle';

import image from 'assets/img/bg7.jpg';

class SignUpPage extends React.Component {
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
          links={<HeaderLinks dropdownHoverColor='rose' />}
          {...rest}
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
              <GridItem xs={12} sm={10} md={10}>
                <Card className={classes.cardSignup}>
                  <h2 className={classes.cardTitle}>Register</h2>
                  <CardBody>
                    <GridContainer justify='center'>
                      <GridItem xs={12} sm={5} md={5}>
                        <InfoArea
                          className={classes.infoArea}
                          title='Marketing'
                          description="We've created the marketing campaign of the website. It was a very interesting collaboration."
                          icon={Timeline}
                          iconColor='rose'
                        />
                        <InfoArea
                          className={classes.infoArea}
                          title='Fully Coded in HTML5'
                          description="We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub."
                          icon={Code}
                          iconColor='primary'
                        />
                        <InfoArea
                          className={classes.infoArea}
                          title='Built Audience'
                          description='There is also a Fully Customizable CMS Admin Dashboard for this product.'
                          icon={Group}
                          iconColor='info'
                        />
                      </GridItem>
                      <GridItem xs={12} sm={5} md={5}>
                        <div className={classes.textCenter}>
                          <Button justIcon round color='twitter'>
                            <i className={`${classes.socials  } fab fa-twitter`} />
                          </Button>
                          {` `}
                          <Button justIcon round color='dribbble'>
                            <i className={`${classes.socials  } fab fa-dribbble`} />
                          </Button>
                          {` `}
                          <Button justIcon round color='facebook'>
                            <i className={`${classes.socials  } fab fa-facebook-f`} />
                          </Button>
                          {` `}
                          <h4 className={classes.socialTitle}>or be classical</h4>
                        </div>
                        <form className={classes.form}>
                          <CustomInput
                            formControlProps={{
                              fullWidth: true,
                              className: classes.customFormControlClasses,
                            }}
                            inputProps={{
                              startAdornment: (
                                <InputAdornment position='start' className={classes.inputAdornment}>
                                  <Face className={classes.inputAdornmentIcon} />
                                </InputAdornment>
                              ),
                              placeholder: 'First Name...',
                            }}
                          />
                          <CustomInput
                            formControlProps={{
                              fullWidth: true,
                              className: classes.customFormControlClasses,
                            }}
                            inputProps={{
                              startAdornment: (
                                <InputAdornment position='start' className={classes.inputAdornment}>
                                  <Email className={classes.inputAdornmentIcon} />
                                </InputAdornment>
                              ),
                              placeholder: 'Email...',
                            }}
                          />
                          <CustomInput
                            formControlProps={{
                              fullWidth: true,
                              className: classes.customFormControlClasses,
                            }}
                            inputProps={{
                              startAdornment: (
                                <InputAdornment position='start' className={classes.inputAdornment}>
                                  <Icon className={classes.inputAdornmentIcon}>lock_outline</Icon>
                                </InputAdornment>
                              ),
                              placeholder: 'Password...',
                            }}
                          />
                          <FormControlLabel
                            classes={{
                              label: classes.label,
                            }}
                            control={
                              <Checkbox
                                tabIndex={-1}
                                onClick={() => this.handleToggle(1)}
                                checkedIcon={<Check className={classes.checkedIcon} />}
                                icon={<Check className={classes.uncheckedIcon} />}
                                classes={{
                                  checked: classes.checked,
                                  root: classes.checkRoot,
                                }}
                                checked={this.state.checked.indexOf(1) !== -1}
                              />
                            }
                            label={
                              <span>
                                I agree to the <a href='#pablo'>terms and conditions</a>.
                              </span>
                            }
                          />
                          <div className={classes.textCenter}>
                            <Button round color='primary'>
                              Get started
                            </Button>
                          </div>
                        </form>
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer
            content={
              <div>
                <div className={classes.left}>
                  <List className={classes.list}>
                    <ListItem className={classes.inlineBlock}>
                      <a href='https://www.creative-tim.com/?ref=mkpr-signup' target='_blank' className={classes.block}>
                        Creative Tim
                      </a>
                    </ListItem>
                    <ListItem className={classes.inlineBlock}>
                      <a
                        href='https://www.creative-tim.com/presentation?ref=mkpr-signup'
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
                        href='https://www.creative-tim.com/license?ref=mkpr-signup'
                        target='_blank'
                        className={classes.block}>
                        Licenses
                      </a>
                    </ListItem>
                  </List>
                </div>
                <div className={classes.right}>
                  &copy; {1900 + new Date().getYear()} , made with <Favorite className={classes.icon} /> by{' '}
                  <a href='https://www.creative-tim.com?ref=mkpr-signup' target='_blank'>
                    Creative Tim
                  </a>{' '}
                  for a better web.
                </div>
              </div>
            }
          />
        </div>
      </div>
    );
  }
}

SignUpPage.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(signupPageStyle)(SignUpPage);
