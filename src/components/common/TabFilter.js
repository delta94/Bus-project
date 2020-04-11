import { Col, Row, Select } from 'antd';
import useRouter from 'hooks/useRouter';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import DateFilter from './DateFilter';
import FilterTabPane from './FilterTabPane';

const { Option } = Select;

const StyledSelect = styled(Select)`
  && {
    width: 240px;
    height: 48px;
    margin: 0 16px 0 0;
    font: normal 600 14px/17px 'Inter';
    color: #212121;
    .ant-select-open,
    .ant-select-selection {
      border: none;
      box-shadow: none;
      background: ${(props) => (props.isUserTab ? '#fafafa' : '#ffffff')};
    }
  }
`;

const TabFilter = ({ isUserTab, isUserPage }) => {
  const { query, handlePushParams } = useRouter();
  const handleSelect = (e) => {
    handlePushParams({ status: e });
  };
  return (
    <div className="mt-19">
      <Row>
        <Col xs={12}>
          <FilterTabPane />
        </Col>
        <Col xs={12}>
          <div className="flex justify-end">
            {!isUserPage && (
              <StyledSelect
                defaultValue={query.status || 'all'}
                isUserTab={isUserTab}
                onChange={handleSelect}
              >
                <Option value="all">Tất cả</Option>
                <Option value="pending">Chờ duyệt</Option>
                <Option value="approved">Đã duyệt</Option>
                <Option value="cashback">Hoàn tiền</Option>
                <Option value="rejected">Đã huỷ</Option>
                <Option value="notRejected">Không bao gồm huỷ</Option>
              </StyledSelect>
            )}
            <DateFilter isUserTab={isUserTab} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

TabFilter.propTypes = {
  isUserTab: PropTypes.bool,
  isUserPage: PropTypes.bool,
};

TabFilter.defaultProps = {
  isUserTab: false,
  isUserPage: false,
};

export default TabFilter;
