/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
import React from 'react';
import { Avatar, Dropdown, Menu, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from 'modules/Auth/slice';
import { LogoutOutlined } from '@ant-design/icons';

const UserInfo = React.memo(() => {
  const dispatch = useDispatch();
  const hanleLogout = () => {
    dispatch(actions.logout());
  };
  const menu = (
    <Menu>
      <Menu.Item onClick={hanleLogout}>
        <LogoutOutlined type="logout" style={{ marginRight: 10 }} />
        Logout
      </Menu.Item>
    </Menu>
  );
  const { data, loading } = useSelector((state) => state.auth);
  if (loading === 'getInfo') {
    return <Spin size="small" />;
  }
  return (
    <Dropdown overlay={menu} className="cursor-pointer">
      <div className="flex items-center">
        <Avatar src={require('assets/images/download.png')} size={36} />
        <p>{data?.name}</p>
      </div>
    </Dropdown>
  );
});

UserInfo.propTypes = {};

export default UserInfo;
