import React from 'react';
import { Row, notification } from 'antd';
import { unwrapResult } from '@reduxjs/toolkit';
import SignUpForm from '../../components/SignUpForm';
import { useAuthen } from './hooks';
import useRouter from '../../hooks/useRouter';

const SignUp = () => {
  const router = useRouter();
  const { loading, actions } = useAuthen();
  const handleSubmit = (values) => {
    actions
      .signup({
        data: values,
      })
      .then(unwrapResult)
      .then(() => {
        notification.success({
          message: 'Đăng ký thành công',
        });
        router.push('/login');
      });
  };
  return (
    <Row
      justify="center"
      align="middle"
      className="h-screen"
      style={{ padding: 20 }}
    >
      <SignUpForm handleSubmit={handleSubmit} loading={loading === 'signup'} />
    </Row>
  );
};

export default SignUp;
