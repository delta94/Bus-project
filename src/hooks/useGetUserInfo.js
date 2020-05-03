import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInfo } from 'redux/auth/slice';

const useGetUserInfo = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    isAuth && dispatch(getInfo());
  }, [dispatch, isAuth]);
};

export default useGetUserInfo;
