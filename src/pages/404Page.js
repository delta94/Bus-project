/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { Result, Button } from 'antd';
import useRouter from 'hooks/useRouter';

function NotFoundPage() {
  const { history } = useRouter();
  return (
    <div className="absolute h-screen inset-0 w-screen flex flex-center bg-white z-50">
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
    </div>
  );
}

export default NotFoundPage;
