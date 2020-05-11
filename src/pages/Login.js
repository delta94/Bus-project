import React from 'react';
import LoginForm from 'containers/Auth/LoginForm';
import useAuth from 'hooks/useAuth';

const Login = () => {
  useAuth();
  return (
    <div className="h-screen flex flex-center" style={{ padding: 20 }}>
      <LoginForm />
    </div>
  );
};

export default Login;
