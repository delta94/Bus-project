import RestInput from 'components/Rest/RestInput';
import React from 'react';
import RestInputNumber from 'components/Rest/RestInputNumber';
import { moneyFomatter } from 'utils/formatter';
import { validateRegex } from 'utils/validateUtils';

const Form = () => {
  return (
    <>
      <RestInput label="Email" fieldName="email" placeholder="Nhập email" />
      <RestInput
        label="Họ và tên"
        fieldName="name"
        placeholder="Nhập họ và tên"
      />
      <RestInput
        label="Số điện thoại"
        fieldName="phoneNumber"
        pattern={validateRegex.phone}
        placeholder="Nhập số điện thoại"
      />
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
