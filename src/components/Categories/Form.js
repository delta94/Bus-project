import React from 'react';
import RestInput from 'components/common/RestInput';
import RestUploadImage from 'components/common/RestUploadImage';
import RestInputNumber from 'components/common/RestInputNumber';

const Form = () => {
  return (
    <>
      <RestInput
        label="Tên danh mục ( Tiếng việt ) "
        fieldName={['name', 'vi']}
      />
      <RestInput label="Tên Danh mục ( English )" fieldName={['name', 'en']} />
      <RestUploadImage
        label="Icon"
        fieldName="tempIcon"
        required={false}
        record="icon.sizes.sm.url"
      />
      <RestInputNumber
        label="Thứ tự"
        fieldName="order"
        labelCol={{ span: 24 }}
      />
    </>
  );
};

Form.propTypes = {};

export default Form;
