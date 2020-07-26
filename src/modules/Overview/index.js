import { Card, Col, Row } from 'antd';
import MaterialBreadcrumb from 'components/common/MaterialBreadcrumb';
import React from 'react';
import { useTranslation } from 'react-i18next';
import TopClient from './TopClient';
import MonthChart from './MonthChart';
import PredictData from './PredictData';
import GenderChart from './GenderChart';

const Overview = () => {
  const { t } = useTranslation();

  return (
    <>
      <MaterialBreadcrumb
        data={[{ path: '#', title: t(`overview.breadCrumb`) }]}
      />
      <Row style={{ marginTop: 19 }} gutter={30}>
        <Col xs={24} md={10} style={{ marginBottom: 20 }}>
          <Card title="Top người dùng">
            <TopClient />
          </Card>
        </Col>
        <Col xs={24} md={14}>
          <Card title="Doanh Thu">
            <MonthChart />
          </Card>
        </Col>
      </Row>
      <Row style={{ marginBottom: 115, marginTop: 20 }} gutter={30}>
        <Col xs={24} md={10}>
          <GenderChart />
        </Col>
        <Col xs={24} md={14}>
          <PredictData />
        </Col>
      </Row>
    </>
  );
};

Overview.propTypes = {};

export default Overview;
