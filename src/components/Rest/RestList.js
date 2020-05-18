/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import MaterialBreadcrumb from 'components/common/MaterialBreadcrumb';
import PropTypes from 'prop-types';
import { DEFAULT_QUERY } from 'utils/url';
import actions from 'modules/actions';
import { useDispatch } from 'react-redux';
import useRouter from 'hooks/useRouter';
import { useTranslation } from 'react-i18next';

const RestList = ({ breadCrumbList, defaultQuery, table, resource }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { location, history, query } = useRouter();

  useEffect(() => {
    if (location.search) {
      dispatch(
        actions[resource].getAll({
          params: {
            ...query,
          },
        }),
      );
    } else {
      history.replace(defaultQuery);
    }
  }, [dispatch, location.search, history]);
  return (
    <>
      <MaterialBreadcrumb
        data={
          breadCrumbList || [{ path: '#', title: t(`${resource}.breadCrumb`) }]
        }
      />
      <div style={{ marginBottom: 115, marginTop: 19 }}>
        {React.createElement(table)}
      </div>
    </>
  );
};

RestList.propTypes = {
  breadCrumbList: PropTypes.array,
  table: PropTypes.any,
  resource: PropTypes.string,
  defaultQuery: PropTypes.string,
};

RestList.defaultProps = {
  defaultQuery: DEFAULT_QUERY,
};

export default RestList;
