import moment from 'moment';

export const rangeToday = {
  startTime: moment().format('YYYY-MM-DD'),
  endTime: moment().format('YYYY-MM-DD'),
};

export const rangeYesterday = {
  startTime: moment().subtract(1, 'days').format('YYYY-MM-DD'),
  endTime: moment().subtract(1, 'days').format('YYYY-MM-DD'),
};

export const rangeWeek = {
  startTime: moment().subtract(7, 'days').format('YYYY-MM-DD'),
  endTime: moment().format('YYYY-MM-DD'),
};

export const rangeMonth = {
  startTime: moment().subtract(30, 'days').format('YYYY-MM-DD'),
  endTime: moment().format('YYYY-MM-DD'),
};

export const getDefaultURL = ({ haveTable }) => {
  if (haveTable) {
    return `?page=1&limit=10`;
  }
  return ``;
};
