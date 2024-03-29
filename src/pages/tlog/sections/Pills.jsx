import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Tooltip from '@material-ui/core/Tooltip';
import FormatAlignLeft from '@material-ui/icons/FormatAlignLeft';
import GridContainer from 'Components/Grid/GridContainer';
import GridItem from 'Components/Grid/GridItem';
import NavPills from 'Components/NavPills/NavPills';
import Card from 'Components/Card/Card';
import CardBody from 'Components/Card/CardBody';
import Button from 'Components/CustomButtons/Button';

import office2 from 'Assets/Images/examples/office2.jpg';
import blog8 from 'Assets/Images/examples/blog8.jpg';
import cardProject6 from 'Assets/Images/examples/card-project6.jpg';

import sectionPillsStyle from 'Assets/JSS/material-kit-pro-react/views/blogPostsSections/sectionPillsStyle';

function SectionPills({ ...props }) {
  const { classes } = props;
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
          <NavPills
            alignCenter
            tabs={[
              {
                tabButton: 'All',
                tabContent: '',
              },
              {
                tabButton: 'World',
                tabContent: '',
              },
              {
                tabButton: 'Arts',
                tabContent: '',
              },
              {
                tabButton: 'Tech',
                tabContent: '',
              },
              {
                tabButton: 'Business',
                tabContent: '',
              },
            ]}
          />
          <div className={classes.tabSpace}/>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={6} md={6}>
          <Card
            raised
            background
            style={{ backgroundImage: `url(${office2})` }}
          >
            <CardBody background>
              <h6 className={classes.category}>WORLDS</h6>
              <a href="#pablo">
                <h3 className={classes.cardTitle}>
                  The Best Productivity Apps on Market
                </h3>
              </a>
              <p className={classes.category}>
                Don
                {'\''}
                t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button round href="#pablo" color="danger">
                <FormatAlignLeft className={classes.icons}/>
                {' '}
                Read article
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <Card
            raised
            background
            style={{ backgroundImage: `url(${blog8})` }}
          >
            <CardBody background>
              <h6 className={classes.category}>BUSINESS</h6>
              <a href="#pablo">
                <h3 className={classes.cardTitle}>
                  Working on Wallstreet is Not So Easy
                </h3>
              </a>
              <p className={classes.category}>
                Don
                {'\''}
                t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button round href="#pablo" color="primary">
                <FormatAlignLeft className={classes.icons}/>
                {' '}
                Read article
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <Card
            raised
            background
            style={{ backgroundImage: `url(${cardProject6})` }}
          >
            <CardBody background>
              <h6 className={classes.category}>MARKETING</h6>
              <a href="#pablo">
                <h3 className={classes.cardTitle}>
                  0 to 100.000 Customers in 6 months
                </h3>
              </a>
              <p className={classes.category}>
                Don
                {'\''}
                t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button round href="#pablo" color="warning">
                <FormatAlignLeft className={classes.icons}/>
                {' '}
                Read case study
              </Button>
              <Tooltip
                id="tooltip-pocket"
                title="Save to Pocket"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button color="white" simple justIcon>
                  <i className="fab fa-get-pocket"/>
                </Button>
              </Tooltip>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(sectionPillsStyle)(SectionPills);
