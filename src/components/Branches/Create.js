/* eslint-disable no-unused-expressions */
/* eslint-disable no-throw-literal */
import React from 'react';
import RestCreate from 'components/common/RestCreate';
import actions from 'redux/utils/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getGeocode, getLatLng } from 'use-places-autocomplete';
import { formatAddressComponents } from 'utils/tools';
import { PRIMARY_KEY } from 'redux/utils/crudSlice';
import { notification } from 'antd';
import Form from './Form';

const Create = () => {
  const dispatch = useDispatch();
  const company = useSelector((state) => state.companies.data);
  const handleSubmit = async (values) => {
    try {
      const results = await getGeocode({ address: values.location });
      const coordinates = await getLatLng(results[0]);

      values.workingHours?.forEach((e) => {
        if (e.openHour > e.closeHour) {
          throw 'Thời gian hoạt động không hợp lệ';
        }
      });

      const data = {
        ...values,
        addressComponents: formatAddressComponents(
          results[0].address_components,
        ),
        location: {
          type: 'Pointer',
          coordinates: [coordinates.lat, coordinates.lng],
        },
        address: {
          ...values.address,
          map: results[0].formatted_address,
        },
        setting: {
          ...values.setting,
          timeBetweenTransactionInMillisecond:
            values.setting.timeBetweenTransactionInMillisecond * 60 * 1000,
        },
      };

      dispatch(
        actions.branches.createData({
          customResource: `company/companies/${company?.[PRIMARY_KEY]}/branches`,
          data,
        }),
      ).then(() => {
        dispatch(
          actions.companies.getDataById({
            customResource: 'company/companies',
            id: company.id,
          }),
        );
      });
    } catch (error) {
      notification.error({
        message: error,
      });
    }
  };

  return (
    <RestCreate
      resource="branches"
      customSubmit={handleSubmit}
      footer={false}
      initialValues={{
        setting: {
          maxTransactionAmount: -1,
          timeBetweenTransactionInMillisecond: 0,
          warnWhenBalanceLessThan: [200],
        },
      }}
    >
      <Form />
    </RestCreate>
  );
};

export default Create;
