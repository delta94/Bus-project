import React, { lazy, Suspense } from 'react';
import Loading from 'components/common/Loading';

const loadable = (importFunc, { fallback } = { fallback: <Loading /> }) => {
  const LazyComponent = lazy(() => importFunc);

  return (props) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default loadable;
