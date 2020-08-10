/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { Result, Button, Row } from 'antd';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <Row
      justify="center"
      align="middle"
      className="absolute h-screen inset-0 w-screen bg-white z-50"
    >
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link to="/" component={Button} type="primary">
            Back Home
          </Link>
        }
      />
    </Row>
  );
}

export default NotFoundPage;
