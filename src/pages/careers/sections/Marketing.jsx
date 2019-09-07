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

import styles from 'Assets/JSS/material-kit-pro-react/views/componentsSections/sectionCards';


class Marketing extends React.Component {
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
                <h2>Marketing</h2>
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
                              MARKETING
                            </h5>
                          </Success>
                          <h4 className={classes.cardTitle}>
                            <a href="#" onClick={(e) => e.preventDefault()}>
                              COMMUNITY MANAGER
                            </a>
                          </h4>
                          <ul className={classes.cardDescription}>
                            <li>An inclination towards curating new events to bring residents together and creating a sense of community</li>
                            <li>An endless appetite for networking and communicating with people</li>
                            <li>A social media virtuoso, adept with all the channels of online communications, helping us to express ourselves to the right people</li>
                            <li>An entrepreneurial mindset and a blazing hustle for bringing new ideas to the table every now and then</li>
                            <li>A leader in the crowd, making sure that your teammates get everything they need to get on with their work</li>
                            <li>Effectively manage and work with multi-disciplinary teams</li>
                            <li>Demonstrate personal accountability, constructive thinking and emotional intelligence</li>
                          </ul>
                        </CardBody>
                      </div>
                      <div className={classes.back}>
                        <CardBody className={classes.cardBodyRotate}>
                          <h5 className={classes.cardTitle}>COMMUNITY MANAGER</h5>
                          <p className={classes.cardDescription}>
                            <li>Knowing your way around money and can master the budgets for the community events</li>
                            <li>You can identify new opportunities of growth and take strategic initiatives for business growth</li>
                            <li>Successful track record in building strong relationships with Brand and Venue Partners</li>
                            <li>A graduate degree in any specialization. Prior experience in developing community engagement programs is highly desirable.</li>
                            <li>This role will require active engagement with the members during the events and will be a demanding role considering the events shall be conducted intermittently across the month.</li>
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

Marketing.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Marketing);
