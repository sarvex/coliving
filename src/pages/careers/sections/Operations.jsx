import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Icon from '@material-ui/core/Icon';
import Favorite from '@material-ui/icons/Favorite';
import Share from '@material-ui/icons/Share';
import Subject from '@material-ui/icons/Subject';
import Delete from '@material-ui/icons/Delete';
import Bookmark from '@material-ui/icons/Bookmark';

import GridContainer from 'Components/Grid/GridContainer';
import GridItem from 'Components/Grid/GridItem';
import Card from 'Components/Card/Card';
import CardBody from 'Components/Card/CardBody';
import CardFooter from 'Components/Card/CardFooter';
import Success from 'Components/Typography/Success';
import Button from 'Components/CustomButtons/Button';

import styles from 'Assets/JSS/material-kit-pro-react/views/componentsSections/sectionCards';

import cardBlog5 from 'Assets/Images/examples/card-blog5.jpg';
import avatar from 'Assets/Images/faces/avatar.jpg';

class Operations extends React.Component {
  componentDidMount() {
    if (window) {
      window.addEventListener('resize', this.addStylesForRotatingCards);
    }
    this.addStylesForRotatingCards();
  }

  componentWillUnmount() {
    if (window) {
      window.removeEventListener('resize', this.addStylesForRotatingCards);
    }
  }

  addStylesForRotatingCards = () => {
    const { classes } = this.props;
    const rotatingCards = document.getElementsByClassName(classes.cardRotate);
    for (let i = 0; i < rotatingCards.length; i++) {
      const rotatingCard = rotatingCards[i];
      const rotatingWrapper = rotatingCard.parentElement;
      const cardWidth = rotatingCard.parentElement.offsetWidth;
      const cardHeight = rotatingCard.children[0].children[0].offsetHeight;
      rotatingWrapper.style.height = `${cardHeight}px`;
      rotatingWrapper.style['margin-bottom'] = `${30}px`;
      const cardFront = rotatingCard.getElementsByClassName(classes.front)[0];
      const cardBack = rotatingCard.getElementsByClassName(classes.back)[0];
      cardFront.style.height = `${cardHeight + 35}px`;
      cardFront.style.width = `${cardWidth}px`;
      cardBack.style.height = `${cardHeight + 35}px`;
      cardBack.style.width = `${cardWidth}px`;
    }
  };

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div {...rest} className="cd-section" id="cards">
        <div className={classes.sectionWhite}>
          <div id="morphingCards" className="cd-section">
            <div className={classes.container}>
              <div className={classes.title}>
                <h2>Operations</h2>
              </div>
              <GridContainer>
                <GridItem xs={12} sm={6} md={4} lg={3}>
                  <div className={classes.rotatingCardContainer}>
                    <Card background className={classes.cardRotate}>
                      <div
                        className={
                          `${classes.front} ${classes.wrapperBackground}`
                        }
                        style={{
                          backgroundImage: `url(${cardBlog5})`,
                        }}
                      >
                        <CardBody background className={classes.cardBodyRotate}>
                          <h6 className={classes.cardCategoryWhite}>
                            Full Background Card
                          </h6>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <h3 className={classes.cardTitleWhite}>
                              This Background Card Will Rotate on Hover
                            </h3>
                          </a>
                          <p className={classes.cardDescriptionWhite}>
                            Don
                            {'\''}
                            t be scared of the truth because we need to
                            restart the human foundation in truth And I love you
                            like Kanye loves Kanye I love Rick Owens’ bed design
                            but the back is...
                          </p>
                        </CardBody>
                      </div>
                      <div
                        className={
                          `${classes.back} ${classes.wrapperBackground}`
                        }
                        style={{
                          backgroundImage: `url(${cardBlog5})`,
                        }}
                      >
                        <CardBody background className={classes.cardBodyRotate}>
                          <h5 className={classes.cardTitleWhite}>
                            Manage Post
                          </h5>
                          <p className={classes.cardDescriptionWhite}>
                            As an Admin, you have shortcuts to edit, view or
                            delete the posts.
                          </p>
                          <div className={classes.textCenter}>
                            <Button round justIcon color="info">
                              <Subject/>
                            </Button>
                            <Button round justIcon color="success">
                              <Icon>mode_edit</Icon>
                            </Button>
                            <Button round justIcon color="danger">
                              <Delete/>
                            </Button>
                          </div>
                        </CardBody>
                      </div>
                    </Card>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={6} md={4} lg={3}>
                  <div className={classes.rotatingCardContainer}>
                    <Card className={classes.cardRotate}>
                      <div className={classes.front}>
                        <CardBody className={classes.cardBodyRotate}>
                          <Success>
                            <h5 className={classes.cardCategorySocial}>
                              <i className="far fa-newspaper"/>
                              TechCrunch
                            </h5>
                          </Success>
                          <h4 className={classes.cardTitle}>
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                              This Card is Doing a Full Rotation on Hover...
                            </a>
                          </h4>
                          <p className={classes.cardDescription}>
                            Don
                            {'\''}
                            t be scared of the truth because we need to
                            restart the human foundation in truth And I love you
                            like Kanye loves Kanye I love Rick Owens’ bed design
                            but the back is...
                          </p>
                        </CardBody>
                      </div>
                      <div className={classes.back}>
                        <CardBody className={classes.cardBodyRotate}>
                          <h5 className={classes.cardTitle}>Do more...</h5>
                          <p className={classes.cardDescription}>
                            You can read this article or share it with your
                            friends and family on different networks...
                          </p>
                          <div className={classes.textCenter}>
                            <Button round color="rose">
                              <Subject/>
                              {' '}
                              Read
                            </Button>
                            <Button round justIcon color="twitter">
                              <i className="fab fa-twitter"/>
                            </Button>
                            <Button round justIcon color="dribbble">
                              <i className="fab fa-dribbble"/>
                            </Button>
                            <Button round justIcon color="facebook">
                              <i className="fab fa-facebook"/>
                            </Button>
                          </div>
                        </CardBody>
                      </div>
                    </Card>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={6} md={4} lg={3}>
                  <div className={classes.rotatingCardContainer}>
                    <Card background className={classes.cardRotate}>
                      <div
                        className={
                          `${classes.front} ${classes.wrapperBackground}`
                        }
                        style={{
                          backgroundImage: `url(${cardBlog5})`,
                        }}
                      >
                        <CardBody background className={classes.cardBodyRotate}>
                          <h6 className={classes.cardCategoryWhite}>
                            Full Background Card
                          </h6>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <h3 className={classes.cardTitleWhite}>
                              This Background Card Will Rotate on Hover
                            </h3>
                          </a>
                          <p className={classes.cardDescriptionWhite}>
                            Don
                            {'\''}
                            t be scared of the truth because we need to
                            restart the human foundation in truth And I love you
                            like Kanye loves Kanye I love Rick Owens’ bed design
                            but the back is...
                          </p>
                        </CardBody>
                      </div>
                      <div
                        className={
                          `${classes.back} ${classes.wrapperBackground}`
                        }
                        style={{
                          backgroundImage: `url(${cardBlog5})`,
                        }}
                      >
                        <CardBody background className={classes.cardBodyRotate}>
                          <h5 className={classes.cardTitleWhite}>
                            Manage Post
                          </h5>
                          <p className={classes.cardDescriptionWhite}>
                            As an Admin, you have shortcuts to edit, view or
                            delete the posts.
                          </p>
                          <div className={classes.textCenter}>
                            <Button round justIcon color="info">
                              <Subject/>
                            </Button>
                            <Button round justIcon color="success">
                              <Icon>mode_edit</Icon>
                            </Button>
                            <Button round justIcon color="danger">
                              <Delete/>
                            </Button>
                          </div>
                        </CardBody>
                      </div>
                    </Card>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={6} md={4} lg={3}>
                  <div className={classes.rotatingCardContainer}>
                    <Card color="rose" className={classes.cardRotate}>
                      <div
                        className={`${classes.front} ${classes.wrapperRose}`}
                      >
                        <CardBody color className={classes.cardBodyRotate}>
                          <h5 className={classes.cardCategorySocialWhite}>
                            <i className="fab fa-dribbble"/>
                            {' '}
                            Dribbble
                          </h5>
                          <h4 className={classes.cardTitleWhite}>
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                              {'"'}
                              Dribbble just acquired Crew, a very
                              interesting startup...
                              {'"'}
                            </a>
                          </h4>
                          <p className={classes.cardDescriptionWhite}>
                            Don
                            {'\''}
                            t be scared of the truth because we need to
                            restart the human foundation in truth And I love you
                            like Kanye loves Kanye I love Rick Owens’ bed design
                            but the back is...
                          </p>
                        </CardBody>
                        <CardFooter>
                          <div className={classes.authorWhite}>
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                              <img
                                src={avatar}
                                alt="..."
                                className={
                                  `${classes.imgRaised} ${classes.avatar}`
                                }
                              />
                              <span>Tania Andrew</span>
                            </a>
                          </div>
                          <div
                            className={
                              `${classes.statsWhite} ${classes.mlAuto}`
                            }
                          >
                            <Favorite/>
                            2.4K ·
                            <Share/>
                            45
                          </div>
                        </CardFooter>
                      </div>
                      <div className={`${classes.back} ${classes.wrapperRose}`}>
                        <CardBody className={classes.cardBodyRotate}>
                          <h5 className={classes.cardCategorySocialWhite}>
                            <i className="fab fa-dribbble"/>
                            {' '}
                            Dribbble
                          </h5>
                          <h4 className={classes.cardTitleWhite}>
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                              {'"'}
                              Dribbble just acquired Crew, a very
                              interesting startup...
                              {'"'}
                            </a>
                          </h4>
                          <div>
                            <Button round color="white">
                              <Subject/>
                              {' '}
                              Read
                            </Button>
                            <Button simple color="white">
                              <Bookmark/>
                              {' '}
                              Bookmark
                            </Button>
                          </div>
                        </CardBody>
                      </div>
                    </Card>
                  </div>
                </GridItem>
              </GridContainer>
              <br/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Operations);
