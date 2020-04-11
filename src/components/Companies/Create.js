import React from 'react';
import { notification } from 'antd';
import RestCreate from 'components/common/RestCreate';
import { getGeocode, getLatLng } from 'use-places-autocomplete';
import { useDispatch } from 'react-redux';
import actions from 'redux/utils/actions';
import { formatAddressComponents } from 'utils/tools';
import Form from './Form';

const Create = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      const results = await getGeocode({
        address: values?.contact?.address?.map,
      });
      const coordinates = await getLatLng(results[0]);
      dispatch(
        actions.companies.createData({
          customResource: 'company/companies',
          data: {
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
    <RestCreate resource="companies" customSubmit={handleSubmit}>
      <Form />
    </RestCreate>
  );
};

export default Create;
