/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { Form, Select } from 'antd';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'redux/utils/actions';
import { throttle } from 'lodash';
import { PRIMARY_KEY } from 'redux/utils/crudSlice';
import { convertObjToQueryParams } from 'utils/tools';

const RestSelectBranch = ({
  fieldName,
  label,
  mode,
  companyID,
  onChange,
  placehorder,
  wrapperCol,
  labelCol,
  rules,
  style,
}) => {
  const branches = useSelector((state) => state.branches.allData);
  const dispatch = useDispatch();
  useEffect(() => {
    if (companyID) {
      dispatch(
        actions.branches.getAllData({
          customResource: 'company/branches',
          query: `?companyID=["${companyID}"]`,
        }),
      );
    } else {
      dispatch(
        actions.branches.getAllData({
          customResource: 'company/branches',
        }),
      );
    }
  }, [dispatch, companyID]);

  const handleSearch = throttle((e) => {
    if (companyID) {
      dispatch(
        actions.branches.getAllData({
          customResource: 'company/branches',
          query: `?companyID=["${companyID}"]${
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
    <Form.Item
      label={label}
      name={fieldName}
      rules={rules}
      wrapperCol={wrapperCol}
      labelCol={labelCol}
    >
      <Select
        mode={mode}
        onChange={onChange}
        placeholder={placehorder}
        style={style}
        onSearch={handleSearch}
        filterOption={false}
        showSearch
      >
        {branches?.map((e) => (
          <Select.Option key={e?.[PRIMARY_KEY]} value={e?.[PRIMARY_KEY]}>
            {e?.name}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
};

RestSelectBranch.propTypes = {
  fieldName: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  label: PropTypes.string,
  mode: PropTypes.string,
  onChange: PropTypes.func,
  placehorder: PropTypes.string,
  wrapperCol: PropTypes.object,
  companyID: PropTypes.string,
  rules: PropTypes.array,
  style: PropTypes.object,
  labelCol: PropTypes.object,
};

RestSelectBranch.defaultProps = {
  wrapperCol: { span: 24 },
  labelCol: { span: 24 },
  rules: [
    {
      required: true,
      message: 'Không được trông',
    },
  ],
};

export default RestSelectBranch;
