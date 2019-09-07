import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import Tooltip from '@material-ui/core/Tooltip'
import Camera from '@material-ui/icons/Camera'
import Palette from '@material-ui/icons/Palette'
import People from '@material-ui/icons/People'
import Add from '@material-ui/icons/Add'
import GridContainer from 'Components/Grid/GridContainer'
import GridItem from 'Components/Grid/GridItem'
import NavPills from 'Components/NavPills/NavPills'
import Card from 'Components/Card/Card'
import CardBody from 'Components/Card/CardBody'
import CardHeader from 'Components/Card/CardHeader'
import Badge from 'Components/Badge/Badge'
import Muted from 'Components/Typography/Muted'
import Parallax from 'Components/Parallax/Parallax'
import Clearfix from 'Components/Clearfix/Clearfix'
import Button from 'Components/CustomButtons/Button'

import christian from 'Assets/Images/faces/christian.jpg'
import oluEletu from 'Assets/Images/examples/olu-eletu.jpg'
import clemOnojeghuo from 'Assets/Images/examples/clem-onojeghuo.jpg'
import cynthiaDelRio from 'Assets/Images/examples/cynthia-del-rio.jpg'
import mariyaGeorgieva from 'Assets/Images/examples/mariya-georgieva.jpg'
import clemOnojegaw from 'Assets/Images/examples/clem-onojegaw.jpg'
import darrenColeshill from 'Assets/Images/examples/darren-coleshill.jpg'
import avatar from 'Assets/Images/faces/avatar.jpg'
import marc from 'Assets/Images/faces/marc.jpg'
import kendall from 'Assets/Images/faces/kendall.jpg'
import cardProfile2Square from 'Assets/Images/faces/card-profile2-square.jpg'

import profilePageStyle from 'Assets/JSS/material-kit-pro-react/views/profilePageStyle'
import NavBar from 'Sections/NavBar'
import Footer from 'Sections/Footer'

const Profile = (props) => {
  const { classes, ...rest } = props
  const imageClasses = classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid)
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery)
  return (
    <div>
      <NavBar />
      <Parallax image={require('Assets/Images/examples/city.jpg')} filter='dark' className={classes.parallax} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify='center'>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <img src={christian} alt='...' className={imageClasses} />
                </div>
                <div className={classes.name}>
                  <h3 className={classes.title}>Christian Louboutin</h3>
                  <h6>DESIGNER</h6>
                  <Button justIcon simple color='dribbble' className={classes.margin5}>
                    <i className={`${classes.socials} fab fa-dribbble`} />
                  </Button>
                  <Button justIcon simple color='twitter' className={classes.margin5}>
                    <i className={`${classes.socials} fab fa-twitter`} />
                  </Button>
                  <Button justIcon simple color='pinterest' className={classes.margin5}>
                    <i className={`${classes.socials} fab fa-pinterest`} />
                  </Button>
                </div>
              </div>
              <div className={classes.follow}>
                <Tooltip
                  id='tooltip-top'
                  title='Follow this user'
                  placement='top'
                  classes={{ tooltip: classes.tooltip }}>
                  <Button justIcon round color='primary' className={classes.followButton}>
                    <Add className={classes.followIcon} />
                  </Button>
                </Tooltip>
              </div>
            </GridItem>
          </GridContainer>
          <div className={classNames(classes.description, classes.textCenter)}>
            <p>
              An artist of considerable range, Chet Faker — the name taken by Melbourne-raised, Brooklyn-based Nick
              Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid
              groove structure.{' '}
            </p>
          </div>
          <div className={classes.profileTabs}>
            <NavPills
              alignCenter
              color='primary'
              tabs={[
                {
                  tabButton: 'Work',
                  tabIcon: Palette,
                  tabContent: (
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={7} className={classes.gridItem}>
                        <h4 className={classes.title}>Latest Collections</h4>
                        <GridContainer className={classes.collections}>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card
                              background
                              style={{
                                backgroundImage: `url(${mariyaGeorgieva})`,
                              }}>
                              <CardBody background className={classes.cardBody}>
                                <Badge color='warning' className={classes.badge}>
                                  Spring 2016
                                </Badge>
                                <a href='#pablo'>
                                  <h2 className={classes.cardTitleWhite}>Stilleto</h2>
                                </a>
                              </CardBody>
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card
                              background
                              style={{
                                backgroundImage: `url(${clemOnojeghuo})`,
                              }}>
                              <CardBody background className={classes.cardBody}>
                                <Badge color='info' className={classes.badge}>
                                  Spring 2016
                                </Badge>
                                <a href='#pablo'>
                                  <h2 className={classes.cardTitleWhite}>High Heels</h2>
                                </a>
                              </CardBody>
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card
                              background
                              style={{
                                backgroundImage: `url(${oluEletu})`,
                              }}>
                              <CardBody background className={classes.cardBody}>
                                <Badge color='danger' className={classes.badge}>
                                  Summer 2016
                                </Badge>
                                <a href='#pablo'>
                                  <h2 className={classes.cardTitleWhite}>Flats</h2>
                                </a>
                              </CardBody>
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card
                              background
                              style={{
                                backgroundImage: `url(${darrenColeshill})`,
                              }}>
                              <CardBody background className={classes.cardBody}>
                                <Badge color='success' className={classes.badge}>
                                  Winter 2016
                                </Badge>
                                <a href='#pablo'>
                                  <h2 className={classes.cardTitleWhite}>Men{"'"}s Sneakers</h2>
                                </a>
                              </CardBody>
                            </Card>
                          </GridItem>
                        </GridContainer>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={2} className={classes.gridItem}>
                        <h4 className={classes.title}>Stats</h4>
                        <ul className={classes.listUnstyled}>
                          <li>
                            <b>60</b> Products
                          </li>
                          <li>
                            <b>4</b> Collections
                          </li>
                          <li>
                            <b>331</b> Influencers
                          </li>
                          <li>
                            <b>1.2K</b> Likes
                          </li>
                        </ul>
                        <hr />
                        <h4 className={classes.title}>About this work</h4>
                        <p className={classes.description}>
                          French luxury footwear and fashion. The footwear has incorporated shiny, red-lacquered soles
                          that have become his signature.
                        </p>
                        <hr />
                        <h4 className={classes.title}>Focus</h4>
                        <Badge color='primary'>Footwear</Badge>
                        <Badge color='rose'>Luxury</Badge>
                      </GridItem>
                    </GridContainer>
                  ),
                },
                {
                  tabButton: 'Connections',
                  tabIcon: People,
                  tabContent: (
                    <div>
                      <GridContainer justify='center'>
                        <GridItem xs={12} sm={12} md={5} className={classes.gridItem}>
                          <Card profile plain className={classes.card}>
                            <GridContainer>
                              <GridItem xs={12} sm={12} md={5}>
                                <CardHeader image plain>
                                  <a href='#pablo'>
                                    <img src={avatar} alt='...' />
                                  </a>
                                  <div
                                    className={classes.coloredShadow}
                                    style={{
                                      backgroundImage: `url(${avatar})`,
                                      opacity: '1',
                                    }}
                                  />
                                </CardHeader>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={7}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>Gigi Hadid</h4>
                                  <Muted>
                                    <h6>MODEL</h6>
                                  </Muted>
                                  <p className={classes.description}>
                                    Don{"'"}t be scared of the truth because we need to restart the human foundation in
                                    truth...
                                  </p>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={5} className={classes.gridItem}>
                          <Card profile plain className={classes.card}>
                            <GridContainer>
                              <GridItem xs={12} sm={12} md={5}>
                                <CardHeader image plain>
                                  <a href='#pablo'>
                                    <img src={marc} alt='...' />
                                  </a>
                                  <div
                                    className={classes.coloredShadow}
                                    style={{
                                      backgroundImage: `url(${marc})`,
                                      opacity: '1',
                                    }}
                                  />
                                </CardHeader>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={7}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>Marc Jacobs</h4>
                                  <Muted>
                                    <h6>DESIGNER</h6>
                                  </Muted>
                                  <p className={classes.description}>
                                    Don{"'"}t be scared of the truth because we need to restart the human foundation in
                                    truth...
                                  </p>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                      </GridContainer>
                      <GridContainer justify='center'>
                        <GridItem xs={12} sm={12} md={5} className={classes.gridItem}>
                          <Card profile plain className={classes.card}>
                            <GridContainer>
                              <GridItem xs={12} sm={12} md={5}>
                                <CardHeader image plain>
                                  <a href='#pablo'>
                                    <img src={kendall} alt='...' />
                                  </a>
                                  <div
                                    className={classes.coloredShadow}
                                    style={{
                                      backgroundImage: `url(${kendall})`,
                                      opacity: '1',
                                    }}
                                  />
                                </CardHeader>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={7}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>Kendall Jenner</h4>
                                  <Muted>
                                    <h6>MODEL</h6>
                                  </Muted>
                                  <p className={classes.description}>
                                    I love you like Kanye loves Kanye. Don
                                    {"'"}t be scared of the truth.
                                  </p>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={5} className={classes.gridItem}>
                          <Card profile plain className={classes.card}>
                            <GridContainer>
                              <GridItem xs={12} sm={12} md={5}>
                                <CardHeader image plain>
                                  <a href='#pablo'>
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
                              <GridItem xs={12} sm={12} md={7}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>George West</h4>
                                  <Muted>
                                    <h6>MODEL/DJ</h6>
                                  </Muted>
                                  <p className={classes.description}>I love you like Kanye loves Kanye.</p>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                      </GridContainer>
                    </div>
                  ),
                },
                {
                  tabButton: 'Media',
                  tabIcon: Camera,
                  tabContent: (
                    <GridContainer justify='center'>
                      <GridItem xs={12} sm={12} md={3}>
                        <img alt='...' src={mariyaGeorgieva} className={navImageClasses} />
                        <img alt='...' src={clemOnojegaw} className={navImageClasses} />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <img alt='...' src={clemOnojeghuo} className={navImageClasses} />
                        <img alt='...' src={oluEletu} className={navImageClasses} />
                        <img alt='...' src={cynthiaDelRio} className={navImageClasses} />
                      </GridItem>
                    </GridContainer>
                  ),
                },
              ]}
            />
          </div>
          <Clearfix />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default withStyles(profilePageStyle)(Profile)
