import React from 'react';
import RestInput from 'components/common/RestInput';
import { Row, Col } from 'antd';
import RestSelectCity from 'components/common/RestSelectCity';
import RestGooglePlaceSearch from 'components/common/RestGooglePlaceSearch';
import { validateRegex } from 'utils/validateUtils';

const Form = () => {
  const handleChange = (form, e) => {
    form.setFieldsValue({
      address: {
        display: e,
      },
    });
  };
  return (
    <>
      <RestInput label="Tên Công Ty" fieldName="name" />
      <Row gutter={13}>
        <Col span={12}>
          <RestSelectCity label="Thành Phố" fieldName={['contact', 'city']} />
        </Col>
        <Col span={12}>
          <RestInput
            label="Số điện thoại liên hệ"
            fieldName={['contact', 'phone']}
            messageValidate="Số điện thoại không hợp lệ"
            pattern={validateRegex.number}
            record="contact.phone"
          />
        </Col>
      </Row>
      <RestGooglePlaceSearch
        label="Địa chỉ"
        fieldName={['contact', 'address', 'map']}
        defaultCenter={{
          lat: 'contact?.location?.coordinates[0]',
          lng: 'contact?.location?.coordinates[1]',
        }}
        hasMap={false}
        onChange={handleChange}
      />
    </>
  );
};

Form.propTypes = {};

export default Form;
