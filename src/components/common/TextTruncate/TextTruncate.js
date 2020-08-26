import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextTruncate = ({ element, line, text, ...props }) => {
  return React.createElement(
    styled(element)`
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${line};
      -webkit-box-orient: vertical;
    `,
    props,
    text,
  );
};

TextTruncate.propTypes = {
  element: PropTypes.string,
  line: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  text: PropTypes.string,
};

TextTruncate.defaultProps = {
  element: 'div',
  line: 1,
  text: '',
};

export default TextTruncate;
