import styled, { css } from 'styled-components';
import { color, space, shadow, flexbox } from 'styled-system';

const Text = styled.div`
  ${({ bold }) =>
    bold &&
    css`
      font-weight: 600;
    `}
  ${({ pointer }) =>
    pointer &&
    css`
      cursor: pointer;
    `}
  ${color}
  ${space}
  ${flexbox}
  ${shadow}
`;

export default Text;
