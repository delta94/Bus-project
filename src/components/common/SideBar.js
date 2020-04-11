/* eslint-disable react/jsx-wrap-multilines */
import { ShopOutlined } from '@ant-design/icons';
import { Drawer, Layout, Menu } from 'antd';
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
    key: 'dashboad',
    text: 'overview.sidebar',
    icon: ShopOutlined,
    url: '/',
  },
];

const StyledSider = styled(Layout.Sider)`
  display: none;
  @media (min-width: 576px) {
    display: block;
  }
`;

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
      font-size: ${(props) => (props.collapsed === 'true' ? '20px' : '14px')};
    }
  }
`;

const SideBar = ({
  collapsed,
  visible,
  toggleVisible,
  isMobileBreakpoint,
  width,
  logo,
  fullLogo,
}) => {
  const { history, location } = useRouter();
  const url = getCurrentTab(location.pathname);
  const children = (
    <>
      <Logo>
        {collapsed ? (
          <img src={logo} alt="" style={{ width: 39 }} />
        ) : (
          <img src={fullLogo} alt="" />
        )}
      </Logo>
      <StyledSider.Menu
        mode="inline"
        selectedKeys={[url || 'dashboard']}
        defaultSelectedKeys={[url || 'dashboard']}
        collapsed={collapsed.toString()}
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
    </>
  );
  return (
    <StyledSider
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
      {!isMobileBreakpoint ? (
        children
      ) : (
        <Drawer
          width={width}
          closable={false}
          placement="left"
          onClose={() => {
            toggleVisible(false);
          }}
          visible={visible}
          style={{ padding: 0 }}
        >
          {children}
        </Drawer>
      )}
    </StyledSider>
  );
};

SideBar.propTypes = {
  isMobileBreakpoint: PropTypes.bool,
  collapsed: PropTypes.bool,
  width: PropTypes.string,
  logo: PropTypes.any,
  fullLogo: PropTypes.any,
  toggleVisible: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default SideBar;
