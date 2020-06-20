import Icon from '@ant-design/icons';
import { Button, Form, notification } from 'antd';
import FullLogo from 'assets/images/fullLogo.png';
import { ReactComponent as AccountIcon } from 'assets/svg/account.svg';
import { ReactComponent as PasswordIcon } from 'assets/svg/password.svg';
import i18next from 'i18next';
import React from 'react';
import PropTypes from 'prop-types';
import RestInputPassword from 'components/Rest/RestInputPassword';
import RestInput from 'components/Rest/RestInput';

const LoginForm = ({ loading, handleSubmit }) => {
  const onFinishFailed = () => {
    notification.error({
      message: 'Không hợp lệ',
    });
  };

  return (
    <div
      className="shadow-2 rounded-16 bg-white"
      style={{ padding: '40px 30px', width: 400 }}
    >
      <img src={FullLogo} alt="cashbag" style={{ marginBottom: 41 }} />
      <Form onFinish={handleSubmit} onFinishFailed={onFinishFailed}>
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
      </Form>
    </div>
  );
};

LoginForm.propTypes = {
  loading: PropTypes.bool,
  handleSubmit: PropTypes.func,
};

LoginForm.defaultProps = {
  loading: false,
  handleSubmit: () => {},
};

export default LoginForm;
