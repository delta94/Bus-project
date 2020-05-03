import RestCreate from 'components/Rest/RestCreate';
import React from 'react';
import Form from './Form';

const Create = () => {
  return (
    <RestCreate resource="cards">
      <Form />
    </RestCreate>
  );
};

export default Create;
