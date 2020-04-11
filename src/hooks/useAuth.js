import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useRouter from './useRouter';

const useAuth = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const { history } = useRouter();

  useEffect(() => {
    if (isAuth) {
      history.replace('/');
    }
  }, [history, isAuth]);
};

export default useAuth;
