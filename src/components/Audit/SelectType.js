import React, { useEffect } from 'react';
import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'redux/utils/actions';
import useRouter from 'hooks/useRouter';
import PropTypes from 'prop-types';

const { Option } = Select;

const SelectType = ({ style }) => {
  const dispatch = useDispatch();
  const { query, handlePushParams } = useRouter();

  useEffect(() => {
    dispatch(actions.audit.getType());
  }, [dispatch]);
  const { type } = useSelector((state) => state.audit.data);

  const handleSelect = (e) => {
    handlePushParams({ type: e === 'all' ? '' : e });
  };

  return (
    <Select
      onChange={handleSelect}
      value={query?.type || 'all'}
      style={{ width: 200, ...style }}
    >
      <Option key="all">Event Type</Option>
      {type?.map((e) => (
        <Option key={e}>{e}</Option>
      ))}
    </Select>
  );
};

SelectType.propTypes = {
  style: PropTypes.object,
};

export default SelectType;
