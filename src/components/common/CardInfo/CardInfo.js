import React from 'react';
import { Card } from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from '../Box';

const StyledCard = styled(Card)`
  && {
    margin-bottom: 30px;
    height: 150px;
    &:hover {
      background: #f5f5f5;
    }
  }
`;

const CardInfo = ({ title, children, className, onClick }) => {
  return (
    <StyledCard className={className} onClick={onClick}>
      <h2 className="text-center text-header-table">{title}</h2>
      <Box mt="20px">{children}</Box>
    </StyledCard>
  );
};

CardInfo.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.any,
  onClick: PropTypes.func,
};

export default CardInfo;
