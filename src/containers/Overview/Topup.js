import RestCreate from 'components/Rest/RestCreate';
import React from 'react';
import RestInputNumber from 'components/Rest/RestInputNumber';
import { moneyFomatter } from 'utils/formatter';
import { useDispatch } from 'react-redux';
import actions from 'redux/actions';
import useRouter from 'hooks/useRouter';
import RestSelectCards from './RestSelectCards';

const Topup = () => {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const handleSubmit = (values) => {
    dispatch(
      actions.cards.update({
        url: `/cards/${values.id}/topup`,
        data: {
          amount: values.amount,
        },
      }),
    ).then(() => {
      dispatch(
        actions.cards.getAll({
          params: {
            ...query,
          },
        }),
      );
    });
  };

  return (
    <RestCreate resource="cards" customSubmit={handleSubmit}>
      <RestSelectCards label="Tên" fieldName="id" />
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
