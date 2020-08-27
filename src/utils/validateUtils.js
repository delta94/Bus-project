export const validateRegex = {
  phone: /((\+84[0-9]{9})|(\b0[0-9]{9}))(?![0-9])/g,
  password: /^(?=.*[a-z])(?=.*[0-9])(?=.*\d).{6,}$/g,
  number: /^[-]?[0-9]*$/g,
  numberUnsigned: /^[0-9]*$/g,
  floatNumber: /^[-]?\d*\.?\d*$/,
  floatNumberUnsigned: /^\d*\.?\d*$/, // negative sign (-) is allowed
  // negative sign (-) is allowed
  editBookingId: '#bookings/(.*)/edit',
  fullName: /^[a-z0-9 ]{3,100}$/iu,
  hour: /^(2[0-3]|1[0-9]|[0-9])$/,
  minute: /^[1-5]?[0-9]$/,
  week: /^(5[0-3]|[1-4][0-9]|[1-9])$/,
  percentage: /^(100|[1-9]?[0-9])$/,
  email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
  month: /^(1[0-2]|[1-9])$/,
  day: /^(3[01]|[12][0-9]|[1-9])$/,
};

export const isURL = (str) => {
  const regex = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i',
  );
  return regex.test(str);
};

export const isNull = (value) => {
  return value === null || value === undefined;
};
