import React from 'react';
import LoginForm from 'modules/Auth/components/LoginForm';
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
