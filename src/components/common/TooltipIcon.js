/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Tooltip } from 'antd';
import PropTypes from 'prop-types';

const TooltipIcon = ({ title, icon, className, style, onClick }) => {
  return (
    <Tooltip title={title} className="cursor-pointer">
      {React.createElement(icon, {
        style,
        onClick,
        className,
      })}
    </Tooltip>
  );
};

TooltipIcon.propTypes = {
  icon: PropTypes.any,
  title: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export default TooltipIcon;
