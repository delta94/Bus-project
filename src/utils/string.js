/* eslint-disable no-bitwise */
import slug from 'slug';

export const capitalize = ([first, ...rest], lowerRest = false) =>
  first.toUpperCase() +
  (lowerRest ? rest.join('').toLowerCase() : rest.join(''));

// capitalize('fooBar'); // 'FooBar'

export const compactString = (str, length = 10) => {
  return str?.length > length ? `${str?.slice(0, length)}...` : str;
};

export const getSlug = (value) => {
  return slug(value)?.toLowerCase();
};

export const uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
