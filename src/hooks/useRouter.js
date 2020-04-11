import {
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';
import { useMemo } from 'react';
import { convertParamsToObject } from 'utils/url';
import { convertObjToQueryParams } from 'utils/tools';

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
          ...convertParamsToObject(location.search),
          ...params,
        };
        history.push({
          pathname: match.url,
          search: convertObjToQueryParams(newParams),
        });
      },
      resetParams: (params) => {
        const newParams = {
          ...params,
        };
        history.push({
          pathname: match.url,
          search: convertObjToQueryParams(newParams),
        });
      },
      removeParams: (keys) => {
        const newParams = convertParamsToObject(location.search);
        keys.forEach((key) => {
          delete newParams[key];
        });

        history.push({
          pathname: match.url,
          search: convertObjToQueryParams(newParams),
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
        ...convertParamsToObject(location.search), // Convert string to object
        ...params,
      },
      match,
      location,
      history,
    };
  }, [history, location, params, match]);
};

export default useRouter;
