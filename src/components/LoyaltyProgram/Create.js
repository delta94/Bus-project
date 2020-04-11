import React from 'react';
import RestCreate from 'components/common/RestCreate';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'redux/utils/actions';
import { PRIMARY_KEY } from 'redux/utils/crudSlice';
import Form from './Form';

const Create = () => {
  const dispatch = useDispatch();
  const company = useSelector((state) => state.companies.data);
  const handleSubmit = (values) => {
    dispatch(
      actions.companies.createLoyaltyProgram({
        customResource: `company/companies/${company?.[PRIMARY_KEY]}/loyalty-programs`,
        data: {
          ...values,
          milestones: [
            {
              [PRIMARY_KEY]: 'member',
              ...values.milestones[0],
            },
            {
              [PRIMARY_KEY]: 'silver',
              ...values.milestones[1],
            },
            {
              [PRIMARY_KEY]: 'gold',
              ...values.milestones[2],
            },
            {
              [PRIMARY_KEY]: 'platinum',
              ...values.milestones[3],
            },
          ],
        },
      }),
    );
  };

  return (
    <RestCreate
      resource="companies"
      customSubmit={handleSubmit}
      initialValues={{
        type: 'cashbackPerBill',
        applyFor: {
          type: 'all',
        },
        milestones: [
          {
            [PRIMARY_KEY]: 'member',
            cashback: {
              type: 'percent',
            },
          },
          {
            [PRIMARY_KEY]: 'silver',
            cashback: {
              type: 'percent',
            },
          },
          {
            [PRIMARY_KEY]: 'gold',
            cashback: {
              type: 'percent',
            },
          },
          {
            [PRIMARY_KEY]: 'platinum',
            cashback: {
              type: 'percent',
            },
          },
        ],
      }}
    >
      <Form />
    </RestCreate>
  );
};

export default Create;
