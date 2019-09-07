import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import GridContainer from 'Components/Grid/GridContainer';
import GridItem from 'Components/Grid/GridItem';
import Card from 'Components/Card/Card';
import CardAvatar from 'Components/Card/CardAvatar';
import CardHeader from 'Components/Card/CardHeader';
import CardBody from 'Components/Card/CardBody';
import CardFooter from 'Components/Card/CardFooter';
import Button from 'Components/CustomButtons/Button';
import Muted from 'Components/Typography/Muted';

import teamsStyle from 'Assets/JSS/material-kit-pro-react/views/sectionsSections/teamsStyle';

import bg7 from 'Assets/Images/bg7.jpg';
import city from 'Assets/Images/examples/city.jpg';
import cardProfile1 from 'Assets/Images/examples/card-profile1.jpg';
import cardProfile2 from 'Assets/Images/examples/card-profile2.jpg';
import cardProfile4 from 'Assets/Images/examples/card-profile4.jpg';
import cardProfile1Square from 'Assets/Images/faces/card-profile1-square.jpg';
import cardProfile2Square from 'Assets/Images/faces/card-profile2-square.jpg';
import cardProfile4Square from 'Assets/Images/faces/card-profile4-square.jpg';
import cardProfile6Square from 'Assets/Images/faces/card-profile6-square.jpg';

function SectionTeams({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className='cd-section' {...rest}>
      <div className={`${classes.team} ${classes.section}`} style={{ backgroundImage: `url(${city})` }}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={8} md={8} className={`${classes.mlAuto} ${classes.mrAuto} ${classes.textCenter}`}>
              <h2 className={classes.title}>The Team</h2>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card5}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href='#pablo' onClick={e => e.preventDefault()}>
                        <img src={cardProfile1Square} alt='...'/>
                      </a>
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Deepak Anand</h4>
                      <Muted>
                        <h6 className={classes.cardCategory}>Co-Founder & CEO</h6>
                      </Muted>
                      <p className={classes.description}>Founder Smartlease HDFC, HSBC, HT Media INSEAD</p>
                    </CardBody>
                    <CardFooter profile plain>
                      <Button justIcon simple>
                        <i className='fab fa-twitter'/>
                      </Button>
                      <Button justIcon simple>
                        <i className='fab fa-linkedin-in'/>
                      </Button>
                      <Button justIcon simple>
                        <i className='fab fa-facebook-square'/>
                      </Button>
                      <Button justIcon simple>
                        <i className='fab fa-dribbble'/>
                      </Button>
                      <Button justIcon simple>
                        <i className='fab fa-google'/>
                      </Button>
                    </CardFooter>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card5}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href='#pablo' onClick={e => e.preventDefault()}>
                        <img src={cardProfile6Square} alt='...'/>
                      </a>
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Kalpesh Mehta</h4>
                      <Muted>
                        <h6 className={classes.cardCategory}>Co-Founder</h6>
                      </Muted>
                      <p className={classes.description}>
                        Founder and Managing Partner, Tribeca Developers Lehman Brothers, The Carlyle Group, Starwood
                        Capital, Deloitte Wharton
                      </p>
                    </CardBody>
                    <CardFooter profile plain>
                      <Button justIcon simple>
                        <i className='fab fa-twitter'/>
                      </Button>
                      <Button justIcon simple>
                        <i className='fab fa-linkedin-in'/>
                      </Button>
                      <Button justIcon simple>
                        <i className='fab fa-facebook-square'/>
                      </Button>
                      <Button justIcon simple>
                        <i className='fab fa-dribbble'/>
                      </Button>
                      <Button justIcon simple>
                        <i className='fab fa-google'/>
                      </Button>
                    </CardFooter>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <div className={classes.team}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain profile>
                <CardHeader image plain>
                  <a href='#pablo' onClick={e => e.preventDefault()}>
                    <img src={cardProfile1} alt='...'/>
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${cardProfile1})`,
                      opacity: '1',
                    }}
                  />
                </CardHeader>
                <CardBody plain>
                  <h4 className={classes.cardTitle}>Saurabh Srivastava</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>Chief Marketing and Product Officer</h6>
                  </Muted>
                  <p className={classes.description}>Jabong, Mobikwik, ixigo, Goodyear MICA</p>
                </CardBody>
                <CardFooter profile plain className={classes.justifyContent}>
                  <Button justIcon round color='twitter'>
                    <i className='fab fa-twitter'/>
                  </Button>
                  <Button justIcon round color='linkedin'>
                    <i className='fab fa-linkedin-in'/>
                  </Button>
                  <Button justIcon round color='facebook'>
                    <i className='fab fa-facebook-square'/>
                  </Button>
                  <Button justIcon round color='dribbble'>
                    <i className='fab fa-dribbble'/>
                  </Button>
                  <Button justIcon round color='google'>
                    <i className='fab fa-google'/>
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain profile>
                <CardHeader image plain>
                  <a href='#pablo' onClick={e => e.preventDefault()}>
                    <img src={cardProfile2} alt='...'/>
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${cardProfile2})`,
                      opacity: '1',
                    }}
                  />
                </CardHeader>
                <CardBody plain>
                  <h4 className={classes.cardTitle}>Amit Kaicker</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>National Head Business Dev. and Sales</h6>
                    <p className={classes.description}>Quikr, JLL, Reliance IIFT, SPA</p>
                  </Muted>
                </CardBody>
                <CardFooter profile plain className={classes.justifyContent}>
                  <Button justIcon round color='twitter'>
                    <i className='fab fa-twitter'/>
                  </Button>
                  <Button justIcon round color='linkedin'>
                    <i className='fab fa-linkedin-in'/>
                  </Button>
                  <Button justIcon round color='facebook'>
                    <i className='fab fa-facebook-square'/>
                  </Button>
                  <Button justIcon round color='dribbble'>
                    <i className='fab fa-dribbble'/>
                  </Button>
                  <Button justIcon round color='google'>
                    <i className='fab fa-google'/>
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain profile>
                <CardHeader image plain>
                  <a href='#pablo' onClick={e => e.preventDefault()}>
                    <img src={cardProfile4} alt='...'/>
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${cardProfile4})`,
                      opacity: '1',
                    }}
                  />
                </CardHeader>
                <CardBody plain>
                  <h4 className={classes.cardTitle}>Sarvex Jatasra</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>Senior Vice President, Technology</h6>
                  </Muted>
                  <p className={classes.description}>Goibibo, Amazon, Motorola, Microsoft MDU</p>
                </CardBody>
                <CardFooter profile plain className={classes.justifyContent}>
                  <Button justIcon round color='twitter'>
                    <i className='fab fa-twitter'/>
                  </Button>
                  <Button justIcon round color='linkedin'>
                    <i className='fab fa-linkedin-in'/>
                  </Button>
                  <Button justIcon round color='facebook'>
                    <i className='fab fa-facebook-square'/>
                  </Button>
                  <Button justIcon round color='dribbble'>
                    <i className='fab fa-dribbble'/>
                  </Button>
                  <Button justIcon round color='google'>
                    <i className='fab fa-google'/>
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <div className={`${classes.team} ${classes.section}`} style={{ backgroundImage: `url(${bg7})` }}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <Card profile>
                <CardAvatar profile>
                  <a href='#pablo' onClick={e => e.preventDefault()}>
                    <img src={cardProfile1Square} alt='...'/>
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Nikhita Shrivastava</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>AVP HR</h6>
                  </Muted>
                </CardBody>
                <CardFooter profile className={classes.justifyContent}>
                  <Button justIcon round color='twitter'>
                    <i className='fab fa-twitter'/>
                  </Button>
                  <Button justIcon round color='linkedin'>
                    <i className='fab fa-linkedin-in'/>
                  </Button>
                  <Button justIcon round color='facebook'>
                    <i className='fab fa-facebook-square'/>
                  </Button>
                  <Button justIcon round color='dribbble'>
                    <i className='fab fa-dribbble'/>
                  </Button>
                  <Button justIcon round color='google'>
                    <i className='fab fa-google'/>
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card profile>
                <CardAvatar profile>
                  <a href='#pablo' onClick={e => e.preventDefault()}>
                    <img src={cardProfile2Square} alt='...'/>
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Deepak Sharma</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>Head of Operations</h6>
                  </Muted>
                </CardBody>
                <CardFooter profile className={classes.justifyContent}>
                  <Button justIcon round color='twitter'>
                    <i className='fab fa-twitter'/>
                  </Button>
                  <Button justIcon round color='linkedin'>
                    <i className='fab fa-linkedin-in'/>
                  </Button>
                  <Button justIcon round color='facebook'>
                    <i className='fab fa-facebook-square'/>
                  </Button>
                  <Button justIcon round color='dribbble'>
                    <i className='fab fa-dribbble'/>
                  </Button>
                  <Button justIcon round color='google'>
                    <i className='fab fa-google'/>
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card profile>
                <CardAvatar profile>
                  <a href='#pablo' onClick={e => e.preventDefault()}>
                    <img src={cardProfile4Square} alt='...'/>
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Manni Anand</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>AVP Finance</h6>
                  </Muted>
                </CardBody>
                <CardFooter profile className={classes.justifyContent}>
                  <Button justIcon round color='twitter'>
                    <i className='fab fa-twitter'/>
                  </Button>
                  <Button justIcon round color='linkedin'>
                    <i className='fab fa-linkedin-in'/>
                  </Button>
                  <Button justIcon round color='facebook'>
                    <i className='fab fa-facebook-square'/>
                  </Button>
                  <Button justIcon round color='dribbble'>
                    <i className='fab fa-dribbble'/>
                  </Button>
                  <Button justIcon round color='google'>
                    <i className='fab fa-google'/>
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

export default withStyles(teamsStyle)(SectionTeams);
