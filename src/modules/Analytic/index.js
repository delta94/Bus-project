/* eslint-disable react-hooks/exhaustive-deps */
import MaterialBreadcrumb from '@/components/common/MaterialBreadcrumb';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useRouter from '@/hooks/useRouter';
import { rangeToday } from '@/utils/time';
import { getAnalytic } from '@/modules/Transactions/slice';
import { useTranslation } from 'react-i18next';
import { analyticSelector } from '@/modules/Analytic/selecetors';
import DataAnalytic from '@/components/DataAnalytic';

const Index = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const data = useSelector(analyticSelector);
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
        <DataAnalytic data={data} loading={data.isFetching} />
      </div>
    </>
  );
};

Index.propTypes = {};

export default Index;
