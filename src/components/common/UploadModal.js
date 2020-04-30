/* eslint-disable no-console */
import React from 'react';
import { notification } from 'antd';
import RestEdit from '../Rest/RestEdit';
import RestUploadImage from '../Rest/RestUploadImage';

const UploadModal = () => {
  const handleSubmit = (values) => {
    try {
      console.log(values.image.file.response);
    } catch (error) {
      notification.error('😱 Error: ', error);
    }
  };
  return (
    <RestEdit customSubmit={handleSubmit}>
      <RestUploadImage value="image" />
    </RestEdit>
  );
};

UploadModal.propTypes = {};

export default UploadModal;
