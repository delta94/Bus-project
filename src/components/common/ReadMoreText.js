/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ReadMore = styled.span`
  cursor: pointer;
  color: #286da8;
  &:hover {
    color: #4591d3;
  }
`;

const ReadMoreText = ({ text }) => {
  const [isToggle, setToggle] = useState(false);
  if (!isToggle && text?.length > 200) {
    return (
      <div>
        {`${text?.split(' ').slice(0, 30).join(' ')}...`}
        <ReadMore onClick={() => setToggle(true)}>xem thêm</ReadMore>
      </div>
    );
  }
  return <div onClick={() => setToggle(false)}>{text}</div>;
};

ReadMoreText.propTypes = {
  text: PropTypes.string,
};

export default ReadMoreText;
