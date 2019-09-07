import React from "Views/PricingPage/Sections/node_modules/react";
// nodejs library to set properties for components
import PropTypes from "Views/PricingPage/Sections/node_modules/prop-types";
// nodejs library that concatenates classes
import classNames from "Views/PricingPage/Sections/node_modules/classnames";
// core components
import GridContainer from "Views/PricingPage/Sections/node_modules/Components/Instruction/node_modules/components/Grid/GridContainer";
import GridItem from "Views/PricingPage/Sections/node_modules/Components/Instruction/node_modules/components/Grid/GridItem";
import NavPills from "Views/PricingPage/Sections/node_modules/components/NavPills/NavPills";
import Card from "Views/PricingPage/Sections/node_modules/Components/CustomTabs/node_modules/components/Card/Card";
import CardBody from "Views/PricingPage/Sections/node_modules/Components/CustomTabs/node_modules/components/Card/CardBody";
import Button from "Views/PricingPage/Sections/node_modules/Components/CustomUpload/node_modules/components/CustomButtons/Button";
// @material-ui/core components
import withStyles from "Views/PricingPage/Sections/node_modules/@material-ui/core/styles/withStyles";

import pricingStyle from "Views/PricingPage/Sections/node_modules/assets/jss/material-kit-pro-react/views/pricingSections/pricingStyle";

function SectionPricing(props) {
  const { classes } = props;

  return (
    <div className={classes.pricingSection}>
      <GridContainer>
        <GridItem
          md={6}
          sm={6}
          className={classNames(
            classes.mrAuto,
            classes.mlAuto,
            classes.textCenter
          )}
        >
          <NavPills
            alignCenter
            color="rose"
            tabs={[
              {
                tabButton: "monthly"
              },
              {
                tabButton: "yearly"
              }
            ]}
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={4} sm={4}>
          <Card plain pricing>
            <CardBody pricing>
              <h6
                className={classNames(classes.cardCategory, classes.textInfo)}
              >
                Free
              </h6>
              <h1 className={classes.cardTitle}>
                <small>$</small>0 <small>/mo</small>
              </h1>
              <ul>
                <li>
                  <b>1</b> Project
                </li>
                <li>
                  <b>5</b> Team Members
                </li>
                <li>
                  <b>55</b> Personal Contacts
                </li>
                <li>
                  <b>5.000</b> Messages
                </li>
              </ul>
              <Button href="#pablo" color="rose" round>
                Get started
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem md={4} sm={4}>
          <Card raised pricing color="rose">
            <CardBody pricing>
              <h6 className={classes.cardCategory}>Premium</h6>
              <h1 className={classes.cardTitleWhite}>
                <small>$</small>89 <small>/mo</small>
              </h1>
              <ul>
                <li>
                  <b>500</b> Project
                </li>
                <li>
                  <b>50</b> Team Members
                </li>
                <li>
                  <b>125</b> Personal Contacts
                </li>
                <li>
                  <b>15.000</b> Messages
                </li>
              </ul>
              <Button href="#pablo" color="white" round>
                Get started
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem md={4} sm={4}>
          <Card plain pricing>
            <CardBody pricing>
              <h6
                className={classNames(classes.cardCategory, classes.textInfo)}
              >
                Platinum
              </h6>
              <h1 className={classes.cardTitle}>
                <small>$</small>199 <small>/mo</small>
              </h1>
              <ul>
                <li>
                  <b>1000</b> Project
                </li>
                <li>
                  <b>100</b> Team Members
                </li>
                <li>
                  <b>550</b> Personal Contacts
                </li>
                <li>
                  <b>50.000</b> Messages
                </li>
              </ul>
              <Button href="#pablo" color="rose" round>
                Get started
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

SectionPricing.propTypes = {
  classes: PropTypes.object
};

export default withStyles(pricingStyle)(SectionPricing);
