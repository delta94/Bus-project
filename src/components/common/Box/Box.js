import styled from 'styled-components';
import { color, space, layout, flexbox, border, shadow } from 'styled-system';
import propTypes from '@styled-system/prop-types';

const Box = styled.div`
  cursor: ${({ cursor }) => cursor};
  ${color}
  ${space}
  ${layout}
  ${flexbox}
  ${border}
  ${shadow}
`;

Box.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.flexbox,
};

export default Box;
