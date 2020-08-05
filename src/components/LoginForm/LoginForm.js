import Icon from '@ant-design/icons';
import { Button, Form, notification } from 'antd';
import { ReactComponent as AccountIcon } from 'assets/svg/account.svg';
import { ReactComponent as PasswordIcon } from 'assets/svg/password.svg';
import RestInput from 'components/Rest/RestInput';
import RestInputPassword from 'components/Rest/RestInputPassword';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import AuthForm from '../Layout/AuthForm';

const LoginForm = ({ loading, handleSubmit }) => {
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
        <RestInputPassword
          style={{ marginTop: 20 }}
          fieldName="password"
          messageRequire={t('input.password.validateMsg.required')}
          messageValidate={t('input.password.validateMsg.invalid')}
          placeholder="Mật khẩu"
          type="password"
          prefix={<Icon component={PasswordIcon} className="text-gray-250" />}
        />
        <div className="flex justify-end" style={{ margin: '10px 0' }}>
          <Link to="/forgot-password">
            <span className="underline">Quên mật khẩu ?</span>
          </Link>
        </div>
        <Button
          type="primary"
          htmlType="submit"
          className="w-full"
          loading={loading}
        >
          {t('auth.loginBtn')}
        </Button>
      </Form>
      <Link to="/signup" className="text-center" style={{ margin: 10 }}>
        Tạo tài khoản
      </Link>
    </AuthForm>
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
