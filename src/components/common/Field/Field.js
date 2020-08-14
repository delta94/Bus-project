import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';
import Text from '../Text';

const Field = ({ title, value }) => {
  return (
    <Box display="flex" p="6px 0">
      <Text flex="1">{`${title}:`}</Text>
      <Text flex="2">{value}</Text>
    </Box>
  );
};

Field.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Field;
