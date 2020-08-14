/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ReactComponent as ErrorIcon } from 'assets/svg/error.svg';
import Icon from '@ant-design/icons';
import PropTypes from 'prop-types';

const AlertError = ({ text, style }) => {
  return (
    <div
      style={style}
      className="bg-error border-l-4-solid-error flex items-center"
    >
      <Icon component={ErrorIcon} style={{ marginLeft: 12, fontSize: 12 }} />
      <p
        className="text-error text-14-18 inline-block"
        style={{ margin: '14px 10px 14px 10px' }}
      >
        {text}
      </p>
    </div>
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
