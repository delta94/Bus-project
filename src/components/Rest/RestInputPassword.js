import React from 'react';
import { Form, Input } from 'antd';
import PropTypes from 'prop-types';

const RestInputPassword = ({
  fieldName,
  label,
  required,
  defaultValue,
  messageRequire,
  messageValidate,
  onChange,
  placeholder,
  pattern,
  style,
  prefix,
  type,
}) => {
  return (
    <Form.Item
      name={fieldName}
      label={label}
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
    >
      <Input.Password
        defaultValue={defaultValue}
        style={style}
        onChange={onChange}
        placeholder={placeholder}
        prefix={prefix}
        type={type}
      />
    </Form.Item>
  );
};

RestInputPassword.propTypes = {
  fieldName: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  label: PropTypes.string,
  defaultValue: PropTypes.any,
  required: PropTypes.bool,
  messageRequire: PropTypes.string,
  messageValidate: PropTypes.string,
  onChange: PropTypes.func,
  pattern: PropTypes.any,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  prefix: PropTypes.any,
  type: PropTypes.string,
};

RestInputPassword.defaultProps = {
  required: true,
  messageRequire: 'Không được trống',
  messageValidate: 'Không hợp lệ',
  type: 'text',
};

export default RestInputPassword;
