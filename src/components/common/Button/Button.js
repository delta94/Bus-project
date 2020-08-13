import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  padding: 10px;
  backgroundcolor: ${({ primary }) => (primary ? '#380225' : '#fff')};
`;

export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  return (
    <StyledButton
      type="button"
      primary={primary}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </StyledButton>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
