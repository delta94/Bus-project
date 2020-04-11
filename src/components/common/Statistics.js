import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const StyledStatistics = styled.div`
  height: 150px;
  width: 100%;
  display: grid;
  border-top: 1px solid #e9e9e9;
  grid-template-columns: ${(props) => `repeat(${props.length}, 1fr)`};
`;

StyledStatistics.Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #e9e9e9;
  &:last-child {
    border-right: none;
  }
`;

const Statistics = ({ data }) => {
  return (
    <StyledStatistics length={data.length}>
      {data.map((e, index) => {
        return (
          <StyledStatistics.Item key={String(index)}>
            <h2
              className="text-header-table text-500-14-16"
              style={{ marginBottom: 14 }}
            >
              {e.name}
            </h2>
            <p className="text-600-30-36 text-statistic-value">{e.value}</p>
          </StyledStatistics.Item>
        );
      })}
    </StyledStatistics>
  );
};

Statistics.propTypes = {
  data: PropTypes.array,
};

Statistics.defaultProps = {};

export default Statistics;
