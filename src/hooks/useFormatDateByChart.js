/* eslint-disable consistent-return */
import { rangeToday, rangeYesterday } from 'utils/time';
import { formatDate } from 'utils/textUtils';
import useRouter from './useRouter';

const useFormatDateByChart = () => {
  const { query } = useRouter();

  const formatDateByChart = (tick) => {
    switch (JSON.stringify({ start: query.start, end: query.end })) {
      case JSON.stringify(rangeToday):
      case JSON.stringify(rangeYesterday):
        return formatDate(tick, 'HH:mm');
      default:
        return formatDate(tick, 'DD/MM');
    }
  };

  return { formatDateByChart };
};

export default useFormatDateByChart;
