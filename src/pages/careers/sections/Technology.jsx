import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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


class Technology extends React.Component {
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
                <h2>Technology</h2>
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
                              TECH
                            </h5>
                          </Success>
                          <h4 className={classes.cardTitle}>
                            <a href="#" onClick={(e) => e.preventDefault()}>
                              BACK-END DEVELOPER
                            </a>
                          </h4>
                          <ul className={classes.cardDescription}>
                            <li> Minimum experience of 1 year as a Back-end developer</li>
                            <li> BE / B Tech degree in Computer Science or similar relevant field
                              from a recognized University.
                            </li>
                            <li> In-depth understanding of web development</li>
                            <li> Experience with programming languages like Java, Ruby, PHP and
                              Python
                            </li>
                            <li> Experience with CMS framework</li>
                            <li> Familiarity with front-end languages such as HTML, JavaScript and
                              CSS
                            </li>
                            <li> Critical thinker and problem-solving skills</li>
                            <li> Team player with good communication skills</li>
                            <li> Good organizational and time-management skill</li>
                          </ul>
                          <br/>
                          <br/>
                          <br/>
                          <br/>

                        </CardBody>
                      </div>
                      <div className={classes.back}>
                        <CardBody className={classes.cardBodyRotate}>
                          <h5 className={classes.cardTitle}>BACK-END DEVELOPER</h5>
                          <ul className={classes.cardDescription}>
                            <li>Integration of user-facing elements developed by a front-end
                              developers with server side logic
                            </li>
                            <li>Building reusable code and libraries for future use</li>
                            <li>Optimization of the application for maximum speed and scalability
                            </li>
                            <li>Implementation of security and data protection</li>
                            <li>Design and implementation of data storage solutions</li>
                            <li>Collaborating with the front-end developers and other team members
                              to establish objectives and design more functional, cohesive codes to
                              enhance the user experience.
                            </li>
                            <li>Developing ideas for new programs, products, or features by
                              monitoring industry developments and trends.
                            </li>
                            <li>Recording data and reporting it to proper parties, such as clients
                              or leadership.
                            </li>
                            <li>Taking lead on projects, as needed</li>
                          </ul>
                          <div className={classes.textCenter}>
                            <Link to="/backend">
                              <Button round color="rose">
                                <Subject/> Apply Now
                              </Button>
                            </Link>
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
                              TECH
                            </h5>
                          </Success>
                          <h4 className={classes.cardTitle}>
                            <a href="#" onClick={(e) => e.preventDefault()}>
                              FULL STACK DEVELOPER
                            </a>
                          </h4>
                          <ul className={classes.cardDescription}>
                            <li>You have 4+ years of software developer experience</li>
                            <li>You have Understanding of OOP, data structures, and algorithms</li>
                            <li>You have Experience with one or more of our core technologies React,
                              Node.js, PHP
                            </li>
                            <li>You are a creative and constructive problem solver</li>
                            <li>You are a diligent, persistent worker</li>
                            <li>You are a quick learner, collaborative, willing to question, eager
                              to learn
                            </li>
                            <li>You have Proficiency with fundamental Front End Languages such as
                              HTML, CSS, JAVASCRIPT
                            </li>
                            <li>You are Familiar with Java script Frameworks such as ANGULAR JS,
                              REACT
                            </li>
                            <li>You have Excellent verbal communication</li>
                            <li>You have Good Problem solving skills</li>
                          </ul>
                        </CardBody>
                      </div>
                      <div className={classes.back}>
                        <CardBody className={classes.cardBodyRotate}>
                          <h5 className={classes.cardTitle}>FULL STACK DEVELOPER</h5>
                          <ul className={classes.cardDescription}>
                            <li>Prepare design documentation</li>
                            <li>Write and maintain technical documentation to describe program
                              development, logic, coding, testing, changes, and corrections
                            </li>
                            <li>Collaborate and communicate effectively with stakeholders throughout
                              the organization
                            </li>
                            <li>Oversee and mentor junior developers on projects.</li>
                            <li>Collaborate with the rest of the engineering team to design and
                              launch new features
                            </li>
                            <li>Maintain code integrity and organization</li>
                            <li>Highly experienced with back-end programming languages Ex: PHP,
                              Python, Ruby, Java, .NET, JavaScript etc
                            </li>
                            <li>Creating servers and databases for functionality.</li>
                            <li>Maintain and help optimize existing systems.</li>
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
                              TECH
                            </h5>
                          </Success>
                          <h4 className={classes.cardTitle}>
                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                              PRODUCT MANAGER
                            </a>
                          </h4>
                          <ul className={classes.cardDescription}>
                            <li>Product Manager with 4-6 years hands on experience in developing
                              front end (apps/web pages) and back end (dashboards, vendor
                              management, property management) solutions.
                            </li>
                            <li>Fairly good understanding of all things tech - platform, language,
                              basic coding.
                            </li>
                            <li>Ability to transform marketing insights into viable products by
                              working closely with the tech team. Hustler and data oriented.
                            </li>
                            <li>Data analytics, integration with GA, GTM integration, working on
                              LMS/CRM platform also a part of the role.
                            </li>
                            <li>As an ideal candidate, you will have a keen eye for gaps in consumer
                              product offerings and the innovative mindset to fill them.
                            </li>
                            <li>You’re a highly skilled market analyst with a proven ability to
                              strategize the full lifecycle of product production — from conception
                              through release.
                            </li>
                          </ul>
                        </CardBody>
                      </div>
                      <div className={classes.back}>
                        <CardBody className={classes.cardBodyRotate}>
                          <h5 className={classes.cardTitle}>PRODUCT MANAGER</h5>
                          <ul className={classes.cardDescription}>
                            <li>Drive the product and business-planning process across
                              cross-functional teams of the company
                            </li>
                            <li>Analyze consumer needs, current market trends
                            </li>
                            <li>Assess current competitor offerings, seeking opportunities for
                              differentiation
                            </li>
                            <li>Analyze product requirements and develop appropriate programs to
                              ensure they’re successfully achieved
                            </li>
                            <li>Strategize appropriate to-market plans
                            </li>
                            <li>Create product strategy documents that describe business cases,
                              high-level use cases, technical requirements, revenue, and ROI
                            </li>
                            <li>Analyze market data to develop sales strategies, and define product
                              objectives for effective marketing communications plans
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
                              TECH
                            </h5>
                          </Success>
                          <h4 className={classes.cardTitle}>
                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                              TESTING ARCHITECT
                            </a>
                          </h4>
                          <ul className={classes.cardDescription}>
                            <li>Experience in Test automation preferred</li>
                            <li>BE/B TECH degree in Computer Science or similar relevant field from
                              a recognized University.
                            </li>
                            <li>Proven experience of 4-5 years as a Software Tester or similar
                              role
                            </li>
                            <li>Good command of English (Speaking, Writing, and Reading)</li>
                            <li>Experience in Agile Methodology is a plus</li>
                            <li>Ability to identify and escalate issues in a timely manner</li>
                            <li>Ability to work with minimal supervision and commit to the team's
                              schedules and goals
                            </li>
                            <li>Good communication and interpersonal skills</li>
                            <li>Good analytical and problem solving skills</li>
                            <li>Be able to work under direct and assertive culture</li>
                            <li>Working knowledge of test management software (e.g. qTest, Zephyr)
                              and SQL
                            </li>
                          </ul>
                        </CardBody>
                      </div>
                      <div className={classes.back}>
                        <CardBody className={classes.cardBodyRotate}>
                          <h5 className={classes.cardTitle}>TESTING ARCHITECT</h5>
                          <ul className={classes.cardDescription}>
                            <li>Own and specialize on your responsible products – functionalities,
                              end to end product integration, data flow, customer
                              experience/behavior
                            </li>
                            <li>Coaching small group of QA engineer on technical aspect of
                              products
                            </li>
                            <li>Lead test strategy of assigned projects to ensure the quality of
                              products
                            </li>
                            <li>Own quality practice of assigned scrum team using Agile
                              methodology
                            </li>
                            <li>Monitor and ensure each change achieves its business KPI on
                              production
                            </li>
                            <li>Drive the velocity of product development together with scrum team
                            </li>
                            <li>Review and analyze system specifications</li>
                            <li>Collaborate with Tech team to develop effective strategies and test
                              plans
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
                              TECH
                            </h5>
                          </Success>
                          <h4 className={classes.cardTitle}>
                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                              CRM DEVELOPER
                            </a>
                          </h4>
                          <ul className={classes.cardDescription}>
                            <li>Minimum 4 years of experience in a similar role</li>
                            <li>A strong knowledge of CRM process (Ideally CRM Dynamics).</li>
                            <li>Ability to work with an IT team to turn business requirements into
                              system specifications
                            </li>
                            <li>Ability to review existing business processes and make
                              recommendations for areas of improvement
                            </li>
                            <li>Create effective test plans to be passed to a test team for
                              completion
                            </li>
                            <li>Experience implementing CRM solutions at an enterprise level</li>
                            <li>Experience with working with data automation tools, email marketing,
                              mobile push, adobe, Eloqua, etc.
                            </li>
                            <li>Experience in working in large CRM transformational programmes</li>
                            <li>Skilled in BI, SQL, and different CRM Systems.</li>
                          </ul>
                        </CardBody>
                      </div>
                      <div className={classes.back}>
                        <CardBody className={classes.cardBodyRotate}>
                          <h5 className={classes.cardTitle}>CRM DEVELOPER</h5>
                          <ul className={classes.cardDescription}>
                            <li>Work with local stakeholders to identify business changes and ensure
                              the changes are fed to the Project Management/ Group Stakeholders
                            </li>
                            <li>Interfaces – identify and work with the development stream to
                              specify and develop necessary interfaces
                            </li>
                            <li>Testing – work with business stakeholders to define and execute test
                              scenarios
                            </li>
                            <li>Data migration & cutover – work with the programme team and group
                              data management teams to ensure data changes are understood.
                            </li>
                            <li>Creation and roll out of dashboards across business to assist with
                              mapping and identifying trends in customer data.
                            </li>
                            <li>Develop and monitor consistent analytical reporting, with a focus on
                              CRM performance measures to establish baselines and trends.
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

Technology.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Technology);
