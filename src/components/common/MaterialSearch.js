/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export const StyledMaterialSearch = styled(Input.Search)`
  && {
    .ant-input-suffix {
      display: none;
    }
  }
`;

const MaterialSearch = ({
  defaultValue,
  prefix,
  placeholder,
  style,
  pattern,
  ...rest
}) => (
  <StyledMaterialSearch
    defaultValue={defaultValue}
    prefix={prefix}
    style={style}
    pattern={pattern}
    placeholder={placeholder}
    {...rest}
  />
);

MaterialSearch.propTypes = {
  prefix: PropTypes.any,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  pattern: PropTypes.any,
  style: PropTypes.object,
};

MaterialSearch.defaultProps = {
  placeholder: 'Tìm kiếm theo tên',
  prefix: (
    <SearchOutlined
      type="search"
      style={{
        color: '#717791',
      }}
    />
  ),
};

export default MaterialSearch;
