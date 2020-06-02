import React from 'react';
import FullLogo from 'assets/images/fullLogo.png';
import { Button } from 'antd';
import Icon from '@ant-design/icons';
import i18next from 'i18next';
import { ReactComponent as AccountIcon } from 'assets/svg/account.svg';
import { ReactComponent as PasswordIcon } from 'assets/svg/password.svg';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'modules/Auth/slice';
import RestCreate from '../../../components/Rest/RestCreate';
import RestInput from '../../../components/Rest/RestInput';
import RestInputPassword from '../../../components/Rest/RestInputPassword';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const handleSubmit = (values) => {
    dispatch(
      login({
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
          fieldName="username"
          messageRequire={i18next.t('input.username.validateMsg.required')}
          messageValidate={i18next.t('input.username.validateMsg.invalid')}
          placeholder="Tên người dùng"
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
          loading={loading === 'login'}
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
