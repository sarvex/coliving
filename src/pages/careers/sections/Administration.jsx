import React from 'Pages/Careers/sections/node_modules/Pages/careers/sections/node_modules/react';
import PropTypes from 'Pages/Careers/sections/node_modules/Pages/careers/sections/node_modules/prop-types';
import withStyles from 'Pages/Careers/sections/node_modules/Pages/careers/sections/node_modules/@material-ui/core/styles/withStyles';
import Subject from 'Pages/Careers/sections/node_modules/Pages/careers/sections/node_modules/@material-ui/icons/Subject';

import GridContainer from '../../../Components/Grid/GridContainer';
import GridItem from '../../../Components/Grid/GridItem';
import Card from '../../../Components/Card/Card';
import CardBody from '../../../Components/Card/CardBody';
import Success from '../../../Components/Typography/Success';
import Button from '../../../Components/CustomButtons/Button';

import styles
  from '../../../Assets/JSS/material-kit-pro-react/views/componentsSections/sectionCards';


class Administration extends React.Component {
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
                <h2>Administration</h2>
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
                              ADMINISTRATION
                            </h5>
                          </Success>
                          <h4 className={classes.cardTitle}>
                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                              ADMINISTRATION EXECUTIVE
                            </a>
                          </h4>
                          <ul className={classes.cardDescription}>
                            <li>Should have an experience of 2 – 8 years</li>
                            <li>Education Qualifications: Preferably an MBA degree holder</li>
                            <li>Proven work experience as an Administrative Officer, Administrator or similar role</li>
                            <li>Solid knowledge of office procedures</li>
                            <li>Strong organization skills with a problem-solving attitude</li>
                            <li>Excellent written and verbal communication skills</li>
                            <li>Attention to detail</li>
                            <li>High school diploma; additional qualifications in Office Administration are a plus</li>
                            <li>Our ideal candidate should also have working knowledge of office equipment and office management tools.</li>
                            <li>Discretion with personal and confidential information</li>
                          </ul>
                          <br/>
                        </CardBody>
                      </div>
                      <div className={classes.back}>
                        <CardBody className={classes.cardBodyRotate}>
                          <h5 className={classes.cardTitle}>ADMINISTRATION EXECUTIVE</h5>
                          <p className={classes.cardDescription}>
                            <li>Prepare regular reports on expenses and office budgets</li>
                            <li>Maintain and update company databases</li>
                            <li>Organize a filing system for important and confidential company documents</li>
                            <li>Answer queries by employees and clients</li>
                            <li>Update office policies as needed</li>
                            <li>Maintain a company calendar and schedule appointments</li>
                            <li>Book meeting rooms as required</li>
                            <li>Distribute and store correspondence (e.g. letters, emails and packages)</li>
                            <li>Prepare reports and presentations with statistical data, as assigned</li>
                            <li>Arrange travel and accommodations</li>
                          </p>
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

Administration.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Administration);
