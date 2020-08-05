import Icon from '@ant-design/icons';
import { Button, Form, notification } from 'antd';
import { ReactComponent as AccountIcon } from 'assets/svg/account.svg';
import { ReactComponent as PasswordIcon } from 'assets/svg/password.svg';
import RestInput from 'components/Rest/RestInput';
import RestInputPassword from 'components/Rest/RestInputPassword';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import AuthForm from '../Layout/AuthForm';

const SignUpForm = ({ loading, handleSubmit }) => {
  const { t } = useTranslation();
  const onFinishFailed = () => {
    notification.error({
      message: 'Không hợp lệ',
    });
  };

  return (
    <AuthForm>
      <Form onFinish={handleSubmit} onFinishFailed={onFinishFailed}>
        <RestInput
          fieldName="username"
          messageRequire={t('input.username.validateMsg.required')}
          messageValidate={t('input.username.validateMsg.invalid')}
          placeholder="Tên người dùng"
          prefix={<Icon component={AccountIcon} className="text-gray-250" />}
        />
        <RestInput
          style={{ marginTop: 20 }}
          fieldName="email"
          messageRequire={t('input.email.validateMsg.required')}
          messageValidate={t('input.email.validateMsg.invalid')}
          placeholder="Email"
          prefix={<Icon component={AccountIcon} className="text-gray-250" />}
        />
        <RestInputPassword
          style={{ marginTop: 20 }}
          fieldName="password"
          messageRequire={t('input.password.validateMsg.required')}
          messageValidate={t('input.password.validateMsg.invalid')}
          placeholder="Mật khẩu"
          type="password"
          prefix={<Icon component={PasswordIcon} className="text-gray-250" />}
        />
        <Button
          type="primary"
          htmlType="submit"
          style={{ marginTop: 20 }}
          className="w-full"
          loading={loading}
        >
          {t('auth.signupBtn')}
        </Button>
      </Form>
    </AuthForm>
  );
};

SignUpForm.propTypes = {
  loading: PropTypes.bool,
  handleSubmit: PropTypes.func,
};

SignUpForm.defaultProps = {
  loading: false,
  handleSubmit: () => {},
};

export default SignUpForm;
