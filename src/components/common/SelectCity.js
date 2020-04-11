import React from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types';
import { getCitys } from 'utils/city';

const { Option } = Select;

const SelectCity = ({ defaultValue }) => {
  return (
    <Select showSearch defaultValue={defaultValue}>
      {getCitys()
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((e) => (
          <Option key={e.name}>{e.name}</Option>
        ))}
    </Select>
  );
};

SelectCity.propTypes = {
  defaultValue: PropTypes.string,
};

export default SelectCity;
