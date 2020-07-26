/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { CalendarOutlined, EyeOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { formatDate } from '../../utils/textUtils';

export const StyledNews = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
`;

export const Title = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const News = ({ src }) => {
  return (
    <div>
      <h1
        style={{
          marginBottom: 10,
          fontSize: 20,
          textTransform: 'uppercase',
          color: '#303030',
        }}
      >
        Tin tức
      </h1>
      <StyledNews>
        {src.map((e) => (
          <div className="cursor-pointer">
            <img
              src={e.thumbnail}
              alt=""
              className="w-full"
              style={{ height: 300 }}
            />
            <Tooltip title={e.title}>
              <Title
                className="hover:text-primary cursor-pointer"
                style={{ marginTop: 10 }}
              >
                {e.title}
              </Title>
            </Tooltip>
            <div
              style={{ borderTop: '1px solid #f2f2f2', padding: 5 }}
              className="flex justify-between"
            >
              <span>
                <CalendarOutlined style={{ marginRight: 5 }} />
                {formatDate(e.createdAt)}
              </span>
              <span>
                <EyeOutlined style={{ marginRight: 5 }} />
                {`${e.totalView} lượt xem`}
              </span>
            </div>
          </div>
        ))}
      </StyledNews>
    </div>
  );
};

News.propTypes = {};

export default News;
