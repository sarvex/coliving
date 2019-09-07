import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import GridContainer from 'Components/Grid/GridContainer'
import GridItem from 'Components/Grid/GridItem'
import Card from 'Components/Card/Card'
import CardHeader from 'Components/Card/CardHeader'
import CardBody from 'Components/Card/CardBody'
import CardFooter from 'Components/Card/CardFooter'
import Muted from 'Components/Typography/Muted'
import Button from 'Components/CustomButtons/Button'

import cardProfile1Square from 'Assets/Images/faces/card-profile1-square.jpg'
import cardProfile2Square from 'Assets/Images/faces/card-profile2-square.jpg'
import cardProfile4Square from 'Assets/Images/faces/card-profile4-square.jpg'
import cardProfile6Square from 'Assets/Images/faces/card-profile6-square.jpg'

import teamsStyle from 'Assets/JSS/material-kit-pro-react/views/sectionsSections/teamsStyle'
import teamStyle from 'Assets/JSS/material-kit-pro-react/views/landingPageSections/teamStyle'

const style = {
  ...teamsStyle,
  ...teamStyle,
  justifyContentCenter: {
    justifyContent: 'center',
  },
}

const Team = (props) => {
  const { classes } = props
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our team</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.card3}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href='#pablo' onClick={(e) => e.preventDefault()}>
                      <img src={cardProfile1Square} alt='...' />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${cardProfile1Square})`,
                        opacity: '1',
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Alec Thompson</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>FOUNDER</h6>
                    </Muted>
                    <p className={classes.description}>
                      Don{"'"}t be scared of the truth because we need to restart the human foundation in truth...
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentCenter}>
                    <Button justIcon simple color='twitter'>
                      <i className='fab fa-twitter' />
                    </Button>
                    <Button justIcon simple color='facebook'>
                      <i className='fab fa-facebook-square' />
                    </Button>
                    <Button justIcon simple color='google'>
                      <i className='fab fa-google' />
                    </Button>
                  </CardFooter>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.card3}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href='#pablo' onClick={(e) => e.preventDefault()}>
                      <img src={cardProfile6Square} alt='...' />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${cardProfile6Square})`,
                        opacity: '1',
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Kendall Andrew</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>GRAPHIC DESIGNER</h6>
                    </Muted>
                    <p className={classes.description}>
                      Don{"'"}t be scared of the truth because we need to restart the human foundation in truth...
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentCenter}>
                    <Button justIcon simple color='linkedin'>
                      <i className='fab fa-linkedin-in' />
                    </Button>
                    <Button justIcon simple color='facebook'>
                      <i className='fab fa-facebook-square' />
                    </Button>
                    <Button justIcon simple color='dribbble'>
                      <i className='fab fa-dribbble' />
                    </Button>
                    <Button justIcon simple color='google'>
                      <i className='fab fa-google' />
                    </Button>
                  </CardFooter>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.card3}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href='#pablo' onClick={(e) => e.preventDefault()}>
                      <img src={cardProfile4Square} alt='...' />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${cardProfile4Square})`,
                        opacity: '1',
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Gina Andrew</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>WEB DESIGNER</h6>
                    </Muted>
                    <p className={classes.description}>
                      I love you like Kanye loves Kanye. Don{"'"}t be scared of the truth.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentCenter}>
                    <Button justIcon simple color='youtube'>
                      <i className='fab fa-youtube' />
                    </Button>
                    <Button justIcon simple color='twitter'>
                      <i className='fab fa-twitter' />
                    </Button>
                    <Button justIcon simple color='instagram'>
                      <i className='fab fa-instagram' />
                    </Button>
                  </CardFooter>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.card3}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href='#pablo' onClick={(e) => e.preventDefault()}>
                      <img src={cardProfile2Square} alt='...' />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${cardProfile2Square})`,
                        opacity: '1',
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>George West</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>BACKEND HACKER</h6>
                    </Muted>
                    <p className={classes.description}>
                      I love you like Kanye loves Kanye. Don{"'"}t be scared of the truth.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentCenter}>
                    <Button justIcon simple color='linkedin'>
                      <i className='fab fa-linkedin-in' />
                    </Button>
                    <Button justIcon simple color='facebook'>
                      <i className='fab fa-facebook-square' />
                    </Button>
                    <Button justIcon simple color='google'>
                      <i className='fab fa-google' />
                    </Button>
                  </CardFooter>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}

export default withStyles(style)(Team)
