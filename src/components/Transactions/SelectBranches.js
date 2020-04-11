/* eslint-disable react/jsx-curly-newline */
import React, { useEffect } from 'react';
import { Select } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import actions from 'redux/utils/actions';
import { PRIMARY_KEY } from 'redux/utils/crudSlice';
import PropTypes from 'prop-types';
import { throttle } from 'lodash';
import { convertObjToQueryParams } from 'utils/tools';

const SelectBranches = ({
  style,
  onChange,
  placeholder,
  mode,
  companyID,
  key,
  value,
  display,
  customResource,
}) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.branches.allData);

  useEffect(() => {
    if (companyID.length > 0) {
      dispatch(
        actions.branches.getAllData({
          customResource: 'company/branches',
          query: `?companyID=${JSON.stringify(companyID)}`,
        }),
      );
    } else {
      dispatch(
        actions.branches.getAllData({
          customResource: 'company/branches',
        }),
      );
    }
  }, [dispatch, customResource, companyID]);

  const handleSearch = throttle((e) => {
    if (companyID.length > 0) {
      dispatch(
        actions.branches.getAllData({
          customResource: 'company/branches',
          query: `?companyID=${JSON.stringify(companyID)}${
            e &&
            `&${convertObjToQueryParams({
              name: e,
            })}`
          }`,
        }),
      );
    } else {
      dispatch(
        actions.branches.getAllData({
          customResource: 'company/branches',
          query: `?${convertObjToQueryParams({
            name: e,
          })}`,
        }),
      );
    }
  }, 300);
  return (
    <Select
      mode={mode}
      placeholder={placeholder}
      style={style}
      onSearch={handleSearch}
      onChange={onChange}
      value={value}
      filterOption={false}
    >
      {data?.map((e, index) => (
        <Select.Option key={String(index)} value={e?.[key]}>
          {e?.[display]}
        </Select.Option>
      ))}
    </Select>
  );
};

SelectBranches.propTypes = {
  style: PropTypes.object,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  key: PropTypes.string,
  mode: PropTypes.string,
  value: PropTypes.object,
  companyID: PropTypes.array,
  display: PropTypes.string,
  customResource: PropTypes.string,
};

SelectBranches.defaultProps = {
  key: PRIMARY_KEY,
  display: 'name',
};

export default SelectBranches;
