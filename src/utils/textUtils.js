/* eslint-disable */
import moment from 'moment';
import i18next from 'i18next';

// export const formatUnixToDate = unit => moment.unix(unit).format();

export const upperFirstChar = (text) => {
  return text.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1);
  });
};
export const lowerFirstChar = (text) => {
  return text.charAt(0).toLowerCase() + text.substr(1);
};
export const replaceAll = (text, search, replacement) => {
  return text.replace(new RegExp(search, 'g'), replacement);
};

export const formatDateTime = (text) => {
  return text
    ? moment(text).format('DD/MM/YY, hh:mma')
    : moment().format('DD/MM/YY, hh:mma');
};

export const formatDate = (text, type = 'DD/MM/YY') => {
  return text ? moment(text).format(type) : moment().format(type);
};

export const formatDateUTC = (text, type = 'DD/MM/YY') => {
  return text ? moment.utc(text).format(type) : moment().utc.format(type);
};

export const formatDateUnix = (text, type = 'DD/MM/YY') => {
  return text ? moment.unix(text).format(type) : moment().unix.format(type);
};

export const formatTime = (text) => {
  return text ? moment(text).format('hh:mma') : moment().format('hh:mma');
};

export const encodeJsonToURI = (params) => {
  return Object.keys(params)
    .map((key) => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
    })
    .join('&');
};

export const stringToSlug = (e) => {
  let str = e;
  str = unidecode(str).toLowerCase();
  str = str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return str;
};
export const makeActionName = (text) => {
  return lowerFirstChar(
    replaceAll(
      upperFirstChar(replaceAll(text, '_', ' ').toLowerCase()),
      ' ',
      '',
    ),
  );
};

export const formatMoney = (number = 0, n, x, currency) => {
  const UNIT = ['', 'K', 'M'];
  let unitRank = 0;
  let tmpPrice = Math.abs(number);
  while (1) {
    tmpPrice = Number(tmpPrice) / 1000;
    unitRank += tmpPrice > 1 ? 1 : 0;
    if (tmpPrice < 1) break;
  }
  const re = `\\d(?=(\\d{${x || 3}})+${n > 0 ? '\\.' : '$'})`;
  return `${number >= 0 ? '' : '-'}${Number(tmpPrice * 1000)
    .toFixed(2)
    .replace(new RegExp(re, 'g'), '$&,')}${UNIT[unitRank]} ${currency}`;
};

export const formatNumber = (number, n = 0, x = 3, suffix = '') => {
  const re = `\\d(?=(\\d{${x}})+${n > 0 ? '\\.' : '$'})`;
  return number
    ? `${Number(number)
        .toFixed(Math.max(0, ~~n))
        .replace(new RegExp(re, 'g'), '$&,')}${suffix}`
    : `0${suffix}`;
};

export const formatNumberToMoney = (number, n = 0, x = 3) => {
  const re = `\\d(?=(\\d{${x}})+${n > 0 ? '\\.' : '$'})`;
  return number
    ? `${Number(number)
        .toFixed(Math.max(0, ~~n))
        .replace(new RegExp(re, 'g'), '$&,')} đ`
    : `0 đ`;
};

export const inputNumberFormatter = () => {
  return {
    formatter: (value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
    parser: (value) => value.replace(/\$\s?|(,*)/g, ''),
    ruleType: 'number',
  };
};

export const compactNumber = (num, digits = 3) => {
  var si = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'K' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'B' },
  ];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  if (!num) return 0;
  return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol;
};

// compactNumber(3000) // 3K

export const divideNumber = (a, b) => {
  if (b === 0) {
    return 0;
  } else {
    return a / b;
  }
};

export const formatFraction = (a, b) => {
  if (!a || !b) {
    return '0/0';
  } else {
    return `${formatNumber(~~(a / b))}/1`;
  }
};
