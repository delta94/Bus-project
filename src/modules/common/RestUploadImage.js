/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext, useState, useEffect } from 'react';
import { Upload, Form, message as Message } from 'antd';
import PropTypes from 'prop-types';
import { uploadPhoto } from 'api/crud';
import { get } from 'lodash';
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import i18next from 'i18next';
import { FormContext } from './RestForm';

const RestUploadImage = ({
  fieldName,
  label,
  required,
  defaultValue,
  message,
  record,
  wrapperCol,
  defaultImage,
  labelCol,
  disabled,
}) => {
  const [loading, setLoading] = useState();
  const { source } = useContext(FormContext);
  const [image, setImage] = useState(false);

  useEffect(() => {
    setImage(get(source, record) || defaultImage);
  }, [source, record, defaultImage]);

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="ant-upload-text">{i18next.t('update')}</div>
    </div>
  );

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      setImage(info.file.response.data.url);
      setLoading(false);
    } else if (info.file.status === 'error') {
      setLoading(false);
      Message.error(`${info.file.name} file upload failed.`);
    }
  };
  return (
    <Form.Item
      label={label}
      name={fieldName}
      rules={[
        {
          required,
          message,
        },
      ]}
      wrapperCol={wrapperCol}
      labelCol={labelCol}
    >
      <Upload
        disabled={disabled}
        listType="picture-card"
        name="file"
        showUploadList={false}
        customRequest={uploadPhoto}
        onChange={handleChange}
        withCredentials
        defaultFileList={defaultValue}
      >
        {image ? (
          <img src={image} alt="avatar" style={{ width: '100%' }} />
        ) : (
          uploadButton
        )}
      </Upload>
    </Form.Item>
  );
};

RestUploadImage.propTypes = {
  disabled: PropTypes.bool,
  record: PropTypes.string,
  fieldName: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.any,
  required: PropTypes.bool,
  message: PropTypes.string,
  labelCol: PropTypes.object,
  wrapperCol: PropTypes.object,
  defaultImage: PropTypes.string,
};

RestUploadImage.defaultProps = {
  required: true,
  message: 'Không hợp lệ',
  wrapperCol: { span: 24 },
  labelCol: { span: 24 },
};

export default RestUploadImage;
