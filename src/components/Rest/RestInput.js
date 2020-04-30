import React from 'react';
import { Form, Input } from 'antd';
import PropTypes from 'prop-types';

const RestInput = ({
  fieldName,
  label,
  required,
  messageRequire,
  messageValidate,
  onChange,
  placeholder,
  pattern,
  style,
  prefix,
  type,
  wrapperCol,
  addonBefore,
  addonAfter,
  labelCol,
  disabled,
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
      labelCol={labelCol}
      wrapperCol={wrapperCol}
    >
      <Input
        disabled={disabled}
        style={{ ...style }}
        onChange={onChange}
        placeholder={placeholder}
        prefix={prefix}
        type={type}
        addonAfter={addonAfter}
        addonBefore={addonBefore}
      />
    </Form.Item>
  );
};

RestInput.propTypes = {
  fieldName: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  label: PropTypes.string,
  required: PropTypes.bool,
  messageRequire: PropTypes.string,
  messageValidate: PropTypes.string,
  onChange: PropTypes.func,
  pattern: PropTypes.any,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  prefix: PropTypes.any,
  type: PropTypes.string,
  wrapperCol: PropTypes.object,
  addonBefore: PropTypes.any,
  addonAfter: PropTypes.any,
  labelCol: PropTypes.object,
  disabled: PropTypes.bool,
};

RestInput.defaultProps = {
  required: true,
  messageRequire: 'Không được trống',
  messageValidate: 'Không hợp lệ',
  type: 'text',
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

export default RestInput;
