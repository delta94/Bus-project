/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { Form, Select } from 'antd';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'redux/utils/actions';
import { PRIMARY_KEY } from 'redux/utils/crudSlice';

const RestSelectCategories = ({
  fieldName,
  label,
  required,
  message,
  mode,
  wrapperCol,
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      actions.categories.getAllData({
        customResource: `company/categories?&active=true`,
      }),
    );
  }, [dispatch]);
  const categories = useSelector((state) => state.categories.allData);
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
      <Select
        mode={mode}
        style={{ width: 400 }}
        showArrow
        filterOption={
          (input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0
          // eslint-disable-next-line react/jsx-curly-newline
        }
      >
        {categories.map((e) => (
          <Select.Option key={e?.[PRIMARY_KEY]}>{e?.name?.vi}</Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
};

RestSelectCategories.propTypes = {
  fieldName: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  label: PropTypes.string,
  required: PropTypes.bool,
  message: PropTypes.string,
  mode: PropTypes.string,
  wrapperCol: PropTypes.object,
};

RestSelectCategories.defaultProps = {
  required: true,
  message: 'Không hợp lệ',
  wrapperCol: { span: 24 },
};

export default RestSelectCategories;
