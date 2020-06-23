import React from 'react';
import useAuth from 'hooks/useAuth';
import LoginForm from 'components/LoginForm';
import { Row } from 'antd';
import { useAuthen } from './hooks';

const Login = () => {
  useAuth();
  const { loading, actions } = useAuthen();
  const handleSubmit = (values) => {
    actions.login({
      data: values,
    });
  };
  return (
    <Row
      justify="center"
      align="middle"
      className="h-screen"
      style={{ padding: 20 }}
    >
      <LoginForm loading={loading === 'login'} handleSubmit={handleSubmit} />
    </Row>
  );
};

export default Login;
