import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Subject from '@material-ui/icons/Subject';

import GridContainer from 'Components/Grid/GridContainer';
import GridItem from 'Components/Grid/GridItem';
import Card from 'Components/Card/Card';
import CardBody from 'Components/Card/CardBody';
import Success from 'Components/Typography/Success';
import Button from 'Components/CustomButtons/Button';

import styles
  from 'Assets/JSS/material-kit-pro-react/views/componentsSections/sectionCards';


class HumanResource extends React.Component {
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
                <h2>Human Resources</h2>
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
                              HR
                            </h5>
                          </Success>
                          <h4 className={classes.cardTitle}>
                            <a href="#" onClick={(e) => e.preventDefault()}>
                              HR BUSINESS PARTNER
                            </a>
                          </h4>
                          <ul className={classes.cardDescription}>
                            <li>Proven work experience as an HR business partner</li>
                            <li>Excellent people management skills</li>
                            <li>Analytical and goal oriented</li>
                            <li>Demonstrable experience with HR metrics</li>
                            <li>Thorough knowledge of labor legislation</li>
                            <li>Full understanding of all HR functions and best practices</li>
                            <li>Bachelor degree in Human Resources or related field</li>
                          </ul>
                          <br/>
                          <br/>
                          <br/>
                        </CardBody>
                      </div>
                      <div className={classes.back}>
                        <CardBody className={classes.cardBodyRotate}>
                          <h5 className={classes.cardTitle}>HR BUSINESS PARTNER</h5>
                          <ul className={classes.cardDescription}>
                            <li>Consult with line management and provide daily HR guidance</li>
                            <li>Analyze trends and metrics with the HR department</li>
                            <li>Resolve complex employee relations issues and address grievances
                            </li>
                            <li>Work closely with management and employees to improve work
                              relationships, build morale and increase productivity and retention
                            </li>
                            <li>Provide HR policy guidance</li>
                            <li>Monitor and report on workforce and succession planning</li>
                            <li>Identify training needs for teams and individuals</li>
                            <li>Evaluate training programs</li>
                            <li>Suggest new HR strategies</li>
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
                              HR
                            </h5>
                          </Success>
                          <h4 className={classes.cardTitle}>
                            <a href="#" onClick={(e) => e.preventDefault()}>
                              HR Generalist
                            </a>
                          </h4>
                          <ul className={classes.cardDescription}>
                            <li>Proven work experience of 2-3 years as a HR Generalist or a similar position.</li>
                            <li>Should hold an MBA degree in HR or related discipline.</li>
                            <li>Excellent verbal and written communication skills</li>
                            <li>Understanding of general human resources policies and procedures.</li>
                            <li>Good knowledge of employment/labor laws</li>
                            <li>Outstanding knowledge of MS Office; HRIS systems</li>
                            <li>Strong decision making skills and Aptitude in problem-solving.</li>
                            <li>Desire to work as a team with a results driven approach</li>
                            <li>Efficient HR administration and people management skills</li>
                          </ul>
                          <br/>
                          <br/>
                        </CardBody>
                      </div>
                      <div className={classes.back}>
                        <CardBody className={classes.cardBodyRotate}>
                          <h5 className={classes.cardTitle}>HR Generalist</h5>
                          <ul className={classes.cardDescription}>
                            <li>Administer compensation and benefit plans</li>
                            <li>Assist in talent acquisition and recruitment processes</li>
                            <li>Conduct employee onboarding and help organize training & development initiatives</li>
                            <li>Provide support to employees in various HR-related topics such as leaves and compensation and resolve any issues that may arise</li>
                            <li>Promote HR programs to create an efficient and conflict-free workplace</li>
                            <li>Assist in development and implementation of human resource policies</li>
                            <li>Undertake tasks around employee engagement</li>
                            <li>Organize quarterly and annual employee performance reviews</li>
                            <li>Maintain employee files and records in electronic and paper form</li>
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
              <br/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HumanResource.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(HumanResource);
