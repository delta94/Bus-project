import React, { useState, useRef } from 'react';
import { Tooltip, Button, Spin } from 'antd';
import Icon from '@ant-design/icons';
import { ReactComponent as ExcelIcon } from 'assets/svg/excel.svg';
import PropTypes from 'prop-types';
import { CSVLink } from 'react-csv';
import request from 'api/request';
import { showError } from 'redux/utils/exception';

const RestExportExcel = ({ resource, style }) => {
  const csvLink = useRef();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(null);
  const fetchData = async () => {
    try {
      setLoading('exportExcel');
      const res = await request({
        url: resource,
        params: {
          limit: 9999,
          page: 1,
        },
      });
      setLoading(null);
      setItems(res.data.data);
      csvLink.current.link.click();
    } catch (error) {
      setLoading(null);
      showError(error?.data);
    }
  };
  return (
    <>
      <Tooltip title="Export Exel">
        <Button
          icon={
            loading !== 'exportExcel' ? (
              <Icon component={ExcelIcon} style={{ fontSize: 30 }} />
            ) : (
              <Spin />
            )
          }
          style={style}
          onClick={fetchData}
        />
        <CSVLink
          data={items}
          filename={`${resource}.csv`}
          ref={csvLink}
          target="_blank"
        />
      </Tooltip>
    </>
  );
};

RestExportExcel.propTypes = {
  resource: PropTypes.string,
  style: PropTypes.object,
};

export default RestExportExcel;
