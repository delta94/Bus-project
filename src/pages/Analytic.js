/* eslint-disable react-hooks/exhaustive-deps */
import DataAnalytic from 'components/Analytic/DataAnalytic';
import MaterialBreadcrumb from 'components/common/MaterialBreadcrumb';
import i18next from 'i18next';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import actions from 'redux/utils/actions';
import useRouter from 'hooks/useRouter';
import { rangeToday } from 'utils/time';

const Index = () => {
  const dispatch = useDispatch();
  const { location, query, handlePushParams } = useRouter();
  useEffect(() => {
    if (location.search) {
      dispatch(
        actions.transactions.getAnalytic({
          startTime: query.startTime,
          endTime: query.endTime,
        }),
      );
    } else {
      handlePushParams(rangeToday);
    }
  }, [query.startTime, query.endTime]);
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
