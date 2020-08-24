import styled, { css } from 'styled-components';
import {
  color,
  space,
  layout,
  flexbox,
  border,
  shadow,
  grid,
} from 'styled-system';
import propTypes from '@styled-system/prop-types';
import PropTypes from 'prop-types';

const Box = styled.div`
  ${({ circle }) =>
    circle &&
    css`
      border-radius: 50%;
    `}
  ${({ pointer }) =>
    pointer &&
    css`
      cursor: pointer;
    `}
  ${color}
  ${space}
  ${layout}
  ${flexbox}
  ${border}
  ${shadow}
  ${grid}
`;

Box.propTypes = {
  pointer: PropTypes.bool,
  circle: PropTypes.bool,
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.flexbox,
};

Box.defaultProps = {
  pointer: false,
  circle: false,
};

export default Box;
