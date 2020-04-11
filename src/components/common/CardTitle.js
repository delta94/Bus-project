import React from 'react';
import PropTypes from 'prop-types';

const CardTitle = ({ title, subTitle, prefix }) => {
  return (
    <header>
      <div className="flex text-600-18-22 text-header-table">
        {prefix}
        <span>{title}</span>
      </div>
      <div className="text-secondary text-500-12px-22px">{subTitle}</div>
    </header>
  );
};
CardTitle.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  prefix: PropTypes.any,
};

export default CardTitle;
