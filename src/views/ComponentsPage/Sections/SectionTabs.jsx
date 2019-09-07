import React from "Views/ComponentsPage/Sections/node_modules/react";
// nodejs library to set properties for components
import PropTypes from "Views/ComponentsPage/Sections/node_modules/prop-types";

// @material-ui/core components
import withStyles from "Views/ComponentsPage/Sections/node_modules/@material-ui/core/styles/withStyles";

// @material-ui/icons
import Face from "Views/ComponentsPage/Sections/node_modules/@material-ui/icons/Face";
import Chat from "Views/ComponentsPage/Sections/node_modules/@material-ui/icons/Chat";
import Build from "Views/ComponentsPage/Sections/node_modules/@material-ui/icons/Build";
// core components
import GridContainer from "Views/ComponentsPage/Sections/node_modules/Components/Instruction/node_modules/components/Grid/GridContainer";
import GridItem from "Views/ComponentsPage/Sections/node_modules/Components/Instruction/node_modules/components/Grid/GridItem";
import CustomTabs from "Views/ComponentsPage/Sections/node_modules/components/CustomTabs/CustomTabs";
import tabsStyle from "Views/ComponentsPage/Sections/node_modules/assets/jss/material-kit-pro-react/views/componentsSections/tabsStyle";

class SectionTabs extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="nav-tabs">
            <h3>Navigation Tabs</h3>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
                <h3>
                  <small>Tabs with Icons on Card</small>
                </h3>
                <CustomTabs
                  headerColor="primary"
                  tabs={[
                    {
                      tabName: "Profile",
                      tabIcon: Face,
                      tabContent: (
                        <p className={classes.textCenter}>
                          I think that’s a responsibility that I have, to push
                          possibilities, to show people, this is the level that
                          things could be at. So when you get something that has
                          the name Kanye West on it, it’s supposed to be pushing
                          the furthest possibilities. I will be the leader of a
                          company that ends up being worth billions of dollars,
                          because I got the answers. I understand culture. I am
                          the nucleus.
                        </p>
                      )
                    },
                    {
                      tabName: "Messages",
                      tabIcon: Chat,
                      tabContent: (
                        <p className={classes.textCenter}>
                          I think that’s a responsibility that I have, to push
                          possibilities, to show people, this is the level that
                          things could be at. I will be the leader of a company
                          that ends up being worth billions of dollars, because
                          I got the answers. I understand culture. I am the
                          nucleus. I think that’s a responsibility that I have,
                          to push possibilities, to show people, this is the
                          level that things could be at.
                        </p>
                      )
                    },
                    {
                      tabName: "Settings",
                      tabIcon: Build,
                      tabContent: (
                        <p className={classes.textCenter}>
                          think that’s a responsibility that I have, to push
                          possibilities, to show people, this is the level that
                          things could be at. So when you get something that has
                          the name Kanye West on it, it’s supposed to be pushing
                          the furthest possibilities. I will be the leader of a
                          company that ends up being worth billions of dollars,
                          because I got the answers. I understand culture. I am
                          the nucleus.
                        </p>
                      )
                    }
                  ]}
                />
              </GridItem>
              <GridItem xs={12} sm={6} md={6}>
                <h3>
                  <small>Tabs on Plain Card</small>
                </h3>
                <CustomTabs
                  plainTabs
                  headerColor="danger"
                  tabs={[
                    {
                      tabName: "Home",
                      tabContent: (
                        <p className={classes.textCenter}>
                          I think that’s a responsibility that I have, to push
                          possibilities, to show people, this is the level that
                          things could be at. So when you get something that has
                          the name Kanye West on it, it’s supposed to be pushing
                          the furthest possibilities. I will be the leader of a
                          company that ends up being worth billions of dollars,
                          because I got the answers. I understand culture. I am
                          the nucleus.
                        </p>
                      )
                    },
                    {
                      tabName: "Updates",
                      tabContent: (
                        <p className={classes.textCenter}>
                          I think that’s a responsibility that I have, to push
                          possibilities, to show people, this is the level that
                          things could be at. I will be the leader of a company
                          that ends up being worth billions of dollars, because
                          I got the answers. I understand culture. I am the
                          nucleus. I think that’s a responsibility that I have,
                          to push possibilities, to show people, this is the
                          level that things could be at.
                        </p>
                      )
                    },
                    {
                      tabName: "History",
                      tabContent: (
                        <p className={classes.textCenter}>
                          think that’s a responsibility that I have, to push
                          possibilities, to show people, this is the level that
                          things could be at. So when you get something that has
                          the name Kanye West on it, it’s supposed to be pushing
                          the furthest possibilities. I will be the leader of a
                          company that ends up being worth billions of dollars,
                          because I got the answers. I understand culture. I am
                          the nucleus.
                        </p>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

SectionTabs.propTypes = {
  classes: PropTypes.object
};

export default withStyles(tabsStyle)(SectionTabs);
