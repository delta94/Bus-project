/* eslint-disable react/jsx-curly-newline */
/* eslint-disable no-underscore-dangle */
import React, { useContext } from 'react';
import { Form } from 'antd';
import PropTypes from 'prop-types';
import { FormContext } from './RestForm';

const RestSelect = ({
  fieldName,
  label,
  required,
  message,
  placeholder,
  component,
  onChange,
  style,
  mode,
  width,
  wrapperCol,
  showSearch,
  labelCol,
}) => {
  const { form } = useContext(FormContext);
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
      labelCol={labelCol}
      wrapperCol={wrapperCol}
    >
      {React.cloneElement(component, {
        style: { width, ...style },
        showSearch,
        placeholder,
        ...(onChange && { onChange: (e) => onChange(e, form) }),
        mode,
      })}
    </Form.Item>
  );
};

RestSelect.propTypes = {
  style: PropTypes.object,
  fieldName: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  label: PropTypes.string,
  required: PropTypes.bool,
  message: PropTypes.string,
  placeholder: PropTypes.string,
  component: PropTypes.any,
  onChange: PropTypes.func,
  width: PropTypes.number,
  mode: PropTypes.string,
  showSearch: PropTypes.bool,
  wrapperCol: PropTypes.object,
  labelCol: PropTypes.object,
};

RestSelect.defaultProps = {
  showSearch: false,
  required: true,
  message: 'Không để trống',
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

export default RestSelect;
