import { Button, Row, Form, notification } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import RestInputPassword from '@/components/Rest/RestInputPassword';
import Icon from '@ant-design/icons';
import { ReactComponent as PasswordIcon } from '@/assets/svg/password.svg';
import { unwrapResult } from '@reduxjs/toolkit';
import { useAuthen } from './hooks';
import AuthForm from '../../components/Layout/AuthForm';
import { validateRegex } from '../../utils/validateUtils';
import useRouter from '../../hooks/useRouter';

const ForgotPassword = () => {
  const { t } = useTranslation();
  const { loading, actions } = useAuthen();
  const { history, query } = useRouter();

  const handleSubmit = (values) => {
    actions
      .resetPassword({
        data: {
          ...values,
          verifyCode: query['verify-code'],
        },
      })
      .then(unwrapResult)
      .then(() => {
        notification.success({
          message: 'Đổi mật khẩu thành công',
        });
        history.push('/login');
      });
  };

  return (
    <Row
      justify="center"
      align="middle"
      className="h-screen"
      style={{ padding: 20 }}
    >
      <AuthForm>
        <Form onFinish={handleSubmit}>
          <RestInputPassword
            fieldName="password"
            messageRequire={t('input.password.validateMsg.required')}
            messageValidate={t('input.password.validateMsg.invalid')}
            placeholder="Enter new password"
            type="password"
            pattern={validateRegex.password}
            prefix={<Icon component={PasswordIcon} className="text-gray-250" />}
          />
          <Button
            style={{ marginTop: 10 }}
            type="primary"
            htmlType="submit"
            className="w-full"
            loading={loading === 'resetPassword'}
          >
            {t('submit')}
          </Button>
        </Form>
      </AuthForm>
    </Row>
  );
};

export default ForgotPassword;
