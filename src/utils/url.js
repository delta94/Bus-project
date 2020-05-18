export const convertParamsToObject = (url) => {
  const vars = {};
  url.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => {
    vars[key] = value;
  });
  return vars;
};

// convertParamsToObject('?a=1&b=2') => { a: '1' , b:'2'}

export const hashSearchParams = (key, value) => {
  if (!value) {
    return '';
  }
  return JSON.stringify({ [key]: value });
};

export const testSearchParams = (filter) => {
  return filter;
};

export const hashSortParams = (key, value) => {
  if (!value) {
    return '';
  }
  return `${key},${value.slice(0, -3).toUpperCase()}`;
};

export const DEFAULT_QUERY = `?page=1&limit=10`;
