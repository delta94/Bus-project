import React from 'react';
import { Form, DatePicker } from 'antd';
import PropTypes from 'prop-types';

const RestDatePicker = ({ fieldName, label, required, message, format }) => {
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
    >
      <DatePicker format={format} />
    </Form.Item>
  );
};

RestDatePicker.propTypes = {
  fieldName: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  message: PropTypes.string,
  format: PropTypes.string,
};

RestDatePicker.defaultProps = {
  required: true,
  format: 'DD/MM/YYYY',
  message: 'Không hợp lệ',
};

export default RestDatePicker;
