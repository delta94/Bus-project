import qs from 'query-string';
import { useMemo } from 'react';
import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from 'react-router-dom';

const useRouter = () => {
  const params = useParams();
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  return useMemo(() => {
    return {
      push: history.push,
      replace: history.replace,
      back: history.goBack,
      routerState: location.state,
      handlePushParams: (params) => {
        const newParams = {
          ...qs.parse(location.search),
          ...params,
        };
        history.push({
          pathname: match.url,
          search: qs.stringify(newParams, {
            skipEmptyString: true,
          }),
        });
      },
      resetParams: (params) => {
        const newParams = {
          ...params,
        };
        history.push({
          pathname: match.url,
          search: qs.stringify(newParams, {
            skipEmptyString: true,
          }),
        });
      },
      removeParams: (keys) => {
        const newParams = qs.parse(location.search);
        keys.forEach((key) => {
          delete newParams[key];
        });

        history.push({
          pathname: match.url,
          search: qs.stringify(newParams, {
            skipEmptyString: true,
          }),
        });
      },
      handlePushModal: (modal, data) => {
        history.replace({
          pathname: match.url,
          search: location.search,
          hash: modal,
          state: {
            ...location.state,
            ...data,
          },
        });
      },
      pathname: location.pathname,
      query: {
        ...qs.parse(location.search),
        ...params,
      },
      match,
      location,
      history,
    };
  }, [history, location, params, match]);
};

export default useRouter;
