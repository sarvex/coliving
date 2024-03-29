import React from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import GridContainer from 'Components/Grid/GridContainer';
import GridItem from 'Components/Grid/GridItem';

import blog4 from 'Assets/Images/examples/blog4.jpg';
import blog3 from 'Assets/Images/examples/blog3.jpg';
import blog1 from 'Assets/Images/examples/blog1.jpg';

import sectionTextStyle from 'Assets/JSS/material-kit-pro-react/views/blogPostSections/sectionTextStyle';

function SectionText({ ...props }) {
  const { classes } = props;
  const imgClasses = classNames(
    classes.imgRaised,
    classes.imgRounded,
    classes.imgFluid,
  );
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={8} md={8}>
          <h3 className={classes.title}>
            The Castle Looks Different at Night...
          </h3>
          <p>
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he wouldn
            {'\''}
            t scroll to get here. Add a button if you want the user to see
            more. We are here to make life better.
            <br/>
            <br/>
            And now I look and look around and there’s so many Kanyes I
            {'\''}
            ve
            been trying to figure out the bed design for the master bedroom at
            our Hidden Hills compound... and thank you for turning my personal
            jean jacket into a couture piece.
          </p>
        </GridItem>
        <GridItem xs={12} sm={10} md={10} className={classes.section}>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <img src={blog4} alt="..." className={imgClasses}/>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <img src={blog3} alt="..." className={imgClasses}/>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <img src={blog1} alt="..." className={imgClasses}/>
            </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem xs={12} sm={8} md={8}>
          <h3 className={classes.title}>Rest of the Story:</h3>
          <p>
            We are here to make life better. And now I look and look around and
            there’s so many Kanyes I
            {'\''}
            ve been trying to figure out the bed
            design for the master bedroom at our Hidden Hills compound... and
            thank you for turning my personal jean jacket into a couture piece.
            <br/>
            I speak yell scream directly at the old guard on behalf of the
            future. daytime All respect prayers and love to Phife’s family Thank
            you for so much inspiration.
          </p>
          <p>
            Thank you Anna for the invite thank you to the whole Vogue team And
            I love you like Kanye loves Kanye Pand Pand Panda I
            {'\''}
            ve been
            trying to figure out the bed design for the master bedroom at our
            Hidden Hills compound...The Pablo pop up was almost a pop up of
            influence. All respect prayers and love to Phife’s family Thank you
            for so much inspiration daytime I love this new Ferg album! The Life
            of Pablo is now available for purchase I have a dream. Thank you to
            everybody who made The Life of Pablo the number 1 album in the
            world! I
            {'\''}
            m so proud of the nr #1 song in the country. Panda!
            Good music 2016!
          </p>
          <p>
            I love this new Ferg album! The Life of Pablo is now available for
            purchase I have a dream. Thank you to everybody who made The Life of
            Pablo the number 1 album in the world! I
            {'\''}
            m so proud of the nr #1
            song in the country. Panda! Good music 2016!
          </p>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(sectionTextStyle)(SectionText);
