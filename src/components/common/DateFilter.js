import { DatePicker } from 'antd';
import useRouter from 'hooks/useRouter';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledDatePicker = styled(DatePicker.RangePicker)`
  width: 280px;
  height: 48px;
  .ant-input:placeholder-shown,
  .ant-calendar-picker-input.ant-input {
    background: ${(props) => (props.isUserTab ? '#FAFAFA' : '#ffffff')};
    font: normal 600 14px/17px 'Inter';
    color: #212121;
  }
  .ant-calendar-range-picker-input {
    font: normal 600 14px/17px 'Inter';
    color: #212121;
  }
  .ant-calendar-range-picker-separator {
    vertical-align: baseline;
    font: normal 600 14px/17px 'Inter';
    color: #212121;
  }
  .ant-input:focus,
  .ant-calendar-picker-input:hover,
  .ant-calendar-picker:focus.ant-calendar-picker-input:not(.ant-input-disabled) {
    border: none;
  }
`;

const disabledDate = (current) => {
  if (current) {
    return (
      current < moment().subtract(6, 'month').endOf('day') ||
      current > moment().add(6, 'month').endOf('day')
    );
  }
  return false;
};

const DateFilter = ({ isUserTab }) => {
  const { query, handlePushParams } = useRouter();
  const handleChange = (e) => {
    handlePushParams({
      start: new Date(e[0]).toISOString(),
      end: new Date(e[1]).toISOString(),
    });
  };
  return (
    <div className="flex justify-end">
      <StyledDatePicker
        isUserTab={isUserTab}
        value={[
          moment(new Date(query.start), 'DD/MM/YYYY'),
          moment(new Date(query.end), 'DD/MM/YYYY'),
        ]}
        disabledDate={disabledDate}
        format="DD/MM/YYYY"
        separator="-"
        onChange={handleChange}
      />
    </div>
  );
};

DateFilter.propTypes = {
  isUserTab: PropTypes.bool,
};

DateFilter.defaultProps = {
  isUserTab: false,
};

export default DateFilter;
