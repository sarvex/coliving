import React from 'react'
// used for making the prop types of this component
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import styles from 'Assets/JSS/material-kit-pro-react/components/customFileInputStyle'
import CustomInput from '../CustomInput/CustomInput'
import Button from '../CustomButtons/Button'

class CustomFileInput extends React.Component {
  state = {
    fileNames: '',
    files: null,
  }

  hiddenFile = React.createRef()

  onFocus = (e) => {
    this.hiddenFile.current.click(e)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // this.state.file is the file/image uploaded
    // in this function you can save the image (this.state.file) on form submit
    // you have to call it yourself
  }

  addFile = (e) => {
    let fileNames = ''
    const { files } = e.target
    for (let i = 0; i < e.target.files.length; i++) {
      fileNames += e.target.files[i].name
      if (this.props.multiple && i !== e.target.files.length - 1) {
        fileNames += ', '
      }
    }
    this.setState({
      fileNames,
      files,
    })
  }

  render() {
    const { classes, id, endButton, startButton, inputProps, formControlProps, multiple } = this.props
    if (inputProps && inputProps.type && inputProps.type === 'file') {
      inputProps.type = 'text'
    }
    let buttonStart
    let buttonEnd
    if (startButton) {
      buttonStart = (
        <Button {...startButton.buttonProps}>
          {startButton.icon !== undefined ? startButton.icon : null}
          {startButton.text !== undefined ? startButton.text : null}
        </Button>
      )
    }
    if (endButton) {
      buttonEnd = (
        <Button {...endButton.buttonProps}>
          {endButton.icon !== undefined ? endButton.icon : null}
          {endButton.text !== undefined ? endButton.text : null}
        </Button>
      )
    }
    return (
      <div className={classes.inputFileWrapper}>
        <input
          type='file'
          className={classes.inputFile}
          multiple={multiple}
          ref={this.hiddenFile}
          onChange={this.addFile}
        />
        <CustomInput
          id={id}
          formControlProps={{
            ...formControlProps,
          }}
          inputProps={{
            ...inputProps,
            onClick: this.onFocus,
            value: this.state.fileNames,
            endAdornment: buttonEnd,
            startAdornment: buttonStart,
          }}
        />
      </div>
    )
  }
}

CustomFileInput.defaultProps = {
  multiple: false,
}

CustomFileInput.propTypes = {
  classes: PropTypes.object,
  id: PropTypes.string,
  endButton: PropTypes.object,
  startButton: PropTypes.object,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  multiple: PropTypes.bool,
}

export default withStyles(styles)(CustomFileInput)
