/* eslint-disable import/no-extraneous-dependencies */
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Alert, BackTop, Layout } from 'antd';
import useMedia from '@/hooks/useMedia';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import SideBar from './SideBar';
import Menu from './Menu';
import { device } from '../../utils/css';
import Setting from './Setting';

const { Content, Header } = Layout;
const { ErrorBoundary } = Alert;

const StyledLayout = styled(Layout)`
  padding-left: 0;
  @media ${device.mobileL} {
    padding-left: ${({ collapsed, width }) =>
      collapsed === 'true' ? '80px' : width};
  }
`;

const StyledHeader = styled(Header)`
  width: 100%;
  @media ${device.mobileL} {
    width: calc(
      100% -
        ${({ collapsed, width }) => (collapsed === 'true' ? '80px' : width)}
    );
  }
`;

const PrivateLayout = ({
  children,
  px,
  widthSideBar,
  logo,
  fullLogo,
  menuList,
}) => {
  const [collapsed, setCollapsed] = useState(true);
  const [visible, toggleVisible] = useState(false);
  const isMobileBreakpoint = useMedia('(max-width: 576px)');

  const toggle = () => {
    if (isMobileBreakpoint) {
      setCollapsed(false);
      toggleVisible(true);
    } else {
      setCollapsed(!collapsed);
    }
  };
  return (
    <Layout>
      <SideBar
        isMobileBreakpoint={isMobileBreakpoint}
        visible={visible}
        toggleVisible={toggleVisible}
        collapsed={collapsed}
        width={widthSideBar}
        logo={logo}
        fullLogo={fullLogo}
      />
      <StyledLayout collapsed={collapsed.toString()} width={widthSideBar}>
        <StyledHeader
          style={{
            padding: `0 ${px}px`,
            zIndex: 9,
          }}
          collapsed={collapsed.toString()}
          width={widthSideBar}
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
          <Menu menuList={menuList} />
        </StyledHeader>
        <Content>
          <div
            className="overflow-x-hidden overflow-y-scroll flex flex-col"
            style={{ padding: `80px ${px}px 0 ${px}px` }}
          >
            <ErrorBoundary>{children}</ErrorBoundary>
          </div>
        </Content>
      </StyledLayout>
      <Setting />
      <BackTop />
    </Layout>
  );
};

PrivateLayout.propTypes = {
  children: PropTypes.node,
  px: PropTypes.number,
  widthSideBar: PropTypes.string,
  logo: PropTypes.any,
  fullLogo: PropTypes.any,
  menuList: PropTypes.any,
};

PrivateLayout.defaultProps = {
  px: 20,
  widthSideBar: '230px',
};

export default PrivateLayout;
