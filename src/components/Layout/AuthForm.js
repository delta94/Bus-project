import React from 'react';
import FullLogo from '@/assets/images/fullLogo.png';
import PropTypes from 'prop-types';
import Box from '@/components/common/Box/Box';

const AuthForm = ({ children }) => {
  return (
    <Box
      p="40px 30px 20px 30px"
      bg="#fff"
      display="flex"
      flexDirection="column"
      className="shadow-2"
    >
      <img src={FullLogo} alt="cashbag" style={{ marginBottom: 41 }} />
      {children}
    </Box>
  );
};

AuthForm.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthForm;
