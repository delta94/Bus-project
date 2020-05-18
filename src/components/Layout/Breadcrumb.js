/* eslint-disable import/named */
/* eslint-disable import/no-cycle */
import { Breadcrumb as AntdBreadcrumb } from 'antd';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BreadCrumbContext } from './PrivateLayout';

const BreadcrumbItem = styled(AntdBreadcrumb)`
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

const Breadcrumb = ({ style }) => {
  const { breadCrumbList } = useContext(BreadCrumbContext);
  return (
    <BreadcrumbItem style={style} separator=<span>/</span>>
      {breadCrumbList.map((e) => (
        <AntdBreadcrumb.Item key={e.path}>
          <Link href={e.path} to={e.path}>
            <span>{e.title}</span>
          </Link>
        </AntdBreadcrumb.Item>
      ))}
    </BreadcrumbItem>
  );
};

Breadcrumb.propTypes = {
  style: PropTypes.object,
};

export default Breadcrumb;
