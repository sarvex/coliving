import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "Components/Grid/GridContainer";
import GridItem from "Components/Grid/GridItem";
import Card from "Components/Card/Card";
import CardHeader from "Components/Card/CardHeader";
import CardBody from "Components/Card/CardBody";
import CardFooter from "Components/Card/CardFooter";
import Button from "Components/CustomButtons/Button";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "Assets/JSS/material-kit-pro-react/views/ecommerceSections/latestOffersStyle";

import gucci from "Assets/Images/examples/gucci.jpg";
import tomFord from "Assets/Images/examples/tom-ford.jpg";
import dolce from "Assets/Images/examples/dolce.jpg";

const SectionLatestOffers = props => {
  const { classes } = props;
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2>Latest Offers</h2>
        <GridContainer>
          <GridItem md={4} sm={4}>
            <Card product plain>
              <CardHeader image plain>
                <a href="#pablo">
                  <img src={gucci} alt="..." />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{ backgroundImage: `url(${gucci})`, opacity: 1 }}
                />
              </CardHeader>
              <CardBody className={classes.textCenter} plain>
                <h4 className={classes.cardTitle}>Gucci</h4>
                <p className={classes.cardDescription}>
                  The structured shoulders and sleek detailing ensure a sharp
                  silhouette. Team it with a silk pocket square and leather
                  loafers.
                </p>
              </CardBody>
              <CardFooter plain>
                <div className={classes.priceContainer}>
                  <span className={classNames(classes.price, classes.priceOld)}>
                    {" "}
                    €1,430
                  </span>
                  <span className={classNames(classes.price, classes.priceNew)}>
                    {" "}
                    €743
                  </span>
                </div>
                <div className={classNames(classes.stats, classes.mlAuto)}>
                  <Tooltip
                    id="tooltip-top"
                    title="Saved to Wishlist"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button justIcon simple color="rose">
                      <Favorite />
                    </Button>
                  </Tooltip>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem md={4} sm={4}>
            <Card product plain>
              <CardHeader image plain>
                <a href="#pablo">
                  <img src={dolce} alt="..." />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{ backgroundImage: `url(${dolce})`, opacity: 1 }}
                />
              </CardHeader>
              <CardBody className={classes.textCenter} plain>
                <h4 className={classes.cardTitle}>Dolce & Gabbana</h4>
                <p className={classes.cardDescription}>
                  The structured shoulders and sleek detailing ensure a sharp
                  silhouette. Team it with a silk pocket square and leather
                  loafers.
                </p>
              </CardBody>
              <CardFooter plain>
                <div className={classes.priceContainer}>
                  <span className={classNames(classes.price, classes.priceOld)}>
                    {" "}
                    €1,430
                  </span>
                  <span className={classNames(classes.price, classes.priceNew)}>
                    {" "}
                    €743
                  </span>
                </div>
                <div className={classNames(classes.stats, classes.mlAuto)}>
                  <Tooltip
                    id="tooltip-top"
                    title="Saved to Wishlist"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button justIcon simple color="rose">
                      <Favorite />
                    </Button>
                  </Tooltip>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem md={4} sm={4}>
            <Card product plain>
              <CardHeader image plain>
                <a href="#pablo">
                  <img src={tomFord} alt="..." />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{ backgroundImage: `url(${tomFord})`, opacity: 1 }}
                />
              </CardHeader>
              <CardBody className={classes.textCenter} plain>
                <h4 className={classes.cardTitle}>Dolce & Gabbana</h4>
                <p className={classes.cardDescription}>
                  The structured shoulders and sleek detailing ensure a sharp
                  silhouette. Team it with a silk pocket square and leather
                  loafers.
                </p>
              </CardBody>
              <CardFooter plain>
                <div className={classes.priceContainer}>
                  <span className={classNames(classes.price, classes.priceOld)}>
                    {" "}
                    €1,430
                  </span>
                  <span className={classNames(classes.price, classes.priceNew)}>
                    {" "}
                    €743
                  </span>
                </div>
                <div className={classNames(classes.stats, classes.mlAuto)}>
                  <Tooltip
                    id="tooltip-top"
                    title="Saved to Wishlist"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button justIcon simple color="rose">
                      <Favorite />
                    </Button>
                  </Tooltip>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};

SectionLatestOffers.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(SectionLatestOffers);
