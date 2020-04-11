/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-unused-vars */
import { Card, Row, Timeline, Col, Tag, Empty } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import FieldItem from 'components/common/FieldItem';
import { formatNumberToMoney, formatDate } from 'utils/textUtils';
import { STATUS } from 'components/Transactions/utils';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isEmpty } from 'lodash';

const Detail = ({ data }) => {
  const audit = useSelector((state) => state.audit.allData);
  return (
    <Row gutter={20}>
      <Col span={8}>
        <Card title="Thông tin">
          <FieldItem
            name="Công ty"
            value=<Link to={`/companies/${data?.companyID}`}>
              {data?.companyName}
            </Link>
          />
          <FieldItem
            name="Chi nhánh"
            value=<Link to={`/branches/${data?.branchID}`}>
              {data?.branchName}
            </Link>
          />
          <FieldItem
            name="Số tiền hoàn"
            value={formatNumberToMoney(data?.amount)}
          />
          <FieldItem
            name="Số tiền còn lại"
            value={formatNumberToMoney(data?.currentAmount)}
          />
          <FieldItem
            name="Trạng thái"
            value=<Tag color={STATUS?.[data.status]?.color}>
              {STATUS?.[data.status]?.text}
            </Tag>
          />
        </Card>
      </Col>
      <Col span={16}>
        <Card title="Lịch sử hoạt động">
          {isEmpty(audit) ? (
            <Empty />
          ) : (
            <Timeline>
              {audit?.map((item, index) => (
                <Timeline.Item key={String(index)}>
                  <p>{item.message}</p>
                  <p>{formatDate(item.time)}</p>
                </Timeline.Item>
              ))}
            </Timeline>
          )}
        </Card>
      </Col>
    </Row>
  );
};

Detail.propTypes = {
  data: PropTypes.object,
};

export default Detail;
