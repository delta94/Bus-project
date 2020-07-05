/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { isEqual } from 'lodash';
import usePrevious from './usePrevious';

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

const useSetting = () => {
  const [setting, setSetting] = useState({
    primaryColor: COLOR_LIST[0].color,
    theme: 'light',
  });

  const preSetting = usePrevious(setting);

  const changeSetting = (value) => {
    setSetting({
      ...setting,
      ...value,
    });
  };

  useEffect(() => {
    const localSetting = localStorage.getItem('setting');
    localSetting && setSetting(JSON.parse(localSetting));
  }, []);

  useEffect(() => {
    if (preSetting && !isEqual(preSetting, setting)) {
      localStorage.setItem('setting', JSON.stringify(setting));
    }
  }, [setting]);

  return {
    setting,
    changeSetting,
  };
};

export default useSetting;
