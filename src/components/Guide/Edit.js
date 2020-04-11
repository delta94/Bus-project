/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import RestEdit from 'components/common/RestEdit';
import { useSelector, useDispatch } from 'react-redux';
import { PRIMARY_KEY } from 'redux/utils/crudSlice';
import actions from 'redux/utils/actions';
import useRouter from 'hooks/useRouter';
import Form from './Form';

const Edit = () => {
  const branch = useSelector((state) => state.companies.data);
  const { routerState } = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      actions.guides.getDataById({
        customResource: `company/guides`,
        id: routerState?.id,
      }),
    );
  }, [dispatch, routerState]);

  const formatSubmit = (values) => {
    return {
      ...values,
      companyId: branch?.companyID,
      branchId: branch?.[PRIMARY_KEY],
    };
  };
  return (
    <RestEdit
      resource="guides"
      formatSubmit={formatSubmit}
      customResource="company/guides"
    >
      <Form />
    </RestEdit>
  );
};

export default Edit;
