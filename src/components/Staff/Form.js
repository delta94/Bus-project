/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useState } from 'react';
import RestInput from 'components/common/RestInput';
import { validateRegex } from 'utils/validateUtils';
import RestUploadImage from 'components/common/RestUploadImage';
import { Row, Col, Select, Form as AntForm } from 'antd';
import RestSelect from 'components/common/RestSelect';
import RestSelectBranches from 'components/LoyaltyProgram/RestSelectBranches';

const Form = () => {
  const [type, setType] = useState('company');

  const handleChangeType = (e) => {
    setType(e);
  };
  return (
    <Row gutter={30}>
      <Col span={12}>
        <RestInput label="Họ và tên" fieldName="name" />
        <RestInput
          label="Số điện thoại liên hệ"
          fieldName="phone"
          messageValidate="Số điện thoại không hợp lệ"
          pattern={validateRegex.phone}
          disabled
        />
        <RestInput
          label="Email"
          fieldName="email"
          messageValidate="Email không hợp lệ"
          pattern={validateRegex.email}
          required={false}
        />
        <RestUploadImage
          label="Avatar"
          fieldName="tempAvartar"
          required={false}
          record="avatar.sizes.small.url"
        />
      </Col>
      <Col span={12}>
        <div className="flex">
          <AntForm.Item label="Áp dụng cho" />
          <RestSelect
            style={{ width: 200 }}
            fieldName={['company', 'type']}
            defaultValue="company"
            onChange={handleChangeType}
            component=<Select>
              <Select.Option key="company"> Tất cả chi nhánh </Select.Option>
              <Select.Option key="branch"> Theo chi nhánh </Select.Option>
            </Select>
          />
        </div>
        {type === 'branch' && (
          <RestSelectBranches
            label="Chi nhánh"
            fieldName={['company', 'branches']}
            mode="multiple"
          />
        )}
      </Col>
    </Row>
  );
};

Form.propTypes = {};

export default Form;
