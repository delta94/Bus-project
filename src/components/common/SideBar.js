/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-wrap-multilines */
import { ShopOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import useRouter from 'hooks/useRouter';
import I18n from 'i18next';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const { SubMenu } = Menu;

const getCurrentTab = (str) => {
  const paths = str && str.split('/');
  return paths && paths[1];
};

const sidebarMenu = [
  {
    text: 'sideBar.companies',
    icon: ShopOutlined,
    url: '/companies',
  },
];

const StyledSider = styled(Layout.Sider)``;

const Logo = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

StyledSider.Menu = styled(Menu)`
  && {
    .ant-menu-item,
    .ant-menu-submenu-title {
      height: 48px;
      line-height: 48px;
      font-weight: 600;
    }
    .ant-menu-submenu > .ant-menu {
      background-color: #f5f5f5;
    }
    .ant-menu-item .anticon,
    .ant-menu-submenu-title .anticon {
      font-size: ${(props) => (props.collapsed ? '20px' : '14px')};
    }
  }
`;

const SideBar = ({ collapsed, width }) => {
  const { history, location } = useRouter();
  const url = getCurrentTab(location.pathname);
  return (
    <Layout.Sider
      width={width}
      collapsed={collapsed}
      trigger={null}
      collapsible
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100%',
        overflow: 'auto',
        zIndex: 10,
      }}
      className="shadow-md"
    >
      <Logo>
        {collapsed ? (
          <img
            src={require('assets/images/logo.png')}
            alt=""
            style={{ width: 39 }}
          />
        ) : (
          <img src={require('assets/images/fullLogo.png')} alt="" />
        )}
      </Logo>
      <StyledSider.Menu
        mode="inline"
        selectedKeys={[url || 'dashboard']}
        defaultSelectedKeys={[url || 'dashboard']}
        collapsed={collapsed}
      >
        {sidebarMenu.map((menu) =>
          menu.subMenu ? (
            <SubMenu
              key={getCurrentTab(menu.url)}
              title={
                <span>
                  {React.createElement(menu.icon)}
                  <span>{I18n.t(menu.text)}</span>
                </span>
              }
            >
              {menu.subMenu.map((e) => (
                <Menu.Item
                  onClick={() => history.push(e.url)}
                  key={getCurrentTab(e.url)}
                >
                  {React.createElement(e.icon)}
                  {I18n.t(e.text)}
                </Menu.Item>
              ))}
            </SubMenu>
          ) : (
            <Menu.Item
              key={getCurrentTab(menu.url)}
              title={I18n.t(menu.text)}
              onClick={() => history.push(menu.url)}
            >
              {React.createElement(menu.icon)}
              <span>{I18n.t(menu.text)}</span>
            </Menu.Item>
          ),
        )}
      </StyledSider.Menu>
    </Layout.Sider>
  );
};

SideBar.propTypes = {
  collapsed: PropTypes.bool,
  width: PropTypes.string,
};

export default SideBar;
