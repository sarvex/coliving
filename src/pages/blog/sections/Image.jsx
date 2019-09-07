import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import GridContainer from '../../../Components/Grid/GridContainer';
import GridItem from '../../../Components/Grid/GridItem';
import Card from '../../../Components/Card/Card';
import CardHeader from '../../../Components/Card/CardHeader';
import CardBody from '../../../Components/Card/CardBody';
import CardFooter from '../../../Components/Card/CardFooter';
import Muted from '../../../Components/Typography/Muted';
import Button from '../../../Components/CustomButtons/Button';

import bg10 from 'Assets/Images/bg10.jpg';

import cardProfile1 from 'Assets/Images/faces/card-profile1-square.jpg';
import cardProfile4 from 'Assets/Images/faces/card-profile4-square.jpg';

import sectionImageStyle from '../../../Assets/JSS/material-kit-pro-react/views/blogPostsSections/sectionImageStyle';

function SectionImage({ ...props }) {
  const { classes } = props;
  return (
    <div
      className={classes.section}
      style={{ backgroundImage: `url(${bg10})` }}
    >
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.textLeft}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablo">
                      <img src={cardProfile1} alt="..."/>
                    </a>
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Alec Thompson</h4>
                    <Muted>
                      <h6>AUTHOR OF THE MONTH</h6>
                    </Muted>
                    <p className={classes.description}>
                      Don
                      {'\''}
                      t be scared of the truth because we need to
                      restart the human foundation in truth...
                    </p>
                  </CardBody>
                  <CardFooter profile plain>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-twitter"/>
                    </Button>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-facebook-square"/>
                    </Button>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-google"/>
                    </Button>
                  </CardFooter>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.textLeft}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablo">
                      <img src={cardProfile4} alt="..."/>
                    </a>
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Kendall Andrew</h4>
                    <Muted>
                      <h6>AUTHOR OF THE WEEK</h6>
                    </Muted>
                    <p className={classes.description}>
                      Don
                      {'\''}
                      t be scared of the truth because we need to
                      restart the human foundation in truth...
                    </p>
                  </CardBody>
                  <CardFooter profile plain>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-linkedin-in"/>
                    </Button>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-facebook-square"/>
                    </Button>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-dribbble"/>
                    </Button>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-google"/>
                    </Button>
                  </CardFooter>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

export default withStyles(sectionImageStyle)(SectionImage);
