import React from 'react';
import { Form, Input } from 'antd';
import PropTypes from 'prop-types';

const { TextArea } = Input;

const RestTextArea = ({
  fieldName,
  label,
  required,
  messageRequire,
  onChange,
  placeholder,
  pattern,
  messageValidate,
  style,
  prefix,
  wrapperCol,
  labelCol,
}) => {
  return (
    <Form.Item
      label={label}
      name={fieldName}
      rules={[
        {
          required,
          message: messageRequire,
        },
        {
          pattern,
          message: messageValidate,
        },
      ]}
      wrapperCol={wrapperCol}
      labelCol={labelCol}
    >
      <TextArea
        allowClear
        style={style}
        onChange={onChange}
        placeholder={placeholder}
        prefix={prefix}
      />
    </Form.Item>
  );
};

RestTextArea.propTypes = {
  fieldName: PropTypes.any,
  label: PropTypes.string,
  required: PropTypes.bool,
  messageRequire: PropTypes.string,
  onChange: PropTypes.func,
  pattern: PropTypes.any,
  messageValidate: PropTypes.string,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  prefix: PropTypes.any,
  wrapperCol: PropTypes.object,
  labelCol: PropTypes.object,
};

RestTextArea.defaultProps = {
  required: true,
  messageRequire: 'Không được trống',
  messageValidate: 'Không hợp lệ',
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

export default RestTextArea;
