import RestInput from '@/components/Rest/RestInput';
import React from 'react';
import RestInputNumber from '@/components/Rest/RestInputNumber';
import { moneyFomatter } from '@/utils/formatter';
import RestSelectDrivers from './RestSelectDrivers';

const Form = () => {
  return (
    <>
      <RestInput label="Tiêu đề" fieldName="title" placeholder="Nhập title" />
      <RestInput
        label="Địa chỉ"
        fieldName="location"
        placeholder="Nhập địa chỉ"
      />
      <RestInputNumber
        label="Giá"
        fieldName="amount"
        width={300}
        hasText
        formatter={moneyFomatter}
      />
      <RestSelectDrivers label="Driver" fieldName="id" />
    </>
  );
};

Form.propTypes = {};

export default Form;
