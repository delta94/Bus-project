/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import actions from 'redux/utils/actions';
import { useDispatch } from 'react-redux';
import useRouter from 'hooks/useRouter';
import RestEdit from 'components/common/RestEdit';
import RestSwitch from 'components/common/RestSwitch';
import { omit } from 'lodash';
import Form from './Form';

const Edit = () => {
  const dispatch = useDispatch();
  const { routerState } = useRouter();
  useEffect(() => {
    dispatch(
      actions.categories.getDataById({
        customResource: `company/categories`,
        id: routerState?.id,
      }),
    );
  }, [dispatch]);

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
    <RestEdit
      resource="categories"
      formatSubmit={formatSubmit}
      customResource="company/categories"
    >
      <Form />
      <RestSwitch
        label="Trạng thái"
        fieldName="active"
        record="active"
        required={false}
      />
    </RestEdit>
  );
};

export default Edit;
