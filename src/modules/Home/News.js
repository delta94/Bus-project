/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { CalendarOutlined, EyeOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import Box from 'components/common/Box';
import { formatDate } from '../../utils/textUtils';

export const Title = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const News = ({ src }) => {
  return (
    <>
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
      <Box display="grid" gridGap={30} gridTemplateColumns="repeat(3, 1fr)">
        {src.map((e, index) => (
          <Box pointer key={String(index)}>
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
            <Box
              display="flex"
              justifyContent="space-between"
              borderTop="1px solid #f2f2f2"
              p="5px"
            >
              <span>
                <CalendarOutlined style={{ marginRight: 5 }} />
                {formatDate(e.createdAt)}
              </span>
              <span>
                <EyeOutlined style={{ marginRight: 5 }} />
                {`${e.totalView} lượt xem`}
              </span>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

News.propTypes = {};

export default News;
