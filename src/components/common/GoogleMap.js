/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import Icon from '@ant-design/icons';
import { ReactComponent as GeoIcon } from 'assets/svg/gps.svg';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';

const Marker = () => <Icon component={GeoIcon} style={{ fontSize: 18 }} />;

const GoogleMap = ({ width, height, lat, lng, zoom }) => {
  const [currentPosition, setCurrentPosition] = useState({
    lat: 0,
    lng: 0,
  });
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (err) => {
          if (err.code === 1) {
            console.error('Error: Access is denied!');
          } else if (err.code === 2) {
            console.error('Error: Position is unavailable!');
          }
        },
        { timeout: 60000 },
      );
    } else {
      console.error('Sorry, browser does not support geolocation!');
    }
  }, []);
  return (
    <div style={{ width, height }}>
      <GoogleMapReact
        center={{
          lat: lat ?? currentPosition.lat,
          lng: lng ?? currentPosition.lng,
        }}
        defaultCenter={{
          lat: currentPosition.lat,
          lng: currentPosition.lng,
        }}
        defaultZoom={zoom}
      >
        <Marker
          lat={lat ?? currentPosition.lat}
          lng={lng ?? currentPosition.lng}
        />
      </GoogleMapReact>
    </div>
  );
};

GoogleMap.propTypes = {
  width: PropTypes.string,
  height: PropTypes.number,
  lat: PropTypes.number,
  lng: PropTypes.number,
  zoom: PropTypes.number,
};

export default GoogleMap;
