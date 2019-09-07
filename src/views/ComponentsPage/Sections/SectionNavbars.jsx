import React from "Views/ComponentsPage/Sections/node_modules/react";
// nodejs library to set properties for components
import PropTypes from "Views/ComponentsPage/Sections/node_modules/prop-types";

// @material-ui/core components
import withStyles from "Views/ComponentsPage/Sections/node_modules/@material-ui/core/styles/withStyles";
import List from "Views/ComponentsPage/Sections/node_modules/@material-ui/core/List";
import ListItem from "Views/ComponentsPage/Sections/node_modules/@material-ui/core/ListItem";
// @material-ui/icons
import Search from "Views/ComponentsPage/Sections/node_modules/@material-ui/icons/Search";
import Email from "Views/ComponentsPage/Sections/node_modules/@material-ui/icons/Email";
import Face from "Views/ComponentsPage/Sections/node_modules/@material-ui/icons/Face";
import Settings from "Views/ComponentsPage/Sections/node_modules/@material-ui/icons/Settings";
import AccountCircle from "Views/ComponentsPage/Sections/node_modules/@material-ui/icons/AccountCircle";
import Explore from "Views/ComponentsPage/Sections/node_modules/@material-ui/icons/Explore";
// core components
import GridContainer from "Views/ComponentsPage/Sections/node_modules/Components/Instruction/node_modules/components/Grid/GridContainer";
import GridItem from "Views/ComponentsPage/Sections/node_modules/Components/Instruction/node_modules/components/Grid/GridItem";
import Header from "Views/ComponentsPage/Sections/node_modules/components/Header/Header";
import CustomInput from "Views/ComponentsPage/Sections/node_modules/components/CustomInput/CustomInput";
import CustomDropdown from "Views/ComponentsPage/Sections/node_modules/components/CustomDropdown/CustomDropdown";
import Button from "Views/ComponentsPage/Sections/node_modules/Components/CustomUpload/node_modules/components/CustomButtons/Button";

import navbarsStyle from "Views/ComponentsPage/Sections/node_modules/assets/jss/material-kit-pro-react/views/componentsSections/navbarsStyle";

import image from "assets/img/bg.jpg";
import profileImage from "assets/img/faces/avatar.jpg";

class SectionNavbars extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={`${classes.section  } cd-section`} id="navigation">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <div className={classes.title}>
                <h3>Menu</h3>
              </div>
              <Header
                brand="Menu"
                color="primary"
                links={
                  <List className={classes.list}>
                    <ListItem className={classes.listItem}>
                      <Button
                        href="#pablo"
                        className={
                          `${classes.navLink  } ${  classes.navLinkActive}`
                        }
                        onClick={e => e.preventDefault()}
                        color="transparent"
                      >
                        Link
                      </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                      <Button
                        href="#pablo"
                        className={classes.navLink}
                        onClick={e => e.preventDefault()}
                        color="transparent"
                      >
                        Link
                      </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                      <CustomDropdown
                        buttonText="Dropdown"
                        dropdownHeader="Dropdown Header"
                        buttonProps={{
                          className: classes.navLink,
                          color: "transparent"
                        }}
                        dropdownList={[
                          "Action",
                          "Another action",
                          "Something else here",
                          { divider: true },
                          "Separated link",
                          { divider: true },
                          "One more separated link"
                        ]}
                      />
                    </ListItem>
                  </List>
                }
              />
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <div className={classes.title}>
                <h3>Menu with Icons</h3>
              </div>
              <Header
                brand="Icons"
                color="info"
                links={
                  <List className={`${classes.list  } ${  classes.mlAuto}`}>
                    <ListItem className={classes.listItem}>
                      <Button color="transparent" className={classes.navLink}>
                        <Email />
                      </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                      <Button color="transparent" className={classes.navLink}>
                        <Face />
                      </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                      <CustomDropdown
                        left
                        dropdownHeader="Dropdown Header"
                        buttonIcon={Settings}
                        buttonProps={{
                          className: classes.navLink,
                          color: "transparent"
                        }}
                        dropdownList={[
                          "Action",
                          "Another action",
                          "Something else here",
                          { divider: true },
                          "Separated link",
                          { divider: true },
                          "One more separated link"
                        ]}
                      />
                    </ListItem>
                  </List>
                }
              />
            </GridItem>
          </GridContainer>
          <div className={classes.title}>
            <h3>Navigation</h3>
          </div>
        </div>
        <div id="navbar" className={classes.navbar}>
          <div
            className={classes.navigation}
            style={{ backgroundImage: `url(${  image  })` }}
          >
            <Header
              brand="Brand"
              color="rose"
              links={
                <div className={classes.collapse}>
                  <List className={`${classes.list  } ${  classes.mrAuto}`}>
                    <ListItem className={classes.listItem}>
                      <Button
                        href="#pablo"
                        className={
                          `${classes.navLink  } ${  classes.navLinkActive}`
                        }
                        onClick={e => e.preventDefault()}
                        color="transparent"
                      >
                        Link
                      </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                      <Button
                        href="#pablo"
                        className={classes.navLink}
                        onClick={e => e.preventDefault()}
                        color="transparent"
                      >
                        Link
                      </Button>
                    </ListItem>
                  </List>
                  <div className={classes.mlAuto}>
                    <CustomInput
                      white
                      inputRootCustomClasses={classes.inputRootCustomClasses}
                      formControlProps={{
                        className: classes.formControl
                      }}
                      inputProps={{
                        placeholder: "Search",
                        inputProps: {
                          "aria-label": "Search",
                          className: classes.searchInput
                        }
                      }}
                    />
                    <Button color="white" justIcon round>
                      <Search className={classes.searchIcon} />
                    </Button>
                  </div>
                </div>
              }
            />
            <Header
              brand="Info Color"
              color="info"
              links={
                <List className={`${classes.list  } ${  classes.mlAuto}`}>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={`${classes.navLink  } ${  classes.navLinkActive}`}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Discover
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Profile
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Settings
                    </Button>
                  </ListItem>
                </List>
              }
            />
            <Header
              brand="Primary Color"
              color="primary"
              links={
                <List className={`${classes.list  } ${  classes.mlAuto}`}>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={`${classes.navLink  } ${  classes.navLinkActive}`}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      <Explore /> Discover
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      <AccountCircle /> Profile
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      <Settings /> Settings
                    </Button>
                  </ListItem>
                </List>
              }
            />
            <Header
              brand="Navbar with notifications"
              color="dark"
              links={
                <List className={`${classes.list  } ${  classes.mlAuto}`}>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Discover
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Wishlist
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.notificationNavLink}
                      onClick={e => e.preventDefault()}
                      color="rose"
                      justIcon
                      round
                    >
                      <Email />
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <CustomDropdown
                      left
                      caret={false}
                      hoverColor="dark"
                      dropdownHeader="Dropdown Header"
                      buttonText={
                        <img
                          src={profileImage}
                          className={classes.img}
                          alt="profile"
                        />
                      }
                      buttonProps={{
                        className:
                          `${classes.navLink  } ${  classes.imageDropdownButton}`,
                        color: "transparent"
                      }}
                      dropdownList={[
                        "Me",
                        "Settings and other stuff",
                        "Sign out"
                      ]}
                    />
                  </ListItem>
                </List>
              }
            />
            <Header
              brand="Navbar with profile"
              links={
                <List className={`${classes.list  } ${  classes.mlAuto}`}>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Discover
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Wishlist
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.registerNavLink}
                      onClick={e => e.preventDefault()}
                      color="rose"
                      round
                    >
                      Register
                    </Button>
                  </ListItem>
                </List>
              }
            />
            <Header
              brand="Transparent"
              color="transparent"
              links={
                <List className={`${classes.list  } ${  classes.mlAuto}`}>
                  <ListItem className={classes.listItem}>
                    <Button color="transparent" className={classes.navLink}>
                      <i
                        className={
                          `${classes.socialIcons 
                          } ${ 
                          classes.marginRight5 
                          } fab fa-twitter`
                        }
                      />{" "}
                      Twitter
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button color="transparent" className={classes.navLink}>
                      <i
                        className={
                          `${classes.socialIcons 
                          } ${ 
                          classes.marginRight5 
                          } fab fa-facebook`
                        }
                      />{" "}
                      Facebook
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button color="transparent" className={classes.navLink}>
                      <i
                        className={
                          `${classes.socialIcons 
                          } ${ 
                          classes.marginRight5 
                          } fab fa-instagram`
                        }
                      />{" "}
                      Instagram
                    </Button>
                  </ListItem>
                </List>
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

SectionNavbars.propTypes = {
  classes: PropTypes.object
};

export default withStyles(navbarsStyle)(SectionNavbars);
