/* eslint-disable no-unused-vars */
import RestCreate from 'components/common/RestCreate';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'redux/utils/actions';
import { omit } from 'lodash';
import { PRIMARY_KEY } from 'redux/utils/crudSlice';
import MaterialSearch from 'components/common/MaterialSearch';
import { Button, Form as AntForm, notification } from 'antd';
import { get, put } from 'api/utils';
import { validateRegex } from 'utils/validateUtils';
import Form from './Form';
import FormCreate from './FormCreate';

const Create = () => {
  const dispatch = useDispatch();
  const company = useSelector((state) => state.companies.data);
  const [status, setStatus] = useState('search');
  const [data, setData] = useState({});

  const customSubmit = (values) => {
    dispatch(
      actions.staff.createData({
        prefix: 'admin/user',
        customResource: 'crm-staffs',
        customURL: 'https://svc.cashbagmain.com/',
        data: {
          ...omit(values, 'tempAvartar'),
          ...(values.tempAvartar && {
            avatar: values.tempAvartar.file.response.data,
          }),
          company: {
            _id: company?.[PRIMARY_KEY],
            ...values.company,
          },
        },
      }),
    );
  };

  const handleSearch = async (e) => {
    try {
      const isValidPhone = /((\+84[0-9]{9})|(\b0[0-9]{9}))(?![0-9])/g.test(e);
      if (isValidPhone) {
        const response = await get(
          `admin/user/search/crm-staffs?keyword=${e}&company=${company?.[PRIMARY_KEY]}`,
        );
        if (response.data.staff) {
          setData(response.data.staff);
          setStatus('update');
        } else {
          setData({
            phone: e,
          });
          setStatus('create');
        }
      } else {
        notification.error({
          message: 'Số điện thoại không hợp lệ',
        });
      }
    } catch (error) {
      notification.error({
        message: error.data.message,
      });
    }
  };

  if (status === 'search') {
    return (
      <div style={{ padding: '0 0 20px 0' }}>
        <AntForm.Item> Tìm kiếm nhân viên: </AntForm.Item>
        <MaterialSearch
          placeholder="Tìm kiếm theo số điện thoại"
          onSearch={handleSearch}
        />
      </div>
    );
  }
  if (status === 'update') {
    return (
      <RestCreate
        resource="staff"
        customSubmit={customSubmit}
        initialValues={{
          ...data,
          company: {
            type: 'company',
          },
        }}
      >
        <FormCreate data={data} />
      </RestCreate>
    );
  }
  return (
    <>
      <RestCreate
        resource="staff"
        customSubmit={customSubmit}
        initialValues={{
          ...data,
          company: {
            type: 'company',
          },
        }}
      >
        <Form />
      </RestCreate>
    </>
  );
};

export default Create;
