/* eslint-disable no-underscore-dangle */
import city from './city.json';

export const getCitys = () => {
  return city;
};

export const getCity = (key) => {
  return city.find((e) => e._id === key)?.name;
};
