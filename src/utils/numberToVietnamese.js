/* eslint-disable no-param-reassign */
// eslint-disable-next-line no-param-reassign

const arrNumber = [
  'không',
  'một',
  'hai',
  'ba',
  'bốn',
  'năm',
  'sáu',
  'bảy',
  'tám',
  'chín',
];

function dochangten(number, daydu) {
  let string = '';
  const ten = Math.floor(number / 10);
  const donvi = number % 10;
  if (ten > 1) {
    string = ` ${arrNumber[ten]} mươi`;
    if (donvi === 1) {
      string += ' mốt';
    }
  } else if (ten === 1) {
    string = ' mười';
    if (donvi === 1) {
      string += ' một';
    }
  } else if (daydu && donvi > 0) {
    string = ' lẻ';
  }

  if (donvi === 5 && ten >= 1) {
    string += ' lăm';
  } else if (donvi > 1 || (donvi === 1 && ten === 0)) {
    string += ` ${arrNumber[donvi]}`;
  }
  return string;
}

function docblock(number, daydu) {
  let string = '';
  const hundred = Math.floor(number / 100);
  number %= 100;
  if (daydu || hundred > 0) {
    string = ` ${arrNumber[hundred]} trăm`;
    string += dochangten(number, true);
  } else {
    string = dochangten(number, false);
  }
  return string;
}

function readMilion(number, daydu) {
  let string = '';
  const trieu = Math.floor(number / 1000000);
  number %= 1000000;
  if (trieu > 0) {
    string = `${docblock(trieu, daydu)} triệu`;
    daydu = true;
  }
  const thounsand = Math.floor(number / 1000);
  number %= 1000;
  if (thounsand > 0) {
    string += `${docblock(thounsand, daydu)} nghìn`;
    daydu = true;
  }
  if (number > 0) {
    string += docblock(number, daydu);
  }
  return string;
}

const numberToVietnamese = (number) => {
  number = Math.floor(number);
  if (number === 0) return arrNumber[0];
  let string = '';
  let hauto = '';
  do {
    // eslint-disable-next-line no-undef
    const milion = number % 1000000000;
    // eslint-disable-next-line no-param-reassign
    number = Math.floor(number / 1000000000);
    if (number > 0) {
      string = readMilion(milion, true) + hauto + string;
    } else {
      string = readMilion(milion, false) + hauto + string;
    }
    hauto = ' tỷ';
  } while (number > 0);
  return string;
};

export default numberToVietnamese;
