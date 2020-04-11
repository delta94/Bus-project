/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import useRouter from 'hooks/useRouter';
import RestEdit from 'components/common/RestEdit';
import RestSelect from 'components/common/RestSelect';
import { Select, Button, Form, notification } from 'antd';
import useRouter from 'hooks/useRouter';
import actions from 'redux/utils/actions';
import { useDispatch } from 'react-redux';
// import RestInput from 'components/common/RestInput';
import i18next from 'i18next';
import { CheckCircleOutlined } from '@ant-design/icons';
import RestInput from 'components/common/RestInput';
import classNames from 'classnames';
import ButtonSendOTPChangeStatus from './ButtonSendOTPChangeStatus';

const Edit = () => {
  const dispatch = useDispatch();
  const { routerState } = useRouter();
  const [step, setStep] = useState(1);

  const sendOTP = () => {
    setStep(2);
  };

  const customSubmit = (values) => {
    if (values.status === 'completed') {
      dispatch(
        actions.topup.editData({
          customResource: `company/balance-activities/${routerState?.id}/approve`,
          data: {
            otp: values.otp,
          },
        }),
      );
    } else if (values.status === 'rejected') {
      dispatch(
        actions.topup.editData({
          customResource: `company/balance-activities/${routerState?.id}/rejected`,
          data: {
            otp: values.otp,
          },
        }),
      );
    } else {
      notification.error({
        message: 'Bạn chưa thay đổi trạng thái',
      });
    }
  };

  return (
    <>
      <RestEdit
        resource="topup"
        customSubmit={customSubmit}
        initialValues={{ status: routerState?.status }}
        footer={false}
      >
        <div
          className={classNames({
            block: step === 1,
            hidden: step === 2,
          })}
        >
          <RestSelect
            fieldName="status"
            label="Trạng thái"
            style={{ width: 300 }}
            showSearch={false}
            component=<Select>
              <Select.Option key="completed">Chấp nhận</Select.Option>
              <Select.Option key="rejected">Từ chối</Select.Option>
              <Select.Option key="pending" disabled>
                Chờ duyệt
              </Select.Option>
            </Select>
          />
          <div
            className="flex justify-end"
            style={{ marginTop: 20 }}
            htmlType="submit"
          >
            <ButtonSendOTPChangeStatus onChange={sendOTP} />
          </div>
        </div>
        <div
          className={classNames({
            block: step === 2,
            hidden: step === 1,
          })}
        >
          <RestInput
            label="OTP"
            style={{ width: 300 }}
            fieldName="otp"
            placeholder="Nhập OTP"
          />
          <div className="flex justify-end" style={{ marginTop: 20 }}>
            <Form.Item>
              <Button
                icon={<CheckCircleOutlined />}
                type="primary"
                htmlType="submit"
              >
                {i18next.t('confirm')}
              </Button>
            </Form.Item>
          </div>
        </div>
      </RestEdit>
    </>
  );
};

export default Edit;
