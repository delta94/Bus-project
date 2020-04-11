import React from 'react';
import LoginForm from 'components/common/LoginForm';
import useAuth from 'hooks/useAuth';

const Login = () => {
  useAuth();
  return (
    <div className="h-screen flex flex-center">
      <LoginForm />
    </div>
  );
};

export default Login;
