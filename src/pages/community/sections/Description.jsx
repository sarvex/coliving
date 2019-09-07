import React from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';

import GridContainer from 'Components/Grid/GridContainer';
import GridItem from 'Components/Grid/GridItem';

import sectionsStyle from 'Assets/JSS/material-kit-pro-react/views/presentationSections/sectionsStyle';

import imgs from 'Assets/Images/assets-for-demo/sections/imgs';

class SectionAbout extends React.Component {
  renderContainerFluid(cssClass) {
    return imgs.map(row => (
      <GridContainer key={row[0]}>
        {row.map((el, index) => (
          <GridItem
            md={3}
            sm={3}
            xs={12}
            key={`${el}_${index}`}
            className={cssClass}
          >
            <img
              src={require(`../../../Assets/Images/assets-for-demo/sections/${el}.jpg`)}
              alt={el}
              key={el[index]}
            />
          </GridItem>
        ))}
      </GridContainer>
    ));
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.sectionSections}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem
              md={8}
              className={classNames(classes.mrAuto, classes.mlAuto)}
            >
              <div className={classes.sectionDescription}>
                <h2 className={classes.title}>
                  Co-Living
                </h2>
                <h4 className={classes.description}>
                  As cities expand, spaces to live in become smaller. Which is why some of the biggest cities in the
                  world
                  have exorbitant rents for even the smallest of spaces. Co-living solves this problem by providing
                  high-quality
                  accommodations with interesting amenities, at reasonable rates.
                  And to top it all, you’re living with people you genuinely want to come back home to and share a drink
                  with.
                </h4>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(sectionsStyle)(SectionAbout);
