export const getToday = () => {
  const date = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const today = new Date(year, month, date, 0, 0, 0);
  return today;
};

export const getYesterday = () => {
  const today = getToday();
  const yesterday = getToday();
  yesterday.setDate(today.getDate() - 1);
  return yesterday;
};

export const getTomorrow = () => {
  const today = getToday();
  const tomorrow = getToday();
  tomorrow.setDate(today.getDate() + 1);
  return tomorrow;
};

export const getWeek = () => {
  const today = getToday();
  const week = getToday();
  week.setDate(today.getDate() - 7);
  return week;
};

export const getMonth = () => {
  const today = getToday();
  const month = getToday();
  month.setDate(today.getDate() - 30);
  return month;
};

export const get3MonthBefore = () => {
  const today = getToday();
  const sixMonthBefore = getToday();
  sixMonthBefore.setMonth(today.getMonth() - 3);
  return sixMonthBefore;
};

export const rangeToday = {
  start: getToday().toISOString(),
  end: getToday().toISOString(),
};

export const rangeYesterday = {
  start: getYesterday().toISOString(),
  end: getYesterday().toISOString(),
};

export const rangeWeek = {
  start: getWeek().toISOString(),
  end: getToday().toISOString(),
};

export const rangeMonth = {
  start: getMonth().toISOString(),
  end: getToday().toISOString(),
};

export const range6MonthBefore = {
  start: get3MonthBefore().toISOString(),
  end: getToday().toISOString(),
};

export const getDefaultURL = ({ haveTable }) => {
  if (haveTable) {
    return `?page=1&limit=10`;
  }
  return ``;
};
