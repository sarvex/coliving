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

import styles from '../../../Assets/JSS/material-kit-pro-react/views/componentsSections/sectionCards';


class Others extends React.Component {
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
                <h2>PA</h2>
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
                              PA
                            </h5>
                          </Success>
                          <h4 className={classes.cardTitle}>
                            <a href="#" onClick={(e) => e.preventDefault()}>
                              PERSONAL ASSISTANT
                            </a>
                          </h4>
                          <ul className={classes.cardDescription}>
                            <li>At least 2 years of work experience as PA or EA preferably to a CEO or Founder of the company</li>
                            <li>Excellent written and oral communication skills in English</li>
                            <li>Proficient in Microsoft Office (Word, Excel, Power Point)</li>
                            <li>Honesty and reliability</li>
                            <li>Exceptional Presentation skills</li>
                            <li>Discretion with personal and confidential information</li>
                            <li>The ability to work at his/her own initiative and to tight deadlines</li>
                          </ul>
                          <br/>
                          <br/>
                        </CardBody>
                      </div>
                      <div className={classes.back}>
                        <CardBody className={classes.cardBodyRotate}>
                          <h5 className={classes.cardTitle}>PERSONAL ASSISTANT</h5>
                          <p className={classes.cardDescription}>
                            <li>Acting as a first point of contact: dealing with correspondence and phone calls</li>
                            <li>Managing diaries and organising meetings and appointments, often controlling access to the manager/executive</li>
                            <li>Organising events and conferences</li>
                            <li>Reminding the manager/executive of important tasks and deadlines</li>
                            <li>Typing, compiling and preparing reports, presentations and correspondence</li>
                            <li>Liaising with staff, suppliers and clients</li>
                            <li>Organising and attending meetings, and arranging business trips (including flights and accommodations), ensuring the CEO is well-prepared for meetings/business trips, preparing meeting agendas.</li>
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
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Others.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Others);
