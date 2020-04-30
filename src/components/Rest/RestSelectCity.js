/* eslint-disable react/jsx-curly-newline */
/* eslint-disable no-underscore-dangle */
import React, { useContext } from 'react';
import { Form, Select } from 'antd';
import PropTypes from 'prop-types';
import { getCitys } from 'utils/city';
import { get } from 'lodash';
import { FormContext } from './RestForm';

const RestSelectCity = ({
  fieldName,
  label,
  required,
  defaultValue,
  message,
  placeholder,
  record,
  labelCol,
}) => {
  const { source } = useContext(FormContext);
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
        defaultValue={get(source, record) ?? defaultValue}
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
  record: PropTypes.string,
  placeholder: PropTypes.string,
  labelCol: PropTypes.object,
};

RestSelectCity.defaultProps = {
  required: true,
  message: 'Không để trống',
  labelCol: { span: 24 },
};

export default RestSelectCity;
