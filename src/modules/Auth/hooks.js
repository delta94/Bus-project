import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authLoadingSelector } from './selectors';
import { login } from './slice';

export const useAuthen = () => {
  const loading = useSelector(authLoadingSelector);
  const dispatch = useDispatch();
  const actions = useMemo(() => bindActionCreators({ login }, dispatch), [
    dispatch,
  ]);

  return useMemo(
    () => ({
      loading,
      actions,
    }),
    [loading, actions],
  );
};
