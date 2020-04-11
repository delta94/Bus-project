/* eslint-disable no-console */
export const getCurrentLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        return {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
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
};
