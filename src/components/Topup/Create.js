/* eslint-disable no-underscore-dangle */
import RestCreate from 'components/common/RestCreate';
import RestInputNumber from 'components/common/RestInputNumber';
import React, { useState } from 'react';
import { moneyFomatter } from 'utils/formatter';
import { validateRegex } from 'utils/validateUtils';
import RestFetchSelect from 'components/common/RestFetchSelect';
import { useSelector, useDispatch } from 'react-redux';
// import RestInput from 'components/common/RestInput';
import actions from 'redux/utils/actions';
import { Button, Form } from 'antd';
import i18next from 'i18next';
import { CheckCircleOutlined } from '@ant-design/icons';
import RestSelectBranch from './RestSelectBanch';
// import ButtonSendOTPCreate from './ButtonSendOTPCreate';

const Create = () => {
  // const dispatch = useDispatch();
  const [companyID, setCompanyID] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.data);

  const customSubmit = (values) => {
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
    <RestCreate resource="topup" customSubmit={customSubmit} footer={false}>
      <RestFetchSelect
        placeholder="Lựa chọn công ty"
        style={{ width: 300, marginRight: 10 }}
        resource="companies"
        customResource="company/companies"
        onChange={(e) => {
          setCompanyID(e);
        }}
        filterOption={false}
        fieldName="companyID"
        label="Công ty"
      />
      <RestSelectBranch
        fieldName="branchID"
        style={{ width: 300, marginRight: 10 }}
        placehorder="Lựa chọn chi nhánh"
        label="Chi nhánh"
        companyID={companyID}
      />
      <RestInputNumber
        label="Số tiền"
        width={300}
        fieldName="amount"
        hasText
        placeholder="Nhập số tiền"
        pattern={validateRegex.numberUnsigned}
        formatter={moneyFomatter}
        step={1000}
      />
      {/* <RestInput
        label="OTP"
        style={{ width: 300 }}
        fieldName="otp"
        placeholder="Nhập OTP"
      /> */}
      <div className="flex justify-end" style={{ marginTop: 20 }}>
        {/* <div style={{ marginRight: 20 }}>
          <ButtonSendOTPCreate />
        </div> */}
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
    </RestCreate>
  );
};

export default Create;
