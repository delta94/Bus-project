import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'redux/utils/actions';

const useGetUserInfo = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    isAuth && dispatch(actions.auth.getInfo());
  }, [dispatch, isAuth]);
};

export default useGetUserInfo;
