import React from 'react';
import MenuItem from './MenuItem';
import Notification from './Notification';
import UserInfo from './UserInfo';
import Language from './Language';
import Search from './Search';
import Chat from './Chat';

const Menu = () => {
  return (
    <div className="flex items-center h-full">
      <MenuItem>
        <Search />
      </MenuItem>
      <MenuItem>
        <Notification />
      </MenuItem>
      <MenuItem>
        <Language />
      </MenuItem>
      <MenuItem>
        <Chat />
      </MenuItem>
      <MenuItem>
        <UserInfo />
      </MenuItem>
    </div>
  );
};

Menu.propTypes = {};

export default Menu;
