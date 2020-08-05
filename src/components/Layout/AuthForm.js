import React from 'react';
import FullLogo from 'assets/images/fullLogo.png';
import PropTypes from 'prop-types';

const AuthForm = ({ children }) => {
  return (
    <div
      className="shadow-2 rounded-16 bg-white flex flex-col"
      style={{ padding: '40px 30px 20px 30px', width: 450 }}
    >
      <img src={FullLogo} alt="cashbag" style={{ marginBottom: 41 }} />
      {children}
    </div>
  );
};

AuthForm.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthForm;
