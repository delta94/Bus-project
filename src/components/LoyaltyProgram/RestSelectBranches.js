/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { Form, Select } from 'antd';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'redux/utils/actions';
import { debounce } from 'lodash';
import { PRIMARY_KEY } from 'redux/utils/crudSlice';
import { hashSearchParams } from 'utils/url';

const RestSelectBranches = ({
  fieldName,
  label,
  required,
  message,
  mode,
  except,
  onChange,
  wrapperCol,
  labelCol,
}) => {
  const company = useSelector((state) => state.companies.data);
  const branches = useSelector((state) => state.branches.allData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      actions.branches.getAllData({
        customResource: `company/companies/${company[PRIMARY_KEY]}/branches`,
      }),
    );
  }, [dispatch]);

  const handleSearch = debounce((e) => {
    dispatch(
      actions.branches.getAllData({
        customResource: `company/companies/${company[PRIMARY_KEY]}/branches`,
        query: `?q=${hashSearchParams('name', e)}`,
      }),
    );
  }, 500);
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
      labelCol={labelCol}
    >
      <Select
        mode={mode}
        onChange={onChange}
        onSearch={handleSearch}
        filterOption={false}
      >
        {branches
          ?.filter((branch) => !except.includes(branch?.[PRIMARY_KEY]))
          ?.map((e) => (
            <Select.Option key={e?.[PRIMARY_KEY]} value={e?.[PRIMARY_KEY]}>
              {e?.name}
            </Select.Option>
          ))}
      </Select>
    </Form.Item>
  );
};

RestSelectBranches.propTypes = {
  fieldName: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  label: PropTypes.string,
  required: PropTypes.bool,
  message: PropTypes.string,
  mode: PropTypes.string,
  onChange: PropTypes.func,
  except: PropTypes.array,
  labelCol: PropTypes.object,
  wrapperCol: PropTypes.object,
};

RestSelectBranches.defaultProps = {
  required: true,
  message: 'Không hợp lệ',
  except: [],
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

export default RestSelectBranches;
