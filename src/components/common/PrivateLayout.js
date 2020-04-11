/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Layout, BackTop, Menu, Alert } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import SideBar from './SideBar';
import UserInfo from './UserInfo';

const { Content, Header } = Layout;
const { ErrorBoundary } = Alert;

const PrivateLayout = ({ children, px, widthSideBar }) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout>
      <SideBar collapsed={collapsed} width={widthSideBar} />
      <Layout style={{ paddingLeft: collapsed ? 80 : widthSideBar }}>
        <Header
          style={{
            padding: `0 ${px}px`,
            zIndex: 9,
            width: `calc(100% - ${collapsed ? '80px' : widthSideBar})`,
          }}
          className="shadow fixed top-0 flex items-center justify-between"
        >
          {collapsed ? (
            <MenuFoldOutlined
              className="cursor-pointer"
              style={{ fontSize: '20px' }}
              onClick={toggle}
            />
          ) : (
            <MenuUnfoldOutlined
              className="cursor-pointer"
              style={{ fontSize: '20px' }}
              onClick={toggle}
            />
          )}
          <Menu mode="horizontal" className="flex">
            <Menu.Item key="1">
              <UserInfo />
            </Menu.Item>
          </Menu>
        </Header>
        <Content>
          <div
            className="overflow-x-hidden overflow-y-scroll flex flex-col"
            style={{ padding: `80px ${px}px 0 ${px}px` }}
          >
            <ErrorBoundary>{children}</ErrorBoundary>
          </div>
        </Content>
      </Layout>
      <BackTop />
    </Layout>
  );
};

PrivateLayout.propTypes = {
  children: PropTypes.node,
  px: PropTypes.number,
  widthSideBar: PropTypes.string,
};

PrivateLayout.defaultProps = {
  px: 20,
  widthSideBar: '230px',
};

export default PrivateLayout;
