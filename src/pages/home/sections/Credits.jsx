import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import Button from '../../../components/CustomButtons/Button';
import bg8 from '../../../assets/img/bg7.jpg';
import headersStyle from '../../../assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle';

class LandingPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className="cd-section" {...rest}>
        <div
          className={classes.pageHeader}
          style={{ backgroundImage: `url("${bg8}")` }}
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
                <h1 className={classes.title}>Your big fat wallet</h1>
                <h4>
                  When you join the community, your wallet is loaded with a hefty number of points. As you
                  keep doing stuff around, your points increase. Help us with an event, host an evening, and your
                  points shoot up. Use these points to buy yourself dinner, tip housekeeping, buy
                  merchandise. It’s a pretty cool economy here! All credit goes to you, you and only you.
                </h4>
                <br/>
                <Link to="/credits">
                  <Button color="danger" size="lg" round>
                    Know More
                  </Button>
                </Link>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(headersStyle)(LandingPage);
