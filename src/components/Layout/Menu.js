import React from 'react';
import MenuItem from './MenuItem';
import Notification from './Notification';
import UserInfo from './UserInfo';
import Language from './Language';

const Menu = () => {
  return (
    <div className="flex items-center h-full">
      <MenuItem>
        <Notification />
      </MenuItem>
      <MenuItem>
        <UserInfo />
      </MenuItem>
      <MenuItem>
        <Language />
      </MenuItem>
    </div>
  );
};

Menu.propTypes = {};

export default Menu;
