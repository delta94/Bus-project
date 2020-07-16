/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback } from 'react';
import { changeAntdTheme, generateThemeColor } from '../utils/dynamic-theme';

export const COLOR_LIST = [
  {
    name: 'Blue',
    color: '#1890ff',
  },
  {
    name: 'Red',
    color: '#f5222d',
  },
];

export const THEME_LIST = [
  {
    key: 'light',
    name: 'Light Style',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/NQ%24zoisaD2/jpRkZQMyYRryryPNtyIC.svg',
  },
  {
    key: 'normal',
    name: 'Normal Style',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/XwFOFbLkSM/LCkqqYNmvBEbokSDscrm.svg',
  },
  {
    key: 'dark',
    name: 'Dark Style',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/hmKaLQvmY2/LCkqqYNmvBEbokSDscrm.svg',
  },
];

const useSetting = () => {
  const [setting, setSetting] = useState(() => {
    const localSetting = localStorage.getItem('setting');
    if (localSetting) {
      return JSON.parse(localSetting);
    }
    return {
      primaryColor: COLOR_LIST[0].color,
      themeStyle: THEME_LIST[0].key,
    };
  });

  const changeSetting = useCallback((value) => {
    const newSetting = {
      ...setting,
      ...value,
    };
    setSetting(newSetting);
    localStorage.setItem('setting', JSON.stringify(newSetting));
    changeAntdTheme(generateThemeColor(newSetting.primaryColor));
  }, []);

  return {
    setting,
    changeSetting,
  };
};

export default useSetting;
