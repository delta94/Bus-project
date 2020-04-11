import React from 'react';
import { notification } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import RestEdit from 'components/common/RestEdit';
import { getGeocode, getLatLng } from 'use-places-autocomplete';
import actions from 'redux/utils/actions';
import { formatAddressComponents } from 'utils/tools';
import { PRIMARY_KEY } from 'redux/utils/crudSlice';
import Form from './Form';

const Edit = () => {
  const dispatch = useDispatch();
  const company = useSelector((state) => state.companies.data);
  const handleSubmit = async (values, form, source) => {
    try {
      const results = await getGeocode({
        address: values?.contact?.address?.map,
      });
      const coordinates = await getLatLng(results[0]);
      dispatch(
        actions.companies.editData({
          // eslint-disable-next-line no-underscore-dangle
          id: company?.[PRIMARY_KEY],
          customResource: `company/companies`,
          data: {
            ...source,
            ...values,
            contact: {
              ...values.contact,
              location: {
                type: 'Pointer',
                coordinates: [coordinates.lat, coordinates.lng],
              },
              address: {
                map: results[0].formatted_address,
              },
              addressComponents: formatAddressComponents(
                results[0].address_components,
              ),
            },
          },
        }),
      );
    } catch (error) {
      notification.error({
        message: error,
      });
    }
  };

  return (
    <RestEdit resource="companies" customSubmit={handleSubmit}>
      <Form />
    </RestEdit>
  );
};

export default Edit;
