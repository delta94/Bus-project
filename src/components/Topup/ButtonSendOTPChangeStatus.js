/* eslint-disable no-underscore-dangle */
import React, { useContext } from 'react';
import { Button, Form, notification } from 'antd';
import i18next from 'i18next';
import { SendOutlined } from '@ant-design/icons';
import { FormContext } from 'components/common/RestForm';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import useRouter from 'hooks/useRouter';
import actions from 'redux/utils/actions';

const ButtonSendOTPChangeStatus = ({ onChange }) => {
  const { form } = useContext(FormContext);
  const { isLoadingChangeStatus } = useSelector((state) => state.topup);
  const dispatch = useDispatch();
  const { routerState } = useRouter();

  const sendOTP = () => {
    const values = form.getFieldValue();
    if (values.status === 'completed') {
      dispatch(
        actions.topup.changeStatus({
          customResource: `company/balance-activities/${routerState?.id}/approve`,
          data: {
            otp: values.otp,
          },
        }),
      ).then(() => {
        onChange();
      });
    } else if (values.status === 'rejected') {
      dispatch(
        actions.topup.changeStatus({
          customResource: `company/balance-activities/${routerState?.id}/rejected`,
          data: {
            otp: values.otp,
          },
        }),
      ).then(() => {
        onChange();
      });
    } else {
      notification.error({
        message: 'Bạn chưa thay đổi trạng thái',
      });
    }
  };
  return (
    <Form.Item>
      <Button
        icon={<SendOutlined />}
        type="default"
        onClick={sendOTP}
        loading={isLoadingChangeStatus}
      >
        {i18next.t('sendOTP')}
      </Button>
    </Form.Item>
  );
};

ButtonSendOTPChangeStatus.propTypes = {
  onChange: PropTypes.string,
};

export default ButtonSendOTPChangeStatus;
