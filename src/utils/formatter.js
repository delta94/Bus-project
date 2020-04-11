export const numberFomatter = (number) =>
  `${number}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const moneyFomatter = (number) =>
  `${number}đ`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
