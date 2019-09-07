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


class Finance extends React.Component {
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
                <h2>Finance</h2>
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
                              FINANCE
                            </h5>
                          </Success>
                          <h4 className={classes.cardTitle}>
                            <a href="#" onClick={(e) => e.preventDefault()}>
                              FINANCIAL ANALYST
                            </a>
                          </h4>
                          <ul className={classes.cardDescription}>

                            <li>Proven experience of 4-6 years as an analyst or other relevant
                              experience
                            </li>
                            <li>Strong financial modeling experience</li>
                            <li>MBAs and CFAs are preferred</li>
                            <li>Finance, Accounting, Economics, or Statistics are preferred major
                              fields
                            </li>
                            <li>Proven work experience in a financial analyst role</li>
                            <li>Strong quantitative and analytical competency</li>
                            <li>Self-starter with excellent interpersonal communication and
                              problem-solving skills
                            </li>
                            <li>Advanced knowledge of Excel</li>
                          </ul>
                        </CardBody>
                      </div>
                      <div className={classes.back}>
                        <CardBody className={classes.cardBodyRotate}>
                          <h5 className={classes.cardTitle}>FINANCIAL ANALYST</h5>
                          <p className={classes.cardDescription}>
                            <li>Perform financial forecasting, reporting, and operational metrics
                              tracking
                            </li>
                            <li>Responsible for building financial models, making deal memos,
                              revising underwriting values
                            </li>
                            <li>Work on Mergers & Acquisitions and structured finance
                              transactions.
                            </li>
                            <li>Analyze financial data and create financial models for decision
                              support
                            </li>
                            <li>Analyze past results, perform variance analysis, identify trends,
                              and make recommendations for improvements
                            </li>
                            <li>Work closely with the accounting team to ensure accurate financial
                              reporting
                            </li>
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
                <GridItem sm={12} md={8} lg={6}>
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
                          <br/>
                          <ul className={classes.cardDescription}>
                            <li>CA (Inter)/ CFA or MBA Finance with 2-3 years of Experience.</li>
                            <li>Good Working Knowledge of MS Excel.</li>
                            <li>Good Communication, Interpersonal & presentation Skills.</li>
                            <li>Proactive, disciplined & executionist.</li>
                            <li>Working knowledge of ERP's is an add on.</li>
                          </ul>
                          <br/>
                          <br/>
                        </CardBody>
                      </div>
                      <div className={classes.back}>
                        <CardBody className={classes.cardBodyRotate}>
                          <h5 className={classes.cardTitle}>FINANCE</h5>
                          <p className={classes.cardDescription}>
                            <li>Manage the Payroll process & other Accounting Tasks including
                              streamlining of Invoicing, Payables, Receivables and good knowledge of
                              P&L & Balance Sheet.
                            </li>
                            <li>Good Understanding of Closing the books on monthly/ quarterly basis
                              and reporting to stakeholders.
                            </li>
                            <li>Managing the compliances (legal etc) in dealing with regulatory
                              authorities.
                            </li>
                            <li>Knowledge of Real estate accounting is an added advantage.</li>
                            <li>Worked through various teams as IT, operations, Product Vendor Teams
                              etc.
                            </li>
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

Finance.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Finance);
