/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Divider } from 'antd';
import RestTextArea from 'components/common/RestTextArea';
import RestUploadImage from 'components/common/RestUploadImage';

const Form = () => {
  return (
    <>
      <Divider>TẠO MỚI</Divider>
      <RestTextArea label="Mô tả (Tiếng Việt)" fieldName={['desc', 'vi']} />
      <RestTextArea label="Mô tả (Tiếng Anh)" fieldName={['desc', 'en']} />
      <RestUploadImage
        label="Icon"
        fieldName="tempIcon"
        required={false}
        record="icon.sizes.sm.url"
      />
    </>
  );
};

Form.propTypes = {};

export default Form;
