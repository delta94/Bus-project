/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-curly-newline */
import React, { useState, useContext } from 'react';
import RestInput from 'components/common/RestInput';
import RestGooglePlaceSearch from 'components/common/RestGooglePlaceSearch';
import { Steps, Form as AntdForm, Button, notification, Row, Col } from 'antd';
import RestSelectCity from 'components/common/RestSelectCity';
import RestSelectCategories from 'components/common/RestSelectCategories';
import { validateRegex } from 'utils/validateUtils';
import RestTextArea from 'components/common/RestTextArea';
import RestInputNumber from 'components/common/RestInputNumber';
import PropTypes from 'prop-types';
import { FormContext } from 'components/common/RestForm';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import i18next from 'i18next';
import { moneyFomatter } from 'utils/formatter';

const Form = ({ extraEdit }) => {
  const [current, setCurrent] = useState(0);
  const { form } = useContext(FormContext);

  const handleChange = (form, e) => {
    form.setFieldsValue({
      address: {
        display: e,
      },
    });
  };

  const handleClick = async (fields) => {
    form
      .validateFields(fields)
      .then(() => setCurrent(current + 1))
      .catch(() => {
        notification.error({
          message: 'Không được để trống',
        });
      });
  };

  const Actions = () => {
    if (current === 0) {
      return (
        <Button
          type="default"
          onClick={
            () =>
              handleClick([
                'name',
                'categoryID',
                ['contact', 'phone'],
                ['desc', 'en'],
                ['desc', 'vi'],
                'city',
              ])
            // eslint-disable-next-line react/jsx-curly-newline
          }
        >
          Tiếp tục
        </Button>
      );
    }
    if (current === 1) {
      return (
        <div>
          <Button type="default" onClick={() => setCurrent(current - 1)}>
            {i18next.t('back')}
          </Button>
          <Button
            type="primary"
            onClick={() =>
              handleClick([
                'location',
                ['address', 'display'],
                ['workingHours'],
              ])
            }
            style={{ marginLeft: 10 }}
          >
            {i18next.t('continue')}
          </Button>
        </div>
      );
    }
    return (
      <div>
        <Button type="default" onClick={() => setCurrent(current - 1)}>
          {i18next.t('back')}
        </Button>
        <Button type="primary" htmlType="submit" style={{ marginLeft: 10 }}>
          {i18next.t('confirm')}
        </Button>
      </div>
    );
  };
  return (
    <>
      <Steps current={current}>
        <Steps.Step key={1} title="Bước 1" />
        <Steps.Step key={2} title="Bước 2" />
        <Steps.Step key={3} title="Bước 3" />
      </Steps>
      <div style={{ display: current === 0 ? 'block' : 'none', marginTop: 20 }}>
        <RestInput label="Tên Chi Nhánh" fieldName="name" record="name" />
        <RestSelectCategories
          mode="multiple"
          label="Danh mục"
          fieldName="categoryID"
        />
        <RestInput
          label="Số điện thoại liên hệ"
          pattern={validateRegex.number}
          fieldName={['contact', 'phone']}
          message="Số điện thoại không hợp lệ"
        />
        <RestTextArea label="Mô tả (Tiếng Việt)" fieldName={['desc', 'vi']} />
        <RestTextArea label="Mô tả (English)" fieldName={['desc', 'en']} />
        <RestSelectCity label="Thành Phố" fieldName="city" />
      </div>
      <div style={{ display: current === 1 ? 'block' : 'none' }}>
        <RestGooglePlaceSearch
          label="Địa chỉ bản đồ"
          fieldName="location"
          record="address.map"
          defaultCenter={{
            lat: 'location.coordinates[0]',
            lng: 'location.coordinates[1]',
          }}
          onChange={handleChange}
        />
        <RestInput
          label="Địa chỉ hiển thị"
          fieldName={['address', 'display']}
        />
        <AntdForm.Item
          label="Thời gian hoạt động:"
          wrapperCol={{ span: 24 }}
          labelCol={{ span: 24 }}
        >
          <AntdForm.List name="workingHours">
            {(fields, { add, remove }) => {
              return (
                <div>
                  {fields?.map((field, index) => {
                    return (
                      <AntdForm.Item required={false} key={field.key}>
                        <div className="flex items-center">
                          <Row
                            gutter={10}
                            style={{ marginTop: 20 }}
                            className="w-11/12"
                          >
                            <Col span={6}>
                              <RestInputNumber
                                min={0}
                                max={23}
                                required={false}
                                fieldName={[index, 'openHour']}
                                placeholder="Giờ mở cửa"
                                className="w-full"
                                pattern={validateRegex.hour}
                                defaultValue={field.openHour}
                              />
                            </Col>
                            <Col span={6}>
                              <RestInputNumber
                                min={0}
                                required={false}
                                max={59}
                                fieldName={[index, 'openMinute']}
                                placeholder="Phút mở cửa"
                                className="w-full"
                                pattern={validateRegex.minute}
                                defaultValue={field.openMinute}
                              />
                            </Col>
                            <Col span={6}>
                              <RestInputNumber
                                min={0}
                                required={false}
                                max={23}
                                fieldName={[index, 'closeHour']}
                                placeholder="Giờ đóng cửa"
                                className="w-full"
                                pattern={validateRegex.hour}
                                defaultValue={field.closeHour}
                              />
                            </Col>
                            <Col span={6}>
                              <RestInputNumber
                                min={0}
                                required={false}
                                fieldName={[index, 'closeMinute']}
                                max={59}
                                placeholder="Phút đóng cửa"
                                className="w-full"
                                pattern={validateRegex.minute}
                                defaultValue={field.closeMinute}
                              />
                            </Col>
                          </Row>
                          {fields.length > 1 ? (
                            <MinusCircleOutlined
                              className="inline w-1/12 cursor-pointer"
                              onClick={() => {
                                remove(field.name);
                              }}
                            />
                          ) : null}
                        </div>
                      </AntdForm.Item>
                    );
                  })}
                  <AntdForm.Item>
                    <Button
                      type="dashed"
                      onClick={() => {
                        add();
                      }}
                      style={{ width: '100%' }}
                    >
                      <PlusOutlined />
                      Add field
                    </Button>
                  </AntdForm.Item>
                </div>
              );
            }}
          </AntdForm.List>
        </AntdForm.Item>
      </div>
      <div
        style={{
          display: current === 2 ? 'block' : 'none',
          marginTop: 20,
        }}
      >
        <RestInputNumber
          label="Giá trị lớn nhất ghi nhận ( đơn vị đồng )"
          placeholder="Nhập số (đồng)"
          hasText
          desc="Đây là giá trị giao dịch lớn nhất được ghi nhận, không tính nếu giá trị < 0 (-1)"
          className="text-center"
          width={300}
          step={1000}
          formatter={moneyFomatter}
          style={{ width: 300 }}
          fieldName={['setting', 'maxTransactionAmount']}
          pattern={validateRegex.floatNumber}
        />
        <div className="flex items-center" style={{ marginTop: 20 }}>
          <RestInputNumber
            label="Thời gian giữa các giao dịch ( đơn vị phút )"
            placeholder="Nhập số (phút)"
            hasText={false}
            width={300}
            style={{ width: 300 }}
            fieldName={['setting', 'timeBetweenTransactionInMillisecond']}
            pattern={validateRegex.floatNumber}
          />
        </div>
        <AntdForm.Item
          label="Cảnh báo khi số dư nhỏ hơn ( đơn vị đồng ):"
          required
          wrapperCol={{ span: 24 }}
          labelCol={{ span: 24 }}
        >
          <AntdForm.List name={['setting', 'warnWhenBalanceLessThan']}>
            {(fields, { add, remove }) => {
              return (
                <div>
                  {fields?.map((field, index) => (
                    <AntdForm.Item required={false} key={field.key}>
                      <div className="flex items-center">
                        <RestInputNumber
                          hasText
                          width={300}
                          style={{ width: 300 }}
                          step={1000}
                          formatter={moneyFomatter}
                          placeholder="Nhập số (đồng)"
                          fieldName={index}
                          pattern={validateRegex.floatNumber}
                        />
                        {fields.length > 1 ? (
                          <MinusCircleOutlined
                            style={{ marginLeft: 10 }}
                            className="inline w-1/12 cursor-pointer"
                            onClick={() => {
                              remove(field.name);
                            }}
                          />
                        ) : null}
                      </div>
                    </AntdForm.Item>
                  ))}
                  <AntdForm.Item>
                    <Button
                      type="dashed"
                      onClick={() => {
                        add();
                      }}
                      style={{ width: '300px' }}
                    >
                      <PlusOutlined />
                      Add field
                    </Button>
                  </AntdForm.Item>
                </div>
              );
            }}
          </AntdForm.List>
        </AntdForm.Item>
        {extraEdit}
      </div>
      <div className="flex justify-end" style={{ marginTop: '20px' }}>
        <AntdForm.Item>
          <Actions />
        </AntdForm.Item>
      </div>
    </>
  );
};

Form.propTypes = {
  extraEdit: PropTypes.any,
};

export default Form;
