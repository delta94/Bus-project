/* eslint-disable import/named */
/* eslint-disable react-hooks/exhaustive-deps */
import { BreadCrumbContext } from '@/components/Layout/PrivateLayout';
import { useContext, useEffect } from 'react';

const useBreadCrumb = (data) => {
  const { setBreadCrumbList } = useContext(BreadCrumbContext);
  useEffect(() => {
    setBreadCrumbList(data);
  }, []);
};

export default useBreadCrumb;
