import React from "Components/Instruction/node_modules/react";
import PropTypes from "Components/Instruction/node_modules/prop-types";
import cx from "Components/Instruction/node_modules/classnames";

// @material-ui/core components
import withStyles from "Components/Instruction/node_modules/@material-ui/core/styles/withStyles";

// core components
import GridContainer from "Components/Instruction/node_modules/components/Grid/GridContainer";
import GridItem from "Components/Instruction/node_modules/components/Grid/GridItem";

import instructionStyle from "Components/Instruction/node_modules/assets/jss/material-kit-pro-react/components/instructionStyle";

function Instruction({ ...props }) {
  const {
    classes,
    title,
    text,
    image,
    className,
    imageClassName,
    imageAlt
  } = props;
  const instructionClasses = cx({
    [classes.instruction]: true,
    [className]: className !== undefined
  });
  const pictureClasses = cx({
    [classes.picture]: true,
    [imageClassName]: imageClassName !== undefined
  });
  return (
    <div className={instructionClasses}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <strong>{title}</strong>
          <p>{text}</p>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <div className={pictureClasses}>
            <img src={image} alt={imageAlt} className={classes.image} />
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}

Instruction.defaultProps = {
  imageAlt: "..."
};

Instruction.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.node.isRequired,
  text: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  className: PropTypes.string,
  imageClassName: PropTypes.string
};

export default withStyles(instructionStyle)(Instruction);
