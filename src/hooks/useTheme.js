import useSetting from './useSetting';
import theme from '../configs/theme';

const useTheme = () => {
  const { setting } = useSetting();
  return {
    ...theme,
    palette: {
      primary: setting.primaryColor,
    },
  };
};
export default useTheme;
