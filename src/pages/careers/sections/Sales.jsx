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


class Sales extends React.Component {
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
                <h2>Sales & BD</h2>
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
                              SALES
                            </h5>
                          </Success>
                          <h4 className={classes.cardTitle}>
                            <a href="#" onClick={(e) => e.preventDefault()}>
                              CORPORATE SALES
                            </a>
                          </h4>
                          <br/>
                          <ul className={classes.cardDescription}>
                            <li>Bachelor’s degree in a business related discipline such as commerce,
                              economics, or marketing from a recognized University.
                            </li>
                            <li>Minimum 2 years of experience in the field of sales</li>
                            <li>Should be able to coordinate and manage the sales operations of the
                              company to maximize profit
                            </li>
                            <li>Excellent Communication Skills, should be well versed in
                              communicating with clients to offer them products/services and
                              convince purchase
                            </li>
                            <li>Should be able to collaborate with sales teams to develop and
                              implement effective strategies.
                            </li>
                            <li>Should have great interpersonal, management and negotiating skills
                            </li>
                          </ul>
                          <br/>
                          <br/>
                          <br/>
                        </CardBody>
                      </div>
                      <div className={classes.back}>
                        <CardBody className={classes.cardBodyRotate}>
                          <h5 className={classes.cardTitle}>CORPORATE SALES</h5>
                          <ul className={classes.cardDescription}>
                            <li>Identifying business opportunities by identifying prospects and
                              evaluating their position in the industry; researching and analyzing
                              sales options.
                            </li>
                            <li>Reaching out to corporates, negotiating deals and closing them</li>
                            <li>Being a self-starter and taking end to end ownership of a
                              prospective client
                            </li>
                            <li>Achieving sales by establishing contact and developing relationships
                              with prospects; recommending solutions.
                            </li>
                            <li>Maintaining relationships with clients by providing support,
                              information, and guidance.
                            </li>
                            <li>Researching and recommending new opportunities; recommending profit
                              and service improvements.
                            </li>
                            <li>Identifying product improvements or new products by remaining
                              updated on industry trends, market activities, and competitors.
                            </li>
                            <li>Preparing reports by collecting, analyzing, and summarizing
                              information.
                            </li>
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
                              BUSINESS DEVELOPMENT
                            </h5>
                          </Success>
                          <h4 className={classes.cardTitle}>
                            <a href="#" onClick={(e) => e.preventDefault()}>
                              BUSINESS ANALYST
                            </a>
                          </h4>
                          <br/>
                          <br/>
                          <ul className={classes.cardDescription}>
                            <li>Bachelor’s Degree in appropriate field of study</li>
                            <li>Proven work experience of minimum 2 years in related field</li>
                            <li>Microsoft Access and/or SQL experience strongly preferred</li>
                            <li>Ability to impact operations and effect change without being
                              confrontational
                            </li>
                            <li>Detail oriented, inquisitive</li>
                            <li>Ability to work independently and with others</li>
                            <li>Extremely organized with strong time-management skills</li>
                            <li>Good communication and inter-personal skills</li>
                            <li>Good problem solving and analytical skills</li>
                          </ul>
                          <br/>
                          <br/>
                          <br/>
                        </CardBody>
                      </div>
                      <div className={classes.back}>
                        <CardBody className={classes.cardBodyRotate}>
                          <h5 className={classes.cardTitle}>BUSINESS ANALYST</h5>
                          <ul className={classes.cardDescription}>
                            <li>Analyze the structure of a business and how it uses technology and
                              what its goals are
                            </li>
                            <li>Identify problems within a business, including thorough using of
                              data modelling techniques
                            </li>
                            <li>Formulate ways for business to improve, based on previous research
                            </li>
                            <li>Persuade internal and external stakeholders of the benefits of new
                              technologies or strategies
                            </li>
                            <li>Oversee the implementation of new technologies and systems</li>
                            <li>Construct workflow charts and diagrams; studying system
                              capabilities; writing specifications
                            </li>
                            <li>Improve systems by studying current practices; designing
                              modifications
                            </li>
                            <li>Recommend controls by identifying problems; writing improved
                              procedures
                            </li>
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
                              SALES
                            </h5>
                          </Success>
                          <h4 className={classes.cardTitle}>
                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                              REGIONAL SALES HEAD
                            </a>
                          </h4>
                          <ul className={classes.cardDescription}>
                            <li>Bachelor’s degree in a business related discipline such as commerce,
                              economics, or marketing from a recognized University
                            </li>
                            <li>10-12 years of proven work experience as an area manager or similar
                              senior sales role
                            </li>
                            <li>Ability to lead and motivate a high performance sales team</li>
                            <li>Strong organizational skills with a problem solving attitude</li>
                            <li>Availability to travel when needed</li>
                            <li>Ability to measure and analyze key performance indicators (ROI and
                              KPIs)
                            </li>
                          </ul>
                          <br/>
                          <br/>
                          <br/>
                        </CardBody>
                      </div>
                      <div className={classes.back}>
                        <CardBody className={classes.cardBodyRotate}>
                          <h5 className={classes.cardTitle}>REGIONAL SALES HEAD</h5>
                          <ul className={classes.cardDescription}>
                            <li>Managing a sales team in order to maximize sales revenue and meet or
                              exceed corporate-set goals
                            </li>
                            <li>Forecasting annual, quarterly and monthly sales goals</li>
                            <li>Assisting sales personnel in their techniques</li>
                            <li>Developing specific plans to ensure growth both long and
                              short-term
                            </li>
                            <li>Educating sales team with presentations of strategies, seminars and
                              regular meetings
                            </li>
                            <li>Reviewing regional expenses and recommending improvements</li>
                            <li>Provides ongoing support to distribute and produce the product or
                              service.
                            </li>
                            <li>Ensures profitable growth in sales, revenue through planning,
                              execution and management of a supportive team.
                            </li>
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

Sales.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Sales);
