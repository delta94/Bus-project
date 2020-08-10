/* eslint-disable react/prop-types */
import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({ menuList }) => {
  return (
    <div className="flex items-center h-full">
      {menuList.map((e, index) => (
        <MenuItem key={String(index)}>
          {React.cloneElement(e.component)}
        </MenuItem>
      ))}
    </div>
  );
};

Menu.propTypes = {};

export default Menu;
