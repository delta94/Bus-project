import React from 'react';
import RestCreate from 'components/common/RestCreate';
import { omit } from 'lodash';
import Form from './Form';

const Create = () => {
  const formatSubmit = (values) => {
    return {
      ...omit(values, 'tempIcon'),
      ...(values.tempIcon && {
        icon: {
          // eslint-disable-next-line no-underscore-dangle
          _id: values.tempIcon._id,
          sizes: {
            sm: {
              width:
                values.tempIcon.file.response.data?.dimensions?.small?.width,
              height:
                values.tempIcon.file.response.data?.dimensions?.small?.height,
              url: values.tempIcon.file.response?.data?.url,
            },
            md: {
              width:
                values.tempIcon.file.response?.data?.dimensions?.medium?.width,
              height:
                values.tempIcon.file.response?.data?.dimensions?.medium?.height,
              url: values.tempIcon.file.response?.data?.urlMd,
            },
          },
        },
      }),
    };
  };
  return (
    <RestCreate
      resource="categories"
      formatSubmit={formatSubmit}
      customResource="company/categories"
    >
      <Form />
    </RestCreate>
  );
};

export default Create;
