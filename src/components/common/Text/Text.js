import styled from 'styled-components';
import { color, space, shadow, flexbox, compose } from 'styled-system';

const Text = styled('p')(compose(color, space, shadow, flexbox));

export default Text;
