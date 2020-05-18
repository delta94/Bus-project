import React, { useState } from 'react';
import { AppstoreOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';

const Chat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const showDrawer = () => {
    setIsVisible(true);
  };

  const onClose = () => {
    setIsVisible(false);
  };
  return (
    <>
      <AppstoreOutlined
        style={{ fontSize: 20 }}
        className="cursor-pointer"
        onClick={showDrawer}
      />
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        width={520}
        visible={isVisible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

Chat.propTypes = {};

export default Chat;
