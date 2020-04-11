/* eslint-disable import/no-extraneous-dependencies */
import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'antd';
import i18next from 'i18next';
import { CheckCircleOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

export const FormContext = createContext({});

const RestForm = ({
  form,
  onFinish,
  onFinishFailed,
  children,
  footer,
  source,
  resource,
}) => {
  const { loading } = useSelector((state) => state[resource]);
  return (
    <FormContext.Provider value={{ form, source }}>
      <Form
        onFinish={onFinish}
        form={form}
        scrollToFirstError
        onFinishFailed={onFinishFailed}
      >
        {children}
        {footer && (
          <div className="flex justify-end" style={{ marginTop: '20px' }}>
            <Form.Item>
              <Button
                loading={loading}
                icon={<CheckCircleOutlined />}
                type="primary"
                htmlType="submit"
              >
                {i18next.t('confirm')}
              </Button>
            </Form.Item>
          </div>
        )}
      </Form>
    </FormContext.Provider>
  );
};

RestForm.propTypes = {
  children: PropTypes.node,
  form: PropTypes.object,
  onFinish: PropTypes.func,
  onFinishFailed: PropTypes.func,
  footer: PropTypes.bool,
  source: PropTypes.object,
  resource: PropTypes.string,
};

RestForm.defaultProps = {
  footer: true,
};

export default RestForm;
