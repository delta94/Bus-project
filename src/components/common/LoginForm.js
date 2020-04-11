/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import FullLogo from 'assets/images/fullLogo.png';
import { Button } from 'antd';
import Icon from '@ant-design/icons';
import i18next from 'i18next';
import { ReactComponent as AccountIcon } from 'assets/svg/account.svg';
import { ReactComponent as PasswordIcon } from 'assets/svg/password.svg';
import { useDispatch } from 'react-redux';
import { validateRegex } from 'utils/validateUtils';
import actions from 'redux/utils/actions';
import RestCreate from './RestCreate';
import RestInput from './RestInput';
import RestInputPassword from './RestInputPassword';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(
      actions.auth.login({
        data: values,
      }),
    );
  };

  return (
    <div
      className="shadow-2 rounded-16 bg-white"
      style={{ padding: '40px 30px', width: 400 }}
    >
      <img src={FullLogo} alt="cashbag" style={{ marginBottom: 41 }} />
      <RestCreate customSubmit={handleSubmit} resource="auth" footer={false}>
        <RestInput
          fieldName="phone"
          messageRequire={i18next.t('input.phoneNumber.validateMsg.required')}
          messageValidate={i18next.t('input.phoneNumber.validateMsg.invalid')}
          pattern={validateRegex.phone}
          placeholder="Số điện thoại"
          prefix={<Icon component={AccountIcon} className="text-gray-250" />}
        />
        <RestInputPassword
          style={{ marginTop: 20 }}
          fieldName="password"
          messageRequire={i18next.t('input.password.validateMsg.required')}
          messageValidate={i18next.t('input.password.validateMsg.invalid')}
          placeholder="Mật khẩu"
          type="password"
          prefix={<Icon component={PasswordIcon} className="text-gray-250" />}
        />
        <Button
          type="primary"
          htmlType="submit"
          style={{ marginTop: 20 }}
          className="w-full"
        >
          {i18next.t('login.loginBtn')}
        </Button>
      </RestCreate>
    </div>
  );
};

LoginForm.propTypes = {};

LoginForm.defaultProps = {};

export default LoginForm;
