import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledExtraTitle = styled.p`
  font: normal 600 10px/12px 'Inter';
  color: #717791;
  opacity: 0.5;
  margin: 0 0 8px 0;
  text-transform: uppercase;
`;

const BreadcrumbItem = styled(Breadcrumb)`
  span:not(:last-child) {
    .ant-breadcrumb-link span {
      opacity: 0.8;
    }
  }
  .ant-breadcrumb-link span {
    &:hover {
      color: ${({ theme }) => theme.palette.primary};
    }
  }
`;

const MaterialBreadcrumb = ({ data, extraTitle }) => (
  <div>
    <StyledExtraTitle className="text-gray-250">{extraTitle}</StyledExtraTitle>
    <BreadcrumbItem
      separator=<span className="text-gray-250 text-600-18-22">/</span>
    >
      {data.map((e) => (
        <Breadcrumb.Item key={e.path}>
          <Link href={e.path} to={e.path}>
            <span className="text-gray-250 text-600-18-22">{e.title}</span>
          </Link>
        </Breadcrumb.Item>
      ))}
    </BreadcrumbItem>
  </div>
);

MaterialBreadcrumb.propTypes = {
  data: PropTypes.array,
  extraTitle: PropTypes.string,
};

export default MaterialBreadcrumb;
