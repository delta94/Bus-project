import { convertObjToQueryParams } from 'utils/tools';
import { useHistory, useRouteMatch, useLocation } from 'react-router';
import { convertParamsToObject } from 'utils/url';

const usePushParams = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const location = useLocation();
  const handlePushParams = (params) => {
    const newParams = {
      ...convertParamsToObject(location.search),
      ...params,
    };
    history.push({
      pathname: match.url,
      search: convertObjToQueryParams(newParams),
    });
  };
  return { handlePushParams };
};

export default usePushParams;
