/* eslint-disable no-underscore-dangle */
import React, { useContext } from 'react';
import { Button, Form } from 'antd';
import i18next from 'i18next';
import { SendOutlined } from '@ant-design/icons';
import { FormContext } from 'components/common/RestForm';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'redux/utils/actions';

const ButtonSendOTPCreate = () => {
  const { form } = useContext(FormContext);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.data);

  const sendOTP = () => {
    const values = form.getFieldValue();
    dispatch(
      actions.topup.createData({
        customResource: `company/companies/${values.companyID}/balance-activities`,
        data: {
          ...values,
          type: 'topup',
          userID: user._id,
        },
      }),
    );
  };
  return (
    <Form.Item>
      <Button icon={<SendOutlined />} type="default" onClick={sendOTP}>
        {i18next.t('sendOTP')}
      </Button>
    </Form.Item>
  );
};

ButtonSendOTPCreate.propTypes = {};

export default ButtonSendOTPCreate;
