import React from 'Views/BlogPostPage/node_modules/react'
// nodejs library to set properties for components
import PropTypes from 'Views/BlogPostPage/node_modules/prop-types'
// @material-ui/core components
import withStyles from 'Views/BlogPostPage/node_modules/@material-ui/core/styles/withStyles'
import List from 'Views/BlogPostPage/node_modules/@material-ui/core/List'
import ListItem from 'Views/BlogPostPage/node_modules/@material-ui/core/ListItem'
// @material-ui/icons
import FormatAlignLeft from 'Views/BlogPostPage/node_modules/@material-ui/icons/FormatAlignLeft'
import Favorite from 'Views/BlogPostPage/node_modules/@material-ui/icons/Favorite'
// core components
import Header from 'Views/BlogPostPage/node_modules/components/Header/Header'
import HeaderLinks from 'Views/BlogPostPage/node_modules/components/Header/HeaderLinks'
import Parallax from 'Views/BlogPostPage/node_modules/components/Parallax/Parallax'
import Footer from 'Views/BlogPostPage/node_modules/components/Footer/Footer'
import GridContainer from 'Views/BlogPostPage/node_modules/Components/Instruction/node_modules/components/Grid/GridContainer'
import GridItem from 'Views/BlogPostPage/node_modules/Components/Instruction/node_modules/components/Grid/GridItem'
import Button from 'Views/BlogPostPage/node_modules/Components/CustomUpload/node_modules/components/CustomButtons/Button'
// sections for this page
import blogPostPageStyle from 'Views/BlogPostPage/node_modules/assets/jss/material-kit-pro-react/views/blogPostPageStyle'

import SectionText from './Sections/SectionText'
import SectionBlogInfo from './Sections/SectionBlogInfo'
import SectionComments from './Sections/SectionComments'
import SectionSimilarStories from './Sections/SectionSimilarStories'

class BlogPostPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        <Header
          brand='Material Kit PRO React'
          links={<HeaderLinks dropdownHoverColor='info'/>}
          fixed
          color='transparent'
          changeColorOnScroll={{
            height: 300,
            color: 'info',
          }}
        />
        <Parallax image={require('assets/img/bg5.jpg')} filter='dark'>
          <div className={classes.container}>
            <GridContainer justify='center'>
              <GridItem md={8} className={classes.textCenter}>
                <h1 className={classes.title}>How We Built the Most Successful Castle Ever</h1>
                <h4 className={classes.subtitle}>
                  The last 48 hours of my life were total madness. This is what I did.
                </h4>
                <br/>
                <Button color='rose' size='lg' round>
                  <FormatAlignLeft/> Read Article
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classes.main}>
          <div className={classes.container}>
            <SectionText/>
            <SectionBlogInfo/>
            <SectionComments/>
          </div>
        </div>
        <SectionSimilarStories/>
        <Footer
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href='https://www.creative-tim.com/?ref=mkpr-blog-post'
                      target='_blank'
                      className={classes.block}>
                      Creative Tim
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href='https://www.creative-tim.com/presentation?ref=mkpr-blog-post'
                      target='_blank'
                      className={classes.block}>
                      About us
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href='https://blog.creative-tim.com/?ref=mkpr-blog-post'
                      target='_blank'
                      className={classes.block}>
                      Blog
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href='https://www.creative-tim.com/license?ref=mkpr-blog-post'
                      target='_blank'
                      className={classes.block}>
                      Licenses
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()} , made with <Favorite className={classes.icon}/> by{' '}
                <a href='https://www.creative-tim.com?ref=mkpr-blog-post' target='_blank'>
                  Creative Tim
                </a>{' '}
                for a better web.
              </div>
            </div>
          }
        />
      </div>
    )
  }
}

BlogPostPage.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(blogPostPageStyle)(BlogPostPage)
