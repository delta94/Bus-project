/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
import React from 'react';
import { Avatar, Dropdown, Menu, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '@/modules/Auth/slice';
import { LogoutOutlined, InfoCircleOutlined } from '@ant-design/icons';
import useRouter from '@/hooks/useRouter';

const UserInfo = React.memo(() => {
  const dispatch = useDispatch();
  const { history } = useRouter();
  const hanleLogout = () => {
    dispatch(actions.logout());
  };
  const redirectInfo = () => {
    history.push('/info');
  };
  const menu = (
    <Menu>
      <Menu.Item onClick={redirectInfo}>
        <InfoCircleOutlined style={{ marginRight: 10 }} />
        Info
      </Menu.Item>
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
        <Avatar src={data.avatar} size={36} style={{ marginRight: 10 }} />
        <p>{data?.username}</p>
      </div>
    </Dropdown>
  );
});

UserInfo.propTypes = {};

export default UserInfo;
