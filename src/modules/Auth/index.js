import React from 'react';
import useAuth from 'hooks/useAuth';
import LoginForm from 'components/LoginForm';
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
    <div className="h-screen flex flex-center" style={{ padding: 20 }}>
      <LoginForm loading={loading === 'login'} handleSubmit={handleSubmit} />
    </div>
  );
};

export default Login;
