import React from 'react';
import RestTextArea from 'components/common/RestTextArea';
import RestInputNumber from 'components/common/RestInputNumber';

const Form = () => {
  return (
    <>
      <RestTextArea label="Mô tả (Tiếng Việt)" fieldName={['desc', 'vi']} />
      <RestTextArea label="Mô tả (Tiếng Anh)" fieldName={['desc', 'en']} />
      <RestInputNumber label="Số thứ tự" fieldName="order" />
    </>
  );
};

Form.propTypes = {};

export default Form;
