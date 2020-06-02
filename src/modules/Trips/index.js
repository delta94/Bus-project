import React from 'react';
import GoogleMapReact from 'google-map-react';
import { REACT_APP_GOOGLE_MAP_API_KEY } from 'configs/constants';

const Trips = () => {
  return (
    <div className="w-full" style={{ height: 'calc(100vh - 80px)' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultZoom={11}
        defaultCenter={{
          lat: 16.05,
          lng: 108.2,
        }}
        yesIWantToUseGoogleMapApiInternals
      />
    </div>
  );
};

Trips.propTypes = {};

export default Trips;
