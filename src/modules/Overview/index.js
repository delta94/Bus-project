import { Card, Col, Row } from 'antd';
import MaterialBreadcrumb from 'components/common/MaterialBreadcrumb';
import React from 'react';
import { useTranslation } from 'react-i18next';
import TopClient from './TopClient';

const Overview = () => {
  const { t } = useTranslation();

  return (
    <>
      <MaterialBreadcrumb
        data={[{ path: '#', title: t(`overview.breadCrumb`) }]}
      />
      <Row style={{ marginBottom: 115, marginTop: 19 }} gutter={30}>
        <Col xs={24} md={10} style={{ marginBottom: 20 }}>
          <Card title="Top người dùng">
            <TopClient />
          </Card>
        </Col>
        <Col xs={24} md={14}>
          <Card>Hello</Card>
        </Col>
      </Row>
    </>
  );
};

Overview.propTypes = {};

export default Overview;
