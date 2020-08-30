import { Button, Row, Form, notification } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import RestInput from '@/components/Rest/RestInput';
import { MailOutlined } from '@ant-design/icons';
import { unwrapResult } from '@reduxjs/toolkit';
import { useAuthen } from './hooks';
import AuthForm from '../../components/Layout/AuthForm';
import useRouter from '../../hooks/useRouter';
import { validateRegex } from '../../utils/validateUtils';

const ForgotPassword = () => {
  const { t } = useTranslation();
  const { loading, actions } = useAuthen();
  const { history } = useRouter();
  const handleSubmit = (values) => {
    actions
      .confirmEmail({
        data: values,
      })
      .then(unwrapResult)
      .then(() => {
        notification.success({
          message: 'Email có kèm hướng dẫn đổi mật khẩu đã được gửi cho bạn',
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
          <RestInput
            fieldName="email"
            messageRequire={t('input.email.validateMsg.required')}
            messageValidate={t('input.email.validateMsg.invalid')}
            placeholder="Email"
            pattern={validateRegex.email}
            prefix={<MailOutlined style={{ color: '#818181a6' }} />}
          />
          <Button
            style={{ marginTop: 10 }}
            type="primary"
            htmlType="submit"
            className="w-full"
            loading={loading === 'confirmEmail'}
          >
            {t('submit')}
          </Button>
        </Form>
      </AuthForm>
    </Row>
  );
};

export default ForgotPassword;
