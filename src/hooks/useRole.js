import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useRouter from './useRouter';

const useRole = () => {
  const data = useSelector((state) => state.auth.data);
  const { history } = useRouter();

  useEffect(() => {
    if (data.role === 'USER') {
      history.replace('/info');
    }
  }, [data.role, history]);
};

useRole.propTypes = {};

export default useRole;
