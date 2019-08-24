import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import Key from '@material-ui/icons/VpnKey';
import { Link } from 'react-router-dom';
import Button from '../../../components/CustomButtons/Button';
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';

import headersStyle from '../../../assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle';

import cover from '../../../assets/img/examples/city.jpg';

function SectionHeaders({ ...props }) {
  const { classes, ...rest } = props;
  return (
    // we've set the className to cd-section so we can make smooth scroll to it
    <div className="cd-section" {...rest}>
      <div
        className={classes.pageHeader}
        style={{ backgroundImage: `url("${cover}")` }}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <h1 className={classes.title}>Let’s Co-Live</h1>
              <h1>Mega Co-living hub</h1>
              <br/>
              <Link to="/join">
                <Button color="danger" size="lg" round>
                  <Key className={classes.icons}/>
                  Join the Clan
                </Button>
              </Link>
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
              <div className={classes.iframeContainer}>
                <iframe
                  height="250"
                  src="https://www.youtube.com/embed/22oePt94TeU"
                  frameBorder="0"
                  allow="encrypted-media"
                  title="Coliving.ai"
                  allowFullScreen
                />
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

export default withStyles(headersStyle)(SectionHeaders);
