import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import GridContainer from 'Components/Grid/GridContainer';
import GridItem from 'Components/Grid/GridItem';
import errorPageStyle from 'Assets/JSS/material-kit-pro-react/views/errorPageStyles';
import image from 'Assets/Images/clint-mckoy.jpg';
import NavBar from 'Sections/NavBar';
import Footer from 'Sections/Footer';


class ErrorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [1],
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <NavBar/>
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
          }}
        >
          <div className={classes.contentCenter}>
            <GridContainer>
              <GridItem md={12}>
                <h1 className={classes.title}>404</h1>
                <h2 className={classes.subTitle}>Page not found :(</h2>
                <h4 className={classes.description}>
                  Ooooups! Looks like you got lost.
                </h4>
              </GridItem>
            </GridContainer>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default withStyles(errorPageStyle)(ErrorPage);
