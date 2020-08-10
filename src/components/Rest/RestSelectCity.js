/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Form, Select } from 'antd';
import PropTypes from 'prop-types';
import { getCitys } from 'utils/city';

const RestSelectCity = ({
  fieldName,
  label,
  required,
  defaultValue,
  message,
  placeholder,
  labelCol,
}) => {
  return (
    <Form.Item
      name={fieldName}
      label={label}
      rules={[
        {
          required,
          message,
        },
      ]}
      labelCol={labelCol}
    >
      <Select
        showSearch
        placeholder={placeholder}
        defaultValue={defaultValue}
        style={{ width: 200 }}
      >
        {getCitys()
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((e) => (
            <Select.Option key={e._id}>{e.name}</Select.Option>
          ))}
      </Select>
    </Form.Item>
  );
};

RestSelectCity.propTypes = {
  fieldName: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  label: PropTypes.string,
  defaultValue: PropTypes.any,
  required: PropTypes.bool,
  message: PropTypes.string,
  placeholder: PropTypes.string,
  labelCol: PropTypes.object,
};

RestSelectCity.defaultProps = {
  required: true,
  message: 'Không để trống',
  labelCol: { span: 24 },
};

export default RestSelectCity;
