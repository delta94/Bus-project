/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import actions from 'redux/utils/actions';
import { useDispatch, useSelector } from 'react-redux';
import useRouter from 'hooks/useRouter';
import RestEdit from 'components/common/RestEdit';
import { omit } from 'lodash';
import { PRIMARY_KEY } from 'redux/utils/crudSlice';
import FormEdit from './FormEdit';

const Edit = () => {
  const dispatch = useDispatch();
  const { routerState, location } = useRouter();

  const company = useSelector((state) => state.companies.data);
  const customSubmit = (values) => {
    dispatch(
      actions.staff.customData({
        method: 'PUT',
        prefix: 'admin/user',
        customResource: 'crm-staffs',
        id: routerState?.id,
        customURL: 'https://svc.cashbagmain.com/',
        data: {
          ...omit(values, 'tempAvartar'),
          ...(values.tempAvartar && {
            avatar: values.tempAvartar.file.response.data,
          }),
          company: {
            ...routerState?.data?.company,
            ...values.company,
            active: routerState?.data?.company?.active,
          },
        },
      }),
    ).then(() => {
      dispatch(
        actions.staff.getAllData({
          customResource: 'crm-staffs',
          query: `${location.search}&company=${company?.[PRIMARY_KEY]}`,
          customURL: 'https://svc.cashbagmain.com/',
          prefix: 'admin/user',
        }),
      );
    });
  };

  return (
    <RestEdit
      resource="staff"
      customSubmit={customSubmit}
      initialValues={{
        ...routerState?.data,
        company: {
          ...routerState?.data?.company,
          branches: routerState?.data?.company?.branches?.map((e) => e._id),
        },
      }}
    >
      <FormEdit />
    </RestEdit>
  );
};

export default Edit;
