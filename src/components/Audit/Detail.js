/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import useRouter from 'hooks/useRouter';
import ReactJson from 'react-json-view';
import { Empty } from 'antd';

const Detail = () => {
  const { routerState } = useRouter();
  if (routerState?.data) {
    return (
      <div style={{ marginBottom: 20 }}>
        <ReactJson src={routerState?.data} />
      </div>
    );
  }
  return <Empty />;
};

Detail.propTypes = {};

export default Detail;
