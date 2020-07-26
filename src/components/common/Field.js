import React from 'react';
import PropTypes from 'prop-types';

const Field = ({ title, value }) => {
  return (
    <div className="flex" style={{ padding: '6px 0' }}>
      <span style={{ flex: 1 }}>{`${title}:`}</span>
      <span style={{ flex: 2 }}>{value}</span>
    </div>
  );
};

Field.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Field;
