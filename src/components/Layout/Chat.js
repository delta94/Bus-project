import { AppstoreOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import React from 'react';
import FadeIn from 'react-fade-in';
import useToggle from '../../hooks/useToggle';

const Chat = () => {
  const { isVisible, onOpen, onClose } = useToggle(false);
  return (
    <>
      <AppstoreOutlined
        style={{ fontSize: 20 }}
        className="cursor-pointer"
        onClick={onOpen}
      />
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        width={520}
        visible={isVisible}
      >
        <FadeIn>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </FadeIn>
      </Drawer>
    </>
  );
};

Chat.propTypes = {};

export default Chat;
