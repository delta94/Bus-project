/* eslint-disable react-hooks/exhaustive-deps */
import DataAnalytic from 'containers/Analytic/DataAnalytic';
import MaterialBreadcrumb from 'components/common/MaterialBreadcrumb';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useRouter from 'hooks/useRouter';
import { rangeToday } from 'utils/time';
import { getAnalytic } from 'redux/transactions/slice';
import { useTranslation } from 'react-i18next';

const Index = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { location, query, handlePushParams } = useRouter();
  useEffect(() => {
    if (location.search) {
      dispatch(
        getAnalytic({
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
        data={[{ path: '#', title: t(`analytic.breadCrumb`) }]}
      />
      <div style={{ marginBottom: 115, marginTop: 19 }}>
        <DataAnalytic />
      </div>
    </>
  );
};

Index.propTypes = {};

export default Index;
