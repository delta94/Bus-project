import React from 'react';
import RestCreate from 'components/common/RestCreate';
import { useSelector } from 'react-redux';
import { PRIMARY_KEY } from 'redux/utils/crudSlice';
import Form from './Form';

const Create = () => {
  const branch = useSelector((state) => state.branches.data);
  const formatSubmit = (values) => {
    return {
      ...values,
      companyId: branch?.companyID,
      branchId: branch?.[PRIMARY_KEY],
    };
  };
  return (
    <RestCreate
      resource="guides"
      initialValues={{
        order: 0,
      }}
      formatSubmit={formatSubmit}
      customResource="company/guides"
    >
      <Form />
    </RestCreate>
  );
};

export default Create;
