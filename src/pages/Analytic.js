import DataAnalytic from 'components/Analytic/DataAnalytic';
import MaterialBreadcrumb from 'components/common/MaterialBreadcrumb';
import i18next from 'i18next';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import actions from 'redux/utils/actions';

const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.transactions.getAnalytic());
  }, [dispatch]);
  return (
    <>
      <MaterialBreadcrumb
        data={[{ path: '#', title: i18next.t(`analytic.breadCrumb`) }]}
      />
      <div style={{ marginBottom: 115, marginTop: 19 }}>
        <DataAnalytic />
      </div>
    </>
  );
};

Index.propTypes = {};

export default Index;
