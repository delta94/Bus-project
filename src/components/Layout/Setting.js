/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { Drawer } from 'antd';
import styled from 'styled-components';
import { CloseOutlined, SettingOutlined } from '@ant-design/icons';
import Box from 'components/common/Box';
import useToggle from '../../hooks/useToggle';
import ThemeColor from './ThemeColor';
import PageStyleSetting from './PageStyleSetting';

export const StyledSetting = styled.div`
  position: absolute;
  top: 240px;
  right: 300px;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  font-size: 16px;
  text-align: center;
  background: ${({ theme }) => theme.palette.primary};
  border-radius: 4px 0 0 4px;
  cursor: pointer;
  pointer-events: auto;
`;

const Setting = () => {
  const { isVisible, onToggle, onClose } = useToggle(false);
  return (
    <Drawer
      placement="right"
      closable={false}
      onClose={onClose}
      width={300}
      visible={isVisible}
      handler=<StyledSetting onClick={onToggle}>
        {isVisible ? (
          <CloseOutlined
            style={{
              color: '#fff',
              fontSize: 20,
            }}
          />
        ) : (
          <SettingOutlined
            style={{
              color: '#fff',
              fontSize: 20,
            }}
          />
        )}
      </StyledSetting>
    >
      <Box p="20px">
        <PageStyleSetting />
        <Box m="20px">
          <ThemeColor />
        </Box>
      </Box>
    </Drawer>
  );
};

Setting.propTypes = {};

export default Setting;
