/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import { Upload, message, Modal } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import i18next from 'i18next';
import { uploadPhoto } from '../../api/upload';

export const StyledUpload = styled(Upload)`
  .ant-upload {
    width: 128px;
    height: 128px;
  }
`;

const UploadImage = ({ onOk, defaultImage }) => {
  const [loading, setLoading] = useState();
  const [image, setImage] = useState(null);
  useEffect(() => {
    setImage(defaultImage);
  }, [defaultImage]);

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}

      <div className="ant-upload-text">{i18next.t('upload')}</div>
    </div>
  );

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      setLoading(false);
      setImage(info.file.response);
      Modal.confirm({
        title: i18next.t('uploadConfirm'),
        onOk() {
          onOk(info.file.response);
        },
        onCancel() {
          setImage(defaultImage);
        },
      });
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
      setLoading(false);
    }
  };

  return (
    <StyledUpload
      listType="picture-card"
      name="file"
      showUploadList={false}
      customRequest={uploadPhoto}
      onChange={handleChange}
      withCredentials
    >
      {image ? (
        <img src={image} alt="avatar" style={{ width: '100%' }} />
      ) : (
        uploadButton
      )}
    </StyledUpload>
  );
};

UploadImage.propTypes = {
  onOk: PropTypes.func.isRequired,
  defaultImage: PropTypes.string,
};

UploadImage.defaultProps = {
  defaultImage: '',
};

export default UploadImage;
