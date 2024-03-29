import React from 'react'
import classNames from 'classnames'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import withStyles from '@material-ui/core/styles/withStyles'
import PinDrop from '@material-ui/icons/PinDrop'
import Phone from '@material-ui/icons/Phone'
import BusinessCenter from '@material-ui/icons/BusinessCenter'
// core components
import GridContainer from 'Components/Grid/GridContainer'
import GridItem from 'Components/Grid/GridItem'
import InfoArea from 'Components/InfoArea/InfoArea'
import CustomInput from 'Components/CustomInput/CustomInput'
import Button from 'Components/CustomButtons/Button'
import NavBar from 'Sections/NavBar'
import Footer from 'Sections/Footer'

import contactUsStyle from 'Assets/JSS/material-kit-pro-react/views/contactUsStyle'

const CustomSkinMap = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 44.43353, lng: 26.093928 }}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true,
        styles: [
          {
            featureType: 'water',
            stylers: [{ saturation: 43 }, { lightness: -11 }, { hue: '#0088ff' }],
          },
          {
            featureType: 'road',
            elementType: 'geometry.fill',
            stylers: [{ hue: '#ff0000' }, { saturation: -100 }, { lightness: 99 }],
          },
          {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#808080' }, { lightness: 54 }],
          },
          {
            featureType: 'landscape.man_made',
            elementType: 'geometry.fill',
            stylers: [{ color: '#ece2d9' }],
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry.fill',
            stylers: [{ color: '#ccdca1' }],
          },
          {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#767676' }],
          },
          {
            featureType: 'road',
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#ffffff' }],
          },
          { featureType: 'poi', stylers: [{ visibility: 'off' }] },
          {
            featureType: 'landscape.natural',
            elementType: 'geometry.fill',
            stylers: [{ visibility: 'on' }, { color: '#b8cb93' }],
          },
          { featureType: 'poi.park', stylers: [{ visibility: 'on' }] },
          {
            featureType: 'poi.sports_complex',
            stylers: [{ visibility: 'on' }],
          },
          { featureType: 'poi.medical', stylers: [{ visibility: 'on' }] },
          {
            featureType: 'poi.business',
            stylers: [{ visibility: 'simplified' }],
          },
        ],
      }}>
      <Marker position={{ lat: 44.43353, lng: 26.093928 }} />
    </GoogleMap>
  ))
)

const ContactUsPage = (props) => {
  const { classes } = props
  return (
    <div>
      <NavBar />
      <div className={classes.bigMap}>
        <CustomSkinMap
          googleMapURL='https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE'
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={
            <div
              style={{
                height: '100%',
                borderRadius: '6px',
                overflow: 'hidden',
              }}
            />
          }
          mapElement={<div style={{ height: '100%' }} />}
        />
      </div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.contactContent}>
          <div className={classes.container}>
            <h2 className={classes.title}>Send us a message</h2>
            <GridContainer>
              <GridItem md={6} sm={6}>
                <p>
                  You can contact us with anything related to our Products. We
                  {"'"}
                  ll get in touch with you as soon as possible.
                  <br />
                  <br />
                </p>
                <form>
                  <CustomInput
                    labelText='Your Name'
                    id='float'
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                  <CustomInput
                    labelText='Email address'
                    id='float'
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                  <CustomInput
                    labelText='Phone'
                    id='float'
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                  <CustomInput
                    labelText='Your message'
                    id='float'
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 6,
                    }}
                  />
                  <div className={classes.textCenter}>
                    <Button color='primary' round>
                      Contact us
                    </Button>
                  </div>
                </form>
              </GridItem>
              <GridItem md={4} sm={4} className={classes.mlAuto}>
                <InfoArea
                  className={classes.info}
                  title='Find us at the office'
                  description={
                    <p>
                      Bld Mihail Kogalniceanu, nr. 8, <br /> 7652 Bucharest, <br /> Romania
                    </p>
                  }
                  icon={PinDrop}
                  iconColor='primary'
                />
                <InfoArea
                  className={classes.info}
                  title='Give us a ring'
                  description={
                    <p>
                      Michael Jordan <br /> +40 762 321 762 <br /> Mon - Fri, 8:00-22:00
                    </p>
                  }
                  icon={Phone}
                  iconColor='primary'
                />
                <InfoArea
                  className={classes.info}
                  title='Legal Information'
                  description={
                    <p>
                      Creative Tim Ltd. <br /> VAT · EN2341241 <br /> IBAN · EN8732ENGB2300099123 <br /> Bank · Great
                      Britain Bank
                    </p>
                  }
                  icon={BusinessCenter}
                  iconColor='primary'
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default withStyles(contactUsStyle)(ContactUsPage)
