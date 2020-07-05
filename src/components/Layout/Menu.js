import React from 'react';
import Chat from './Chat';
import Language from './Language';
import MenuItem from './MenuItem';
import Notification from './Notification';
import Search from './Search';
import UserInfo from './UserInfo';

const MENU = [
  {
    component: <Search />,
  },
  {
    component: <Notification />,
  },
  {
    component: <Language />,
  },
  {
    component: <Chat />,
  },
  {
    component: <UserInfo />,
  },
];

const Menu = () => {
  return (
    <div className="flex items-center h-full">
      {MENU.map((e, index) => (
        <MenuItem key={String(index)}>
          {React.cloneElement(e.component)}
        </MenuItem>
      ))}
    </div>
  );
};

Menu.propTypes = {};

export default Menu;
