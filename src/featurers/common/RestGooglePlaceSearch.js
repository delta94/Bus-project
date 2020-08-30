/* eslint-disable camelcase */
import React, { useContext, useState } from 'react';
import { Form, AutoComplete, notification } from 'antd';
import PropTypes from 'prop-types';
import usePlacesAutocomplete, {
  getLatLng,
  getGeocode,
} from 'use-places-autocomplete';
import { get } from 'lodash';
import GoogleMap from '@/components/common/GoogleMap';
import { FormContext } from './RestForm';

const RestGooglePlaceSearch = ({
  fieldName,
  label,
  required,
  debounce,
  onChange,
  messageValidate,
  defaultCenter,
  messageRequire,
  placeholder,
  hasMap,
  height,
  pattern,
  wrapperCol,
  labelCol,
}) => {
  const { form, source } = useContext(FormContext);
  const [coordinates, setCoordinates] = useState({
    lat: get(source, defaultCenter.lat),
    lng: get(source, defaultCenter.lng),
  });

  const {
    suggestions: { status, data },
    setValue,
  } = usePlacesAutocomplete({
    debounce,
  });

  const handleChange = (e) => {
    setValue(e);
    onChange(form, e);
    form.setFieldsValue({
      [fieldName]: e,
    });
  };

  const handleSelect = async (e) => {
    form.setFieldsValue({
      [fieldName]: e,
    });
    try {
      const results = await getGeocode({ address: e });
      const coordinates = await getLatLng(results[0]);
      setCoordinates(coordinates);
    } catch (error) {
      notification.error('😱 Error: ', error);
    }
  };

  const renderSuggestions = data.map((suggestion) => {
    const {
      structured_formatting: { main_text, secondary_text },
    } = suggestion;
    return {
      value: `${main_text} ${secondary_text}`,
    };
  });

  return (
    <>
      <Form.Item
        name={fieldName}
        label={label}
        rules={[
          {
            required,
            message: messageRequire,
          },
          {
            pattern,
            message: messageValidate,
          },
        ]}
        labelCol={labelCol}
        wrapperCol={wrapperCol}
      >
        <AutoComplete
          options={status === 'OK' && renderSuggestions}
          onChange={handleChange}
          onSelect={handleSelect}
          placeholder={placeholder}
        />
      </Form.Item>
      {hasMap && (
        <div style={{ marginTop: '10px' }}>
          <GoogleMap
            lat={coordinates.lat}
            lng={coordinates.lng}
            zoom={17}
            height={height}
            width="100%"
          />
        </div>
      )}
    </>
  );
};

RestGooglePlaceSearch.propTypes = {
  fieldName: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  label: PropTypes.string,
  required: PropTypes.bool,
  debounce: PropTypes.number,
  messageValidate: PropTypes.string,
  messageRequire: PropTypes.string,
  onChange: PropTypes.func,
  defaultCenter: PropTypes.object,
  placeholder: PropTypes.string,
  hasMap: PropTypes.bool,
  height: PropTypes.number,
  pattern: PropTypes.any,
  wrapperCol: PropTypes.object,
  labelCol: PropTypes.object,
};

RestGooglePlaceSearch.defaultProps = {
  required: true,
  debounce: 300,
  height: 255,
  messageValidate: 'Không hợp lệ',
  messageRequire: 'Không được trống',
  hasMap: true,
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

export default RestGooglePlaceSearch;
