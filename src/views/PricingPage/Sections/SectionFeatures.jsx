import React from "Views/PricingPage/Sections/node_modules/react";
// nodejs library to set properties for components
import PropTypes from "Views/PricingPage/Sections/node_modules/prop-types";
// core components
import GridContainer from "Views/PricingPage/Sections/node_modules/Components/Instruction/node_modules/components/Grid/GridContainer";
import GridItem from "Views/PricingPage/Sections/node_modules/Components/Instruction/node_modules/components/Grid/GridItem";
import InfoArea from "Views/PricingPage/Sections/node_modules/components/InfoArea/InfoArea";
// @material-ui/core components
import withStyles from "Views/PricingPage/Sections/node_modules/@material-ui/core/styles/withStyles";
// @material-ui icons
import CardMembership from "Views/PricingPage/Sections/node_modules/@material-ui/icons/CardMembership";
import CardGiftCard from "Views/PricingPage/Sections/node_modules/@material-ui/icons/CardGiftcard";
import AttachMoney from "Views/PricingPage/Sections/node_modules/@material-ui/icons/AttachMoney";
import QuestionAnswer from "Views/PricingPage/Sections/node_modules/@material-ui/icons/QuestionAnswer";

import featuresStyle from "Views/PricingPage/Sections/node_modules/assets/jss/material-kit-pro-react/views/pricingSections/featuresStyle";

function SectionFeatures(props) {
  const { classes } = props;
  return (
    <div className={classes.featuresSection}>
      <div className={classes.textCenter}>
        <h3 className={classes.title}>Frequently Asked Questions</h3>
      </div>
      <GridContainer>
        <GridItem md={4} sm={4} className={classes.mlAuto}>
          <InfoArea
            title="Can I cancel my subscription?"
            description="Yes, you can cancel and perform other actions on your subscriptions via the My Account page."
            icon={CardMembership}
            iconColor="info"
          />
        </GridItem>
        <GridItem md={4} sm={4} className={classes.mrAuto}>
          <InfoArea
            title="Is there any discount for an annual subscription?"
            description="Yes, we offer a 40% discount if you choose annual subscription for any plan."
            icon={CardGiftCard}
            iconColor="success"
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={4} sm={4} className={classes.mlAuto}>
          <InfoArea
            title="Which payment methods do you take?"
            description="WooCommerce comes bundled with PayPal (for accepting credit card and PayPal account payments), BACS, and cash on delivery for accepting payments."
            icon={AttachMoney}
            iconColor="success"
          />
        </GridItem>
        <GridItem md={4} sm={4} className={classes.mrAuto}>
          <InfoArea
            title="Any other questions we can answer?"
            description="We are happy to help you. Contact us."
            icon={QuestionAnswer}
            iconColor="rose"
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}

SectionFeatures.propTypes = {
  classes: PropTypes.object
};

export default withStyles(featuresStyle)(SectionFeatures);
