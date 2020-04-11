import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'redux/utils/actions';
import RestEdit from 'components/common/RestEdit';
import { PRIMARY_KEY } from 'redux/utils/crudSlice';
import Form from './Form';

const Edit = () => {
  const dispatch = useDispatch();
  const company = useSelector((state) => state.companies.data);
  const handleSubmit = (values) => {
    dispatch(
      actions.companies.editLoyaltyProgram({
        customResource: `company/loyalty-programs/${company?.loyaltyProgram?.[PRIMARY_KEY]}`,
        data: {
          ...company.loyaltyProgram,
          ...values,
          company: company?.[PRIMARY_KEY],
          milestones: [
            {
              [PRIMARY_KEY]: 'member',
              value: values.milestones.value || null,
              ...values.milestones[0],
            },
            {
              [PRIMARY_KEY]: 'silver',
              value: values.milestones.value || null,
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
    <RestEdit
      resource="companies"
      customSubmit={handleSubmit}
      initialValues={{
        ...company?.loyaltyProgram,
        applyFor: {
          ...company?.loyaltyProgram?.applyFor,
          branches: company?.loyaltyProgram?.applyFor?.branches || [],
          except: company?.loyaltyProgram?.applyFor?.except || [],
        },
      }}
    >
      <Form />
    </RestEdit>
  );
};

export default Edit;
