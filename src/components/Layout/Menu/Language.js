import Icon from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import { ReactComponent as EarthIcon } from 'assets/svg/earth-grid.svg';
import { ReactComponent as EnIcon } from 'assets/svg/united-kingdom.svg';
import { ReactComponent as ViIcon } from 'assets/svg/vietnam.svg';
import { useTranslation } from 'react-i18next';

import React from 'react';

const MenuLanguage = () => {
  const { t, i18n } = useTranslation();
  const defaultSelectedKey = localStorage.getItem('language') || 'en';
  const selectLanguage = (e) => {
    localStorage.setItem('language', e.key);
    i18n.changeLanguage(e.key);
  };
  return (
    <Menu onSelect={selectLanguage} defaultSelectedKeys={[defaultSelectedKey]}>
      <Menu.Item className="flex items-center" key="en">
        <Icon component={EnIcon} style={{ fontSize: 20 }} />
        {t('language.english')}
      </Menu.Item>
      <Menu.Item className="flex items-center" key="vi">
        <Icon component={ViIcon} style={{ fontSize: 20 }} />
        {t('language.vietnamese')}
      </Menu.Item>
    </Menu>
  );
};

const Language = () => {
  return (
    <Dropdown
      overlay={<MenuLanguage />}
      trigger={['click']}
      placement="bottomRight"
    >
      <div className="h-full cursor-pointer">
        <Icon component={EarthIcon} style={{ fontSize: 20 }} />
      </div>
    </Dropdown>
  );
};

Language.propTypes = {};

export default Language;
