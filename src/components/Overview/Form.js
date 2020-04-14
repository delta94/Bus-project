import RestInput from 'components/common/RestInput';
import React from 'react';
import RestInputNumber from 'components/common/RestInputNumber';
import { moneyFomatter } from 'utils/formatter';

const Form = () => {
  return (
    <>
      <RestInput label="Email" fieldName="email" />
      <RestInput label="Họ và tên" fieldName="name" />
      <RestInputNumber
        label="Số tiền"
        fieldName="amount"
        width={300}
        hasText
        formatter={moneyFomatter}
      />
    </>
  );
};

Form.propTypes = {};

export default Form;
