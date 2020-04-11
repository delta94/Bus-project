/* eslint-disable no-unused-expressions */
/* eslint-disable no-throw-literal */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RestEdit from 'components/common/RestEdit';
import actions from 'redux/utils/actions';
import { getGeocode, getLatLng } from 'use-places-autocomplete';
import { formatAddressComponents } from 'utils/tools';
import { PRIMARY_KEY } from 'redux/utils/crudSlice';
import { notification } from 'antd';
import Form from './Form';

const Edit = () => {
  const dispatch = useDispatch();
  const branch = useSelector((state) => state.branches.data);
  const handleSubmit = async (values, form, source) => {
    try {
      const results = await getGeocode({ address: values.location });
      const coordinates = await getLatLng(results[0]);

      values.workingHours?.forEach((e) => {
        if (e.openHour > e.closeHour) {
          throw 'Thời gian hoạt động không hợp lệ';
        }
      });

      const data = {
        ...source,
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
        actions.branches.editData({
          // eslint-disable-next-line no-underscore-dangle
          id: branch?.[PRIMARY_KEY],
          customResource: `company/branches`,
          data,
        }),
      );
    } catch (error) {
      notification.error({
        message: error,
      });
    }
  };

  return (
    <RestEdit
      resource="branches"
      customSubmit={handleSubmit}
      footer={false}
      initialValues={{
        ...branch,
        location: branch?.address?.map,
        categories: branch?.categoryID,
        workingHours: branch?.workingHours || [],
        setting: {
          ...branch?.setting,
          timeBetweenTransactionInMillisecond:
            branch?.setting?.timeBetweenTransactionInMillisecond / (60 * 1000),
        },
      }}
    >
      <Form />
    </RestEdit>
  );
};

export default Edit;
