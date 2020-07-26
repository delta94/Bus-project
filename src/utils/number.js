export const formatOrdinalnumber = (number) => {
  return number < 10 ? `0${number}` : `${number}`;
};

// formatOrdinalnumber(1);   //01
