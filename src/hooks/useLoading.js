import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useLoading = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const ele = document.getElementById('ipl-progress-indicator');
    if (ele) {
      setTimeout(() => {
        // fade out
        ele.classList.add('available');
      }, 500);
      setTimeout(() => {
        // ele.outerHTML = '';
      }, 1500);
    }
  }, [dispatch]);
};

export default useLoading;
