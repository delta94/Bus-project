import RestCreate from '@/modules/common/RestCreate';
import React from 'react';
import RestInputNumber from '@/components/Rest/RestInputNumber';
import { moneyFomatter } from '@/utils/formatter';
import { useDispatch } from 'react-redux';
import actions from '@/modules/actions';
import useRouter from '@/hooks/useRouter';
import RestSelectUsers from './RestSelectUsers';

const Topup = () => {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const handleSubmit = (values) => {
    dispatch(
      actions.users.update({
        url: `/users/${values.id}/topup`,
        data: {
          amount: values.amount,
        },
      }),
    ).then(() => {
      dispatch(
        actions.users.getAll({
          params: {
            ...query,
          },
        }),
      );
    });
  };

  return (
    <RestCreate resource="users" customSubmit={handleSubmit}>
      <RestSelectUsers label="Tên" fieldName="id" />
      <RestInputNumber
        label="Số tiền"
        fieldName="amount"
        width={300}
        hasText
        formatter={moneyFomatter}
      />
    </RestCreate>
  );
};

export default Topup;
