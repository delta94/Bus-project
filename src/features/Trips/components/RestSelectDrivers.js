/* eslint-disable no-underscore-dangle */
import { Form, Select } from 'antd';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../actions';

const RestSelectDrivers = ({
  fieldName,
  label,
  required,
  message,
  mode,
  wrapperCol,
}) => {
  const data = useSelector((state) => state.drivers.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.drivers.getAll());
  }, [dispatch]);
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
      labelCol={wrapperCol}
    >
      <Select mode={mode} style={{ width: 400 }} showArrow>
        {data.map((e) => (
          <Select.Option key={e.id}>{e?.user?.username}</Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
};

RestSelectDrivers.propTypes = {
  fieldName: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  label: PropTypes.string,
  required: PropTypes.bool,
  message: PropTypes.string,
  mode: PropTypes.string,
  wrapperCol: PropTypes.object,
};

RestSelectDrivers.defaultProps = {
  required: true,
  message: 'Không hợp lệ',
  wrapperCol: { span: 24 },
};

export default RestSelectDrivers;
