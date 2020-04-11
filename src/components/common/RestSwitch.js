import React from 'react';
import { Form, Switch } from 'antd';
import PropTypes from 'prop-types';

const RestSwitch = ({ fieldName, label, required, message }) => {
  return (
    <Form.Item
      label={label}
      rules={[
        {
          required,
          message,
        },
      ]}
      name={fieldName}
      valuePropName="checked"
    >
      <Switch />
    </Form.Item>
  );
};

RestSwitch.propTypes = {
  fieldName: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  label: PropTypes.string,
  required: PropTypes.bool,
  message: PropTypes.string,
};

RestSwitch.defaultProps = {
  required: true,
  message: 'Không hợp lệ',
};

export default RestSwitch;
