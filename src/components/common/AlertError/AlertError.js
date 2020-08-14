/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ReactComponent as ErrorIcon } from 'assets/svg/error.svg';
import Icon from '@ant-design/icons';
import PropTypes from 'prop-types';
import Box from '../Box';
import Text from '../Text';

const AlertError = ({ text, style }) => {
  return (
    <Box
      style={style}
      display="flex"
      alignItems="center"
      className="bg-error border-l-4-solid-error"
    >
      <Icon component={ErrorIcon} style={{ marginLeft: 12, fontSize: 12 }} />
      <Text className="text-error text-14-18" m="14px 10px 14px 10px">
        {text}
      </Text>
    </Box>
  );
};

AlertError.propTypes = {
  text: PropTypes.any,
  style: PropTypes.object,
};

AlertError.defaultProps = {
  text: 'Không thành công',
};
export default AlertError;
