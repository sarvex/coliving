import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
import Email from '@material-ui/icons/Email';
import Face from '@material-ui/icons/Face';
import GridContainer from 'Components/Grid/GridContainer';
import GridItem from 'Components/Grid/GridItem';
import Button from 'Components/CustomButtons/Button';
import Card from 'Components/Card/Card';
import CardBody from 'Components/Card/CardBody';
import CardHeader from 'Components/Card/CardHeader';
import CustomInput from 'Components/CustomInput/CustomInput';

import loginPageStyle from 'Assets/JSS/material-kit-pro-react/views/loginPageStyle';
import NavBar from 'Sections/NavBar';
import Footer from 'Sections/Footer';

import image from 'Assets/Images/bg7.jpg';

class Login extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  render() {
    const { classes } = this.props;
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
                          <i className='fab fa-twitter'/>
                        </Button>
                        <Button
                          justIcon
                          color='transparent'
                          className={classes.iconButtons}
                          onClick={e => e.preventDefault()}>
                          <i className='fab fa-facebook'/>
                        </Button>
                        <Button
                          justIcon
                          color='transparent'
                          className={classes.iconButtons}
                          onClick={e => e.preventDefault()}>
                          <i className='fab fa-google-plus-g'/>
                        </Button>
                      </div>
                    </CardHeader>
                    <p className={`${classes.description} ${classes.textCenter}`}>Or Be Classical</p>
                    <CardBody signup>
                      <CustomInput
                        id='first'
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          placeholder: 'Name...',
                          type: 'text',
                          startAdornment: (
                            <InputAdornment position='start'>
                              <Face className={classes.inputIconsColor}/>
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
                              <Email className={classes.inputIconsColor}/>
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
        </div>
        <Footer/>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(Login);
