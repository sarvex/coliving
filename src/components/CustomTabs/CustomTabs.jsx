import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// nodejs library to set properties for components
import PropTypes from 'prop-types'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/Card/CardContent";
// import CardHeader from "@material-ui/core/Card/CardHeader";
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

// core components
import Card from 'Components/Card/Card'
import CardBody from 'Components/Card/CardBody'
import CardHeader from 'Components/Card/CardHeader'
import customTabsStyle from 'Assets/JSS/material-kit-pro-react/components/customTabsStyle'

class CustomTabs extends React.Component {
  state = {
    value: 0,
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { classes, headerColor, title, tabs, rtlActive, plainTabs } = this.props
    const cardTitle = classNames({
      [classes.cardTitle]: true,
      [classes.cardTitleRTL]: rtlActive,
    })
    const tabsContainer = classNames({
      [classes.tabsContainer]: true,
      [classes.tabsContainerRTL]: rtlActive,
    })
    return (
      <Card plain={plainTabs}>
        <CardHeader color={headerColor} plain={plainTabs}>
          {title !== undefined ? <div className={cardTitle}>title</div> : null}
          <Tabs
            classes={{
              root: classes.customTabsRoot,
              flexContainer: tabsContainer,
              indicator: classes.displayNone,
            }}
            value={this.state.value}
            onChange={this.handleChange}
            textColor='inherit'>
            {tabs.map((prop, key) => {
              let icon = {}
              if (prop.tabIcon !== undefined) {
                icon = {
                  icon: <prop.tabIcon className={classes.tabIcon} />,
                }
              } else {
                icon = {}
              }
              return (
                <Tab
                  key={key}
                  classes={{
                    root: classes.customTabRoot,
                    selected: classes.customTabSelected,
                    wrapper: classes.customTabWrapper,
                  }}
                  // icon={<prop.tabIcon className={tabIcon} />}
                  {...icon}
                  label={prop.tabName}
                />
              )
            })}
          </Tabs>
        </CardHeader>
        {/* <CardHeader
          classes={{
            root: cardHeader,
            title: cardTitle,
            content: classes.cardHeaderContent,
            action: classes.cardHeaderAction
          }}
          title={title}
          action={

          }
        /> */}
        <CardBody>
          {tabs.map((prop, key) => {
            if (key === this.state.value) {
              return <div key={key}>{prop.tabContent}</div>
            }
            return null
          })}
        </CardBody>
      </Card>
    )
  }
}

CustomTabs.defaultProps = {
  headerColor: 'purple',
}

CustomTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  headerColor: PropTypes.oneOf(['warning', 'success', 'danger', 'info', 'primary', 'rose']),
  title: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabName: PropTypes.string.isRequired,
      tabIcon: PropTypes.object,
      tabContent: PropTypes.node.isRequired,
    })
  ),
  rtlActive: PropTypes.bool,
  plainTabs: PropTypes.bool,
}

export default withStyles(customTabsStyle)(CustomTabs)
