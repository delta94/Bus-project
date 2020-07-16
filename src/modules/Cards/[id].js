import React, { useEffect } from 'react';
import MaterialBreadcrumb from 'components/common/MaterialBreadcrumb';
import { useTranslation } from 'react-i18next';
import { Row, Col, Card } from 'antd';
import useRouter from 'hooks/useRouter';
import { useDispatch } from 'react-redux';
import actions from '../actions';

const Detail = () => {
  const { t } = useTranslation();
  const { query } = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    const promise = dispatch(
      actions.cards.getById({
        id: query.id,
      }),
    );
    return () => {
      promise.abort();
    };
  }, [dispatch, query.id]);
  return (
    <>
      <MaterialBreadcrumb
        data={[{ path: '#', title: t(`cards.breadCrumb`) }]}
      />
      <Row style={{ marginBottom: 115, marginTop: 19 }} gutter={30}>
        <Col xs={24} md={8} style={{ marginBottom: 20 }}>
          <Card>Comming soon</Card>
        </Col>
        <Col xs={24} md={16}>
          <Card>Comming soon</Card>
        </Col>
      </Row>
    </>
  );
};

Detail.propTypes = {};

export default Detail;
