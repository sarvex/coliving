import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Icon from '@material-ui/core/Icon';
import Timeline from '@material-ui/icons/Timeline';
import Code from '@material-ui/icons/Code';
import Group from '@material-ui/icons/Group';
import Face from '@material-ui/icons/Face';
import Email from '@material-ui/icons/Email';
import Check from '@material-ui/icons/Check';
import GridContainer from 'Components/Grid/GridContainer';
import GridItem from 'Components/Grid/GridItem';
import Button from 'Components/CustomButtons/Button';
import Card from 'Components/Card/Card';
import CardBody from 'Components/Card/CardBody';
import InfoArea from 'Components/InfoArea/InfoArea';
import CustomInput from 'Components/CustomInput/CustomInput';

import signupPageStyle from 'Assets/JSS/material-kit-pro-react/views/signupPageStyle';
import NavBar from 'Sections/NavBar';
import Footer from 'Sections/Footer';

import image from 'Assets/Images/bg7.jpg';

class Signup extends React.Component {
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
        <NavBar/>
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: `url(${image})`,
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
                            <i className={`${classes.socials} fab fa-twitter`}/>
                          </Button>
                          {` `}
                          <Button justIcon round color='dribbble'>
                            <i className={`${classes.socials} fab fa-dribbble`}/>
                          </Button>
                          {` `}
                          <Button justIcon round color='facebook'>
                            <i className={`${classes.socials} fab fa-facebook-f`}/>
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
                                  <Face className={classes.inputAdornmentIcon}/>
                                </InputAdornment>
                              ),
                              placeholder: 'Name...',
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
                                  <Email className={classes.inputAdornmentIcon}/>
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
                                checkedIcon={<Check className={classes.checkedIcon}/>}
                                icon={<Check className={classes.uncheckedIcon}/>}
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
          <Footer/>
        </div>
      </div>
    );
  }
}

export default withStyles(signupPageStyle)(Signup);
