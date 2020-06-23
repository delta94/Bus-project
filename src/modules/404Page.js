/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { Result, Button, Row } from 'antd';
import useRouter from 'hooks/useRouter';

function NotFoundPage() {
  const { history } = useRouter();
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
          <Button type="primary" onClick={() => history.push('/')}>
            Back Home
          </Button>
        }
      />
    </Row>
  );
}

export default NotFoundPage;
