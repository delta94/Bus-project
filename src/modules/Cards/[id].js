import React from 'react';
import MaterialBreadcrumb from 'components/common/MaterialBreadcrumb';
import { useTranslation } from 'react-i18next';
import { Row, Col, Card } from 'antd';

const Detail = () => {
  const { t } = useTranslation();
  return (
    <>
      <MaterialBreadcrumb
        data={[{ path: '#', title: t(`cards.breadCrumb`) }]}
      />
      <Row style={{ marginBottom: 115, marginTop: 19 }} gutter={30}>
        <Col xs={24} md={8} style={{ marginBottom: 20 }}>
          <Card>Hello</Card>
        </Col>
        <Col xs={24} md={16}>
          <Card>Hello</Card>
        </Col>
      </Row>
    </>
  );
};

Detail.propTypes = {};

export default Detail;
