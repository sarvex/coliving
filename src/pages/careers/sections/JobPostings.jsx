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

import styles
  from '../../../assets/jss/material-kit-pro-react/views/componentsSections/sectionCards';

class SectionCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRotate1: '',
      activeRotate2: ''
    };
  }

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
    var rotatingCards = document.getElementsByClassName(classes.cardRotate);
    for (let i = 0; i < rotatingCards.length; i++) {
      var rotatingCard = rotatingCards[i];
      var rotatingWrapper = rotatingCard.parentElement;
      var cardWidth = rotatingCard.parentElement.offsetWidth;
      var cardHeight = rotatingCard.children[0].children[0].offsetHeight;
      rotatingWrapper.style.height = cardHeight + 'px';
      rotatingWrapper.style['margin-bottom'] = 30 + 'px';
      var cardFront = rotatingCard.getElementsByClassName(classes.front)[0];
      var cardBack = rotatingCard.getElementsByClassName(classes.back)[0];
      cardFront.style.height = cardHeight + 35 + 'px';
      cardFront.style.width = cardWidth + 'px';
      cardBack.style.height = cardHeight + 35 + 'px';
      cardBack.style.width = cardWidth + 'px';
    }
  };

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div {...rest} className="cd-section" id="cards">
        <div id="morphingCards" className="cd-section">
          <div className={classes.container}>
            <div className={classes.title}>
              <h2>Current Openings</h2>
              <h4>Gurugram, Haryana, India</h4>
            </div>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6} lg={4}>
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
                        <p className={classes.cardDescription}>
                          Proven work experience of 2-3 years as a HR Generalist or a similar
                          position. Should hold an MBA degree in HR or related discipline.
                        </p>
                      </CardBody>
                    </div>
                    <div className={classes.back}>
                      <CardBody className={classes.cardBodyRotate}>
                        <h5 className={classes.cardTitle}>HR Generalist</h5>
                        <p className={classes.cardDescription}>
                          Administer compensation and benefit plans Assist in talent
                          acquisition and recruitment processes ...
                        </p>
                        <div className={classes.textCenter}>
                          <Button round color="rose">
                            <Subject/> More Info
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
              <GridItem xs={12} sm={6} md={6} lg={4}>
                <div className={classes.rotatingCardContainer}>
                  <Card className={classes.cardRotate}>
                    <div className={classes.front}>
                      <CardBody className={classes.cardBodyRotate}>
                        <Success>
                          <h5 className={classes.cardCategorySocial}>
                            <i className="far fa-newspaper"/>
                            BD
                          </h5>
                        </Success>
                        <h4 className={classes.cardTitle}>
                          <a href="#" onClick={(e) => e.preventDefault()}>
                            BUSINESS ANALYST
                          </a>
                        </h4>
                        <p className={classes.cardDescription}>
                          Bachelor’s Degree in appropriate field of study Proven work
                          experience of minimum 2 years in related field
                        </p>
                      </CardBody>
                    </div>
                    <div className={classes.back}>
                      <CardBody className={classes.cardBodyRotate}>
                        <h5 className={classes.cardTitle}>BUSINESS ANALYST</h5>
                        <p className={classes.cardDescription}>
                          Identify problems within a business, including thorough using of
                          data modelling techniques ...
                        </p>
                        <div className={classes.textCenter}>
                          <Button round color="rose">
                            <Subject/> More Info
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
              <GridItem xs={12} sm={6} md={6} lg={4}>
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
                        <p className={classes.cardDescription}>
                          Minimum experience of 1 year as a Back-end developer BE / B Tech
                          degree in Computer Science or similar relevant field from a
                          recognized University.
                        </p>
                      </CardBody>
                    </div>
                    <div className={classes.back}>
                      <CardBody className={classes.cardBodyRotate}>
                        <h5 className={classes.cardTitle}>BACK-END DEVELOPER</h5>
                        <p className={classes.cardDescription}>
                          Integration of user-facing elements developed by a front-end
                          developers with server side logic Building reusable code and
                          libraries for future use ...
                        </p>
                        <div className={classes.textCenter}>
                          <Button round color="rose">
                            <Subject/> More Info
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
              <GridItem xs={12} sm={6} md={6} lg={4}>
                <div className={classes.rotatingCardContainer}>
                  <Card className={classes.cardRotate}>
                    <div className={classes.front}>
                      <CardBody className={classes.cardBodyRotate}>
                        <Success>
                          <h5 className={classes.cardCategorySocial}>
                            <i className="far fa-newspaper"/>
                            Other
                          </h5>
                        </Success>
                        <h4 className={classes.cardTitle}>
                          <a href="#" onClick={(e) => e.preventDefault()}>
                            COMMUNITY MANAGER
                          </a>
                        </h4>
                        <p className={classes.cardDescription}>
                          A graduate degree in any specialization. Prior experience in
                          developing community engagement programs is highly desirable.
                        </p>
                      </CardBody>
                    </div>
                    <div className={classes.back}>
                      <CardBody className={classes.cardBodyRotate}>
                        <h5 className={classes.cardTitle}>COMMUNITY MANAGER</h5>
                        <p className={classes.cardDescription}>
                          This role will require active engagement with the Housr members
                          during the events and will be a demanding role considering the
                          events shall be conducted intermittently across the month. ...
                        </p>
                        <div className={classes.textCenter}>
                          <Button round color="rose">
                            <Subject/> More Info
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
              <GridItem xs={12} sm={6} md={6} lg={4}>
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
                        <p className={classes.cardDescription}>
                          Bachelor’s degree in a business related discipline such as commerce,
                          economics, or marketing from a recognized University. Minimum 2
                          years of experience in the field of sales
                        </p>
                      </CardBody>
                    </div>
                    <div className={classes.back}>
                      <CardBody className={classes.cardBodyRotate}>
                        <h5 className={classes.cardTitle}>CORPORATE SALES</h5>
                        <p className={classes.cardDescription}>
                          Identifying business opportunities by identifying prospects and
                          evaluating their position in the industry; researching and analyzing
                          sales options. ...
                        </p>
                        <div className={classes.textCenter}>
                          <Button round color="rose">
                            <Subject/> More Info
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
              <GridItem xs={12} sm={6} md={6} lg={4}>
                <div className={classes.rotatingCardContainer}>
                  <Card className={classes.cardRotate}>
                    <div className={classes.front}>
                      <CardBody className={classes.cardBodyRotate}>
                        <Success>
                          <h5 className={classes.cardCategorySocial}>
                            <i className="far fa-newspaper"/>
                            ARCHITECT
                          </h5>
                        </Success>
                        <h4 className={classes.cardTitle}>
                          <a href="#" onClick={(e) => e.preventDefault()}>
                            DESIGN ARCHITECT
                          </a>
                        </h4>
                        <p className={classes.cardDescription}>
                          Minimum Experience required: 2 years Should hold a degree in
                          Bachelors in Architecture from a recognized University. Proficiency
                          in using Auto CAD
                        </p>
                      </CardBody>
                    </div>
                    <div className={classes.back}>
                      <CardBody className={classes.cardBodyRotate}>
                        <h5 className={classes.cardTitle}> DESIGN ARCHITECT</h5>
                        <p className={classes.cardDescription}>
                          Creating building designs and highly detailed drawings by using
                          specialist computer-aided design (CAD) applications ...
                        </p>
                        <div className={classes.textCenter}>
                          <Button round color="rose">
                            <Subject/> More Info
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
              <GridItem xs={12} sm={6} md={6} lg={4}>
                <div className={classes.rotatingCardContainer}>
                  <Card className={classes.cardRotate}>
                    <div className={classes.front}>
                      <CardBody className={classes.cardBodyRotate}>
                        <Success>
                          <h5 className={classes.cardCategorySocial}>
                            <i className="far fa-newspaper"/>
                            Other
                          </h5>
                        </Success>
                        <h4 className={classes.cardTitle}>
                          <a href="#" onClick={(e) => e.preventDefault()}>
                            PERSONAL ASSISTANT
                          </a>
                        </h4>
                        <p className={classes.cardDescription}>
                          At least 2 years of work experience as PA or EA preferably to a CEO
                          or Founder of the company Excellent written and oral communication
                          skills in English
                        </p>
                      </CardBody>
                    </div>
                    <div className={classes.back}>
                      <CardBody className={classes.cardBodyRotate}>
                        <h5 className={classes.cardTitle}>PERSONAL ASSISTANT</h5>
                        <p className={classes.cardDescription}>
                          Organising and attending meetings, and arranging business trips
                          (including flights and accommodations) ...
                        </p>
                        <div className={classes.textCenter}>
                          <Button round color="rose">
                            <Subject/> More Info
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
              <GridItem xs={12} sm={6} md={6} lg={4}>
                <div className={classes.rotatingCardContainer}>
                  <Card className={classes.cardRotate}>
                    <div className={classes.front}>
                      <CardBody className={classes.cardBodyRotate}>
                        <Success>
                          <h5 className={classes.cardCategorySocial}>
                            <i className="far fa-newspaper"/>
                            FINANCE
                          </h5>
                        </Success>
                        <h4 className={classes.cardTitle}>
                          <a href="#" onClick={(e) => e.preventDefault()}>
                            FINANCIAL ANALYST
                          </a>
                        </h4>
                        <p className={classes.cardDescription}>
                          Proven experience of 4-6 years as an analyst or other relevant
                          experience Strong financial modeling experience MBAs and CFAs are
                          preferred
                        </p>
                      </CardBody>
                    </div>
                    <div className={classes.back}>
                      <CardBody className={classes.cardBodyRotate}>
                        <h5 className={classes.cardTitle}>FINANCIAL ANALYST</h5>
                        <p className={classes.cardDescription}>
                          Responsible for building financial models, making deal memos,
                          revising underwriting values ...
                        </p>
                        <div className={classes.textCenter}>
                          <Button round color="rose">
                            <Subject/> More Info
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
              <GridItem xs={12} sm={6} md={6} lg={4}>
                <div className={classes.rotatingCardContainer}>
                  <Card className={classes.cardRotate}>
                    <div className={classes.front}>
                      <CardBody className={classes.cardBodyRotate}>
                        <Success>
                          <h5 className={classes.cardCategorySocial}>
                            <i className="far fa-newspaper"/>
                            Other
                          </h5>
                        </Success>
                        <h4 className={classes.cardTitle}>
                          <a href="#" onClick={(e) => e.preventDefault()}>
                            FULL STACK DEVELOPER
                          </a>
                        </h4>
                        <p className={classes.cardDescription}>
                          4+ years of software developer experience. Experience with one or
                          more of our core technologies React, Node.js, PHP. creative and
                          constructive problem solver.
                        </p>
                      </CardBody>
                    </div>
                    <div className={classes.back}>
                      <CardBody className={classes.cardBodyRotate}>
                        <h5 className={classes.cardTitle}>FULL STACK DEVELOPER</h5>
                        <p className={classes.cardDescription}>
                          Highly experienced with back-end programming languages Ex: PHP,
                          Python, Ruby, Java, .NET, JavaScript etc ...
                        </p>
                        <div className={classes.textCenter}>
                          <Button round color="rose">
                            <Subject/> More Info
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
              <GridItem xs={12} sm={6} md={6} lg={4}>
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
                        <p className={classes.cardDescription}>
                          Proven work experience as an HR business partner. Excellent people
                          management skills. Analytical and goal oriented. Demonstrable
                          experience with HR metrics.
                        </p>
                      </CardBody>
                    </div>
                    <div className={classes.back}>
                      <CardBody className={classes.cardBodyRotate}>
                        <h5 className={classes.cardTitle}>HR BUSINESS PARTNER</h5>
                        <p className={classes.cardDescription}>
                          Work closely with management and employees to improve work
                          relationships, build morale and increase productivity and retention
                          ...
                        </p>
                        <div className={classes.textCenter}>
                          <Button round color="rose">
                            <Subject/> More Info
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
              <GridItem xs={12} sm={6} md={6} lg={4}>
                <div className={classes.rotatingCardContainer}>
                  <Card className={classes.cardRotate}>
                    <div className={classes.front}>
                      <CardBody className={classes.cardBodyRotate}>
                        <Success>
                          <h5 className={classes.cardCategorySocial}>
                            <i className="far fa-newspaper"/>
                            DESIGNER
                          </h5>
                        </Success>
                        <h4 className={classes.cardTitle}>
                          <a href="#" onClick={(e) => e.preventDefault()}>
                            JUNIOR INTERIOR DESIGNER
                          </a>
                        </h4>
                        <p className={classes.cardDescription}>
                          Should have work experience of 3-5 years. Should hold a Bachelor’s
                          degree in Interior designing, architecture or related discipline.
                        </p>
                      </CardBody>
                    </div>
                    <div className={classes.back}>
                      <CardBody className={classes.cardBodyRotate}>
                        <h5 className={classes.cardTitle}>JUNIOR INTERIOR DESIGNER</h5>
                        <p className={classes.cardDescription}>
                          An artist who can infuse magic in our spaces. One with an aesthetic
                          sense, who knows about the devil in the details. ...
                        </p>
                        <div className={classes.textCenter}>
                          <Button round color="rose">
                            <Subject/> More Info
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
              <GridItem xs={12} sm={6} md={6} lg={4}>
                <div className={classes.rotatingCardContainer}>
                  <Card className={classes.cardRotate}>
                    <div className={classes.front}>
                      <CardBody className={classes.cardBodyRotate}>
                        <Success>
                          <h5 className={classes.cardCategorySocial}>
                            <i className="far fa-newspaper"/>
                            DESIGNER
                          </h5>
                        </Success>
                        <h4 className={classes.cardTitle}>
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            SENIOR INTERIOR DESIGNER
                          </a>
                        </h4>
                        <p className={classes.cardDescription}>
                          Should have work experience of 7-12 years Should have handled a team
                          of minimum 2 in the past.
                        </p>
                      </CardBody>
                    </div>
                    <div className={classes.back}>
                      <CardBody className={classes.cardBodyRotate}>
                        <h5 className={classes.cardTitle}>SENIOR INTERIOR DESIGNER</h5>
                        <p className={classes.cardDescription}>
                          An artist who can infuse magic in our spaces. One with an aesthetic
                          sense, who knows about the devil in the details. ...
                        </p>
                        <div className={classes.textCenter}>
                          <Button round color="rose">
                            <Subject/> More Info
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
              <GridItem xs={12} sm={6} md={6} lg={4}>
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
                        <p className={classes.cardDescription}>
                          Should have an experience of 2 – 8 years Education Qualifications:
                          Preferably an MBA degree holder
                        </p>
                      </CardBody>
                    </div>
                    <div className={classes.back}>
                      <CardBody className={classes.cardBodyRotate}>
                        <h5 className={classes.cardTitle}>ADMINISTRATION EXECUTIVE</h5>
                        <p className={classes.cardDescription}>
                          Prepare regular reports on expenses and office budgets. Maintain and
                          update company databases. ...
                        </p>
                        <div className={classes.textCenter}>
                          <Button round color="rose">
                            <Subject/> More Info
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
              <GridItem xs={12} sm={6} md={6} lg={4}>
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
                        <p className={classes.cardDescription}>
                          Minimum 4 years of experience in a similar role A strong knowledge
                          of CRM process (Ideally CRM Dynamics).
                        </p>
                      </CardBody>
                    </div>
                    <div className={classes.back}>
                      <CardBody className={classes.cardBodyRotate}>
                        <h5 className={classes.cardTitle}>CRM DEVELOPER</h5>
                        <p className={classes.cardDescription}>
                          Work with local stakeholders to identify business changes and ensure
                          the changes are fed to the Project Management/ Group Stakeholders
                          ...
                        </p>
                        <div className={classes.textCenter}>
                          <Button round color="rose">
                            <Subject/> More Info
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
              <GridItem xs={12} sm={6} md={6} lg={4}>
                <div className={classes.rotatingCardContainer}>
                  <Card className={classes.cardRotate}>
                    <div className={classes.front}>
                      <CardBody className={classes.cardBodyRotate}>
                        <Success>
                          <h5 className={classes.cardCategorySocial}>
                            <i className="far fa-newspaper"/>
                            Other
                          </h5>
                        </Success>
                        <h4 className={classes.cardTitle}>
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            HOUSR OFFICER
                          </a>
                        </h4>
                        <p className={classes.cardDescription}>
                          Minimum 3+ years’ experience in the Hospitality Industry, Assets and
                          Inventory Management, Real Estate or related Industry.
                        </p>
                      </CardBody>
                    </div>
                    <div className={classes.back}>
                      <CardBody className={classes.cardBodyRotate}>
                        <h5 className={classes.cardTitle}>HOUSR OFFICER</h5>
                        <p className={classes.cardDescription}>
                          A degree in the subject awarded by a University college dedicated to
                          the studies of hospitality management or a business school with a
                          relevant department. ...
                        </p>
                        <div className={classes.textCenter}>
                          <Button round color="rose">
                            <Subject/> More Info
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
              <GridItem xs={12} sm={6} md={6} lg={4}>
                <div className={classes.rotatingCardContainer}>
                  <Card className={classes.cardRotate}>
                    <div className={classes.front}>
                      <CardBody className={classes.cardBodyRotate}>
                        <Success>
                          <h5 className={classes.cardCategorySocial}>
                            <i className="far fa-newspaper"/>
                            Finance
                          </h5>
                        </Success>
                        <h4 className={classes.cardTitle}>
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            FINANCE
                          </a>
                        </h4>
                        <p className={classes.cardDescription}>
                          Good Working Knowledge of MS Excel. Good Communication,
                          Interpersonal & presentation Skills. CA (Inter)/ CFA or MBA Finance
                          with 2-3 years of Experience.
                        </p>
                      </CardBody>
                    </div>
                    <div className={classes.back}>
                      <CardBody className={classes.cardBodyRotate}>
                        <h5 className={classes.cardTitle}>FINANCE</h5>
                        <p className={classes.cardDescription}>
                          Manage the Payroll process & other Accounting Tasks including
                          streamlining of Invoicing, Payables, Receivables and good knowledge
                          of P&L & Balance Sheet. ...
                        </p>
                        <div className={classes.textCenter}>
                          <Button round color="rose">
                            <Subject/> More Info
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
              <GridItem xs={12} sm={6} md={6} lg={4}>
                <div className={classes.rotatingCardContainer}>
                  <Card className={classes.cardRotate}>
                    <div className={classes.front}>
                      <CardBody className={classes.cardBodyRotate}>
                        <Success>
                          <h5 className={classes.cardCategorySocial}>
                            <i className="far fa-newspaper"/>
                            Other
                          </h5>
                        </Success>
                        <h4 className={classes.cardTitle}>
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            HEAD- TRANSFORMATION
                          </a>
                        </h4>
                        <p className={classes.cardDescription}>
                          12+ years of experience in the real estate industry. B.E. in Civil
                          Engineering (mandatory). PMP certification (mandatory).
                        </p>
                      </CardBody>
                    </div>
                    <div className={classes.back}>
                      <CardBody className={classes.cardBodyRotate}>
                        <h5 className={classes.cardTitle}>HEAD- TRANSFORMATION</h5>
                        <p className={classes.cardDescription}>
                          Coordinating with cross discipline team members to make sure that
                          all parties are on track with project requirements, deadlines, and
                          schedules. ...
                        </p>
                        <div className={classes.textCenter}>
                          <Button round color="rose">
                            <Subject/> More Info
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
              <GridItem xs={12} sm={6} md={6} lg={4}>
                <div className={classes.rotatingCardContainer}>
                  <Card className={classes.cardRotate}>
                    <div className={classes.front}>
                      <CardBody className={classes.cardBodyRotate}>
                        <Success>
                          <h5 className={classes.cardCategorySocial}>
                            <i className="far fa-newspaper"/>
                            Product
                          </h5>
                        </Success>
                        <h4 className={classes.cardTitle}>
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            PRODUCT MANAGER
                          </a>
                        </h4>
                        <p className={classes.cardDescription}>
                          Product Manager with 4-6 years hands on experience in developing
                          front end (apps/web pages) and back end (dashboards, vendor
                          management, property management) solutions.
                        </p>
                      </CardBody>
                    </div>
                    <div className={classes.back}>
                      <CardBody className={classes.cardBodyRotate}>
                        <h5 className={classes.cardTitle}>PRODUCT MANAGER</h5>
                        <p className={classes.cardDescription}>
                          Drive the product and business-planning process across
                          cross-functional teams of the company ...
                        </p>
                        <div className={classes.textCenter}>
                          <Button round color="rose">
                            <Subject/> More Info
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
              <GridItem xs={12} sm={6} md={6} lg={4}>
                <div className={classes.rotatingCardContainer}>
                  <Card className={classes.cardRotate}>
                    <div className={classes.front}>
                      <CardBody className={classes.cardBodyRotate}>
                        <Success>
                          <h5 className={classes.cardCategorySocial}>
                            <i className="far fa-newspaper"/>
                            Other
                          </h5>
                        </Success>
                        <h4 className={classes.cardTitle}>
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            REGIONAL SALES HEAD
                          </a>
                        </h4>
                        <p className={classes.cardDescription}>
                          10-12 years of proven work experience as an area manager or similar
                          senior sales role. Ability to lead and motivate a high performance
                          sales team.
                        </p>
                      </CardBody>
                    </div>
                    <div className={classes.back}>
                      <CardBody className={classes.cardBodyRotate}>
                        <h5 className={classes.cardTitle}>REGIONAL SALES HEAD</h5>
                        <p className={classes.cardDescription}>
                          Managing a sales team in order to maximize sales revenue and meet or
                          exceed corporate-set goals ...
                        </p>
                        <div className={classes.textCenter}>
                          <Button round color="rose">
                            <Subject/> More Info
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
              <GridItem xs={12} sm={6} md={6} lg={4}>
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
                        <p className={classes.cardDescription}>
                          Experience in Test automation preferred. BE/B TECH degree in
                          Computer Science or similar relevant field from a recognized
                          University. Proven experience of 4-5 years as a Software Tester or
                          similar role.
                        </p>
                      </CardBody>
                    </div>
                    <div className={classes.back}>
                      <CardBody className={classes.cardBodyRotate}>
                        <h5 className={classes.cardTitle}>TESTING ARCHITECT</h5>
                        <p className={classes.cardDescription}>
                          Own and specialize on your responsible products – functionalities,
                          end to end product integration, data flow, customer
                          experience/behavior ...
                        </p>
                        <div className={classes.textCenter}>
                          <Button round color="rose">
                            <Subject/> More Info
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

SectionCards.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(SectionCards);
