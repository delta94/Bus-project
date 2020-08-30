/* eslint-disable react/jsx-curly-newline */
import React, { useEffect } from 'react';
import { Select, Form } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import actions from '@/features/actions';
import { PRIMARY_KEY } from 'shared/crudSlice';
import PropTypes from 'prop-types';
import { hashSearchParams, DEFAULT_QUERY } from '@/utils/url';
import { debounce } from 'lodash';

const RestFetchSelect = ({
  style,
  onChange,
  placeholder,
  mode,
  resource,
  value,
  display,
  customResource,
  rules,
  fieldName,
  label,
  labelCol,
  wrapperCol,
}) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state[resource].allData);

  useEffect(() => {
    dispatch(
      actions[resource].getAllData({
        customResource,
        query: DEFAULT_QUERY,
      }),
    );
  }, [dispatch, resource, customResource]);

  const handleSearch = debounce((e) => {
    dispatch(
      actions[resource].getAllData({
        customResource,
        query: `?q=${hashSearchParams('name', e)}`,
      }),
    );
  }, 500);
  return (
    <Form.Item
      label={label}
      name={fieldName}
      rules={rules}
      labelCol={labelCol}
      wrapperCol={wrapperCol}
    >
      <Select
        mode={mode}
        placeholder={placeholder}
        style={style}
        onSearch={handleSearch}
        onChange={onChange}
        filterOption={false}
        showSearch
      >
        {data?.map((e, index) => (
          <Select.Option key={String(index)} value={e?.[value]}>
            {e?.[display]}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
};

RestFetchSelect.propTypes = {
  style: PropTypes.object,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  mode: PropTypes.string,
  resource: PropTypes.string,
  value: PropTypes.string,
  display: PropTypes.string,
  customResource: PropTypes.string,
  rules: PropTypes.array,
  fieldName: PropTypes.string,
  label: PropTypes.string,
  wrapperCol: PropTypes.object,
  labelCol: PropTypes.object,
};

RestFetchSelect.defaultProps = {
  value: PRIMARY_KEY,
  display: 'name',
  rules: [
    {
      required: true,
      message: 'Không được trông',
    },
  ],
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

export default RestFetchSelect;
