import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "Components/Header/Header";
import HeaderLinks from "Components/Header/HeaderLinks";
// sections of this Page
import sectionsPageStyle from "Assets/JSS/material-kit-pro-react/views/sectionsPageStyle";
import SectionHeaders from "./Sections/SectionHeaders";
import SectionFeatures from "./Sections/SectionFeatures";
import SectionBlogs from "./Sections/SectionBlogs";
import SectionTeams from "./Sections/SectionTeams";
import SectionProjects from "./Sections/SectionProjects";
import SectionPricing from "./Sections/SectionPricing";
import SectionTestimonials from "./Sections/SectionTestimonials";
import SectionContacts from "./Sections/SectionContacts";


class SectionsPage extends React.Component {
  componentDidMount() {
    const href = window.location.href.substring(
      window.location.href.lastIndexOf("#") + 1
    );
    if (window.location.href.lastIndexOf("#") > 0)
      document.getElementById(href).scrollIntoView();
    window.addEventListener("scroll", this.updateView);
    this.updateView();
  }

  componentDidUpdate() {
    const href = window.location.href.substring(
      window.location.href.lastIndexOf("#") + 1
    );
    document.getElementById(href).scrollIntoView();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.updateView);
  }

  easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  updateView() {
    const contentSections = document.getElementsByClassName("cd-section");
    const navigationItems = document
      .getElementById("cd-vertical-nav")
      .getElementsByTagName("a");

    for (let i = 0; i < contentSections.length; i++) {
      const activeSection =
        parseInt(navigationItems[i].getAttribute("data-number"), 10) - 1;
      if (
        contentSections[i].offsetTop - window.innerHeight / 2 <
          window.pageYOffset &&
        contentSections[i].offsetTop +
          contentSections[i].scrollHeight -
          window.innerHeight / 2 >
          window.pageYOffset
      ) {
        navigationItems[activeSection].classList.add("is-selected");
      } else {
        navigationItems[activeSection].classList.remove("is-selected");
      }
    }
  }

  smoothScroll(target) {
    const targetScroll = document.getElementById(target);
    this.scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
  }

  scrollGo(element, to, duration) {
    const start = element.scrollTop;
      const change = to - start;
      let currentTime = 0;
      const increment = 20;

    var animateScroll = function() {
      currentTime += increment;
      const val = this.easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    }.bind(this);
    animateScroll();
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header
          color="info"
          brand="Material Kit PRO React"
          links={<HeaderLinks dropdownHoverColor="info" />}
          fixed
        />
        <div className={classes.main}>
          <SectionHeaders id="headers" />
          <SectionFeatures id="features" />
          <SectionBlogs id="blogs" />
          <SectionTeams id="teams" />
          <SectionProjects id="projects" />
          <SectionPricing id="pricing" />
          <SectionTestimonials id="testimonials" />
          <SectionContacts id="contacts" />
        </div>
        <nav id="cd-vertical-nav">
          <ul>
            <li>
              <a
                href="#headers"
                data-number="1"
                className="is-selected"
                onClick={e => {
                  const isMobile = navigator.userAgent.match(
                    /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                  );
                  if (isMobile) {
                    // if we are on mobile device the scroll into view will be managed by the browser
                  } else {
                    e.preventDefault();
                    this.smoothScroll("headers");
                  }
                }}
              >
                <span className="cd-dot" />
                <span className="cd-label">Headers</span>
              </a>
            </li>
            <li>
              <a
                href="#features"
                data-number="2"
                className=""
                onClick={e => {
                  const isMobile = navigator.userAgent.match(
                    /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                  );
                  if (isMobile) {
                    // if we are on mobile device the scroll into view will be managed by the browser
                  } else {
                    e.preventDefault();
                    this.smoothScroll("features");
                  }
                }}
              >
                <span className="cd-dot" />
                <span className="cd-label">Features</span>
              </a>
            </li>
            <li>
              <a
                href="#blogs"
                data-number="3"
                className=""
                onClick={e => {
                  const isMobile = navigator.userAgent.match(
                    /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                  );
                  if (isMobile) {
                    // if we are on mobile device the scroll into view will be managed by the browser
                  } else {
                    e.preventDefault();
                    this.smoothScroll("blogs");
                  }
                }}
              >
                <span className="cd-dot" />
                <span className="cd-label">Blogs</span>
              </a>
            </li>
            <li>
              <a
                href="#teams"
                data-number="4"
                className=""
                onClick={e => {
                  const isMobile = navigator.userAgent.match(
                    /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                  );
                  if (isMobile) {
                    // if we are on mobile device the scroll into view will be managed by the browser
                  } else {
                    e.preventDefault();
                    this.smoothScroll("teams");
                  }
                }}
              >
                <span className="cd-dot" />
                <span className="cd-label">Teams</span>
              </a>
            </li>
            <li>
              <a
                href="#projects"
                data-number="5"
                className=""
                onClick={e => {
                  const isMobile = navigator.userAgent.match(
                    /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                  );
                  if (isMobile) {
                    // if we are on mobile device the scroll into view will be managed by the browser
                  } else {
                    e.preventDefault();
                    this.smoothScroll("projects");
                  }
                }}
              >
                <span className="cd-dot" />
                <span className="cd-label">Projects</span>
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                data-number="6"
                className=""
                onClick={e => {
                  const isMobile = navigator.userAgent.match(
                    /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                  );
                  if (isMobile) {
                    // if we are on mobile device the scroll into view will be managed by the browser
                  } else {
                    e.preventDefault();
                    this.smoothScroll("pricing");
                  }
                }}
              >
                <span className="cd-dot" />
                <span className="cd-label">Pricing</span>
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                data-number="7"
                className=""
                onClick={e => {
                  const isMobile = navigator.userAgent.match(
                    /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                  );
                  if (isMobile) {
                    // if we are on mobile device the scroll into view will be managed by the browser
                  } else {
                    e.preventDefault();
                    this.smoothScroll("testimonials");
                  }
                }}
              >
                <span className="cd-dot" />
                <span className="cd-label">Testimonials</span>
              </a>
            </li>
            <li>
              <a
                href="#contacts"
                data-number="8"
                className=""
                onClick={e => {
                  const isMobile = navigator.userAgent.match(
                    /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                  );
                  if (isMobile) {
                    // if we are on mobile device the scroll into view will be managed by the browser
                  } else {
                    e.preventDefault();
                    this.smoothScroll("contacts");
                  }
                }}
              >
                <span className="cd-dot" />
                <span className="cd-label">Contact Us</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

SectionsPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(sectionsPageStyle)(SectionsPage);
