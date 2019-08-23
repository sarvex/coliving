import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Subject from '@material-ui/icons/Subject';

import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import Card from '../../../components/Card/Card';
import CardBody from '../../../components/Card/CardBody';
import Success from '../../../components/Typography/Success';
import Button from '../../../components/CustomButtons/Button';

import styles from '../../../assets/jss/material-kit-pro-react/views/componentsSections/sectionCards';


class Transformation extends React.Component {
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
        <div className={classes.sectionGray}>
          <div id="morphingCards" className="cd-section">
            <div className={classes.container}>
              <div className={classes.title}>
                <h2>Transformation</h2>
              </div>
              <GridContainer>
                <GridItem sm={12} md={8} lg={6}>
                  <div className={classes.rotatingCardContainer}>
                    <Card className={classes.cardRotate}>
                      <div className={classes.front}>
                        <CardBody className={classes.cardBodyRotate}>
                          <Success>
                            <h5 className={classes.cardCategorySocial}>
                              <i className="far fa-newspaper"/>
                              TRANSFORMATION
                            </h5>
                          </Success>
                          <h4 className={classes.cardTitle}>
                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                              HEAD- TRANSFORMATION
                            </a>
                          </h4>
                          <ul className={classes.cardDescription}>
                            <li>12+ years of experience in the real estate industry</li>
                            <li>B.E. in Civil Engineering (mandatory)</li>
                            <li>PMP certification (mandatory)</li>
                            <li>Team handling experience of minimum 10 people</li>
                            <li>Knowledge of the latest market trends</li>
                            <li>Senior leader with a significant track record strategic and operational management and complex business transformation delivery.</li>
                            <li>Strong track record of implementing change, and securing targeted deliverable and outcomes through programme leadership.</li>
                            <li>Experience of working in a matrix fashion to provide advice, support and challenge.</li>
                            <li>Previous experience of leading a Programme management function or equivalent</li>
                          </ul>
                        </CardBody>
                      </div>
                      <div className={classes.back}>
                        <CardBody className={classes.cardBodyRotate}>
                          <h5 className={classes.cardTitle}>HEAD- TRANSFORMATION</h5>
                          <ul className={classes.cardDescription}>
                            <li>Coordinating with cross discipline team members to make sure that all parties are on track with project requirements, deadlines, and schedules.</li>
                            <li>Good understanding of layouts, material finishes, working drawings etc.</li>
                            <li>Meeting with project team members to identify and resolve issues.</li>
                            <li>Submitting project deliverables and ensuring that they adhere to quality standards.</li>
                            <li>Preparing status reports by gathering, analyzing and summarizing relevant information.</li>
                            <li>Establishing effective project communication plans and ensuring their execution.</li>
                            <li>Facilitating change requests to ensure that all parties are informed of the impacts on schedule and budget.</li>
                          </ul>
                          <div className={classes.textCenter}>
                            <Button round color="rose">
                              <Subject/> Apply Now
                            </Button>
                          </div>
                        </CardBody>
                      </div>
                    </Card>
                  </div>
                </GridItem>
                <GridItem sm={12} md={8} lg={6}>
                  <div className={classes.rotatingCardContainer}>
                    <Card className={classes.cardRotate}>
                      <div className={classes.front}>
                        <CardBody className={classes.cardBodyRotate}>
                          <Success>
                            <h5 className={classes.cardCategorySocial}>
                              <i className="far fa-newspaper"/>
                              TRANSFORMATION
                            </h5>
                          </Success>
                          <h4 className={classes.cardTitle}>
                            <a href="#" onClick={(e) => e.preventDefault()}>
                              JUNIOR INTERIOR DESIGNER
                            </a>
                          </h4>
                          <ul className={classes.cardDescription}>
                            <li>Should have work experience of 3-5 years</li>
                            <li>Should hold a Bachelor’s degree in Interior designing, architecture or related discipline</li>
                            <li>Prior experience in the luxury sector preferably with hospitality or real estate</li>
                            <li>A passionate creator, who believes in ownership of work. If you are a multi tasker with a strong sense of aesthetics we would like to speak to you. Attention to detail and willingness to learn/evolve should be in your DNA.</li>
                            <li>Should have demonstrable skills with a strong prior track records</li>
                            <li>Should possess creative flair, versatility and originality</li>
                            <li>Handled a team in the past</li>
                            <li>Proficient in AutoCAD, Sketch Up, 3D Max, Illustrator or other design programs</li>
                          </ul>
                        </CardBody>
                      </div>
                      <div className={classes.back}>
                        <CardBody className={classes.cardBodyRotate}>
                          <h5 className={classes.cardTitle}>JUNIOR INTERIOR DESIGNER</h5>
                          <ul className={classes.cardDescription}>
                            <li>An artist who can infuse magic in our spaces. One with an aesthetic sense, who knows about the devil in the details.</li>
                            <li>Experience of handling global key accounts will be a plus</li>
                            <li>Prior experience in the luxury sector preferably with hospitality or real estate</li>
                            <li>Product design is central to everything we do. The motto of our design team is to create products that our customers can fall in love with</li>
                            <li>Undertake design project from concept to completion</li>
                            <li>Define project requirements and schedule during the “brief”</li>
                            <li>Interpret and translate customer needs into rough plans</li>
                            <li>Set costs and project fees according to budget</li>
                          </ul>
                          <div className={classes.textCenter}>
                            <Button round color="rose">
                              <Subject/> Apply Now
                            </Button>
                          </div>
                        </CardBody>
                      </div>
                    </Card>
                  </div>
                </GridItem>
                <GridItem sm={12} md={8} lg={6}>
                  <div className={classes.rotatingCardContainer}>
                    <Card className={classes.cardRotate}>
                      <div className={classes.front}>
                        <CardBody className={classes.cardBodyRotate}>
                          <Success>
                            <h5 className={classes.cardCategorySocial}>
                              <i className="far fa-newspaper"/>
                              TRANSFORMATION
                            </h5>
                          </Success>
                          <h4 className={classes.cardTitle}>
                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                              SENIOR INTERIOR DESIGNER
                            </a>
                          </h4>
                          <ul className={classes.cardDescription}>
                            <li>Should have work experience of 7-12 years</li>
                            <li>Should have handled a team of minimum 2 in the past.</li>
                            <li>Should hold Bachelor’s Degree in Interior Design, Architecture or related discipline.</li>
                            <li>A passionate creator, who believes in ownership of work. If you are a multi tasker with a strong sense of aesthetics we would like to speak to you. Attention to detail and willingness to learn/evolve should be in your DNA.</li>
                            <li>Should have demonstrable skills with a strong prior track records</li>
                            <li>Should possess creative flair, versatility and originality</li>
                            <li>Handled a team in the past</li>
                            <li>Proficient in AutoCAD, Sketch Up, 3D Max, Illustrator or other design programs</li>
                          </ul>
                        </CardBody>
                      </div>
                      <div className={classes.back}>
                        <CardBody className={classes.cardBodyRotate}>
                          <h5 className={classes.cardTitle}>SENIOR INTERIOR DESIGNER</h5>
                          <ul className={classes.cardDescription}>
                            <li>An artist who can infuse magic in our spaces. One with an aesthetic sense, who knows about the devil in the details.</li>
                            <li>Experience of handling global key accounts will be a plus</li>
                            <li>Prior experience in the luxury sector preferably with hospitality or real estate</li>
                            <li>Product design is central to everything we do. The motto of our design team is to create products that our customers can fall in love with</li>
                            <li>Undertake design project from concept to completion</li>
                            <li>Define project requirements and schedule during the “brief”</li>
                            <li>Interpret and translate customer needs into rough plans</li>
                            <li>Set costs and project fees according to budget</li>
                          </ul>
                          <div className={classes.textCenter}>
                            <Button round color="rose">
                              <Subject/> Apply Now
                            </Button>
                          </div>
                        </CardBody>
                      </div>
                    </Card>
                  </div>
                </GridItem>
              </GridContainer>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Transformation.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Transformation);
