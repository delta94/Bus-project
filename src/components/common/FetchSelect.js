/* eslint-disable react/jsx-curly-newline */
import React, { useEffect } from 'react';
import { Select } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import actions from 'redux/actions';
import { PRIMARY_KEY } from 'redux/utils/crudSlice';
import PropTypes from 'prop-types';
import { hashSearchParams, DEFAULT_QUERY } from 'utils/url';
import { debounce } from 'lodash';

const FetchSelect = ({
  style,
  onChange,
  placeholder,
  mode,
  resource,
  key,
  value,
  display,
  customResource,
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
    <Select
      mode={mode}
      placeholder={placeholder}
      style={style}
      value={value}
      onSearch={handleSearch}
      onChange={onChange}
      filterOption={false}
      showSearch
    >
      {data?.map((e, index) => (
        <Select.Option key={String(index)} value={e?.[key]}>
          {e?.[display]}
        </Select.Option>
      ))}
    </Select>
  );
};

FetchSelect.propTypes = {
  style: PropTypes.object,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  mode: PropTypes.string,
  resource: PropTypes.string,
  key: PropTypes.string,
  display: PropTypes.string,
  customResource: PropTypes.string,
  value: PropTypes.object,
};

FetchSelect.defaultProps = {
  key: PRIMARY_KEY,
  display: 'name',
};

export default FetchSelect;
