import React, { useEffect } from 'react';
import { Form, notification } from 'antd';
import PropTypes from 'prop-types';
import actions from '@/features/actions';
import { useDispatch } from 'react-redux';
import RestForm from './RestForm';

const RestCreate = ({
  initialValues,
  children,
  resource,
  customSubmit,
  formatSubmit,
  footer,
  customResource,
}) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  useEffect(() => {
    initialValues && form.setFieldsValue(initialValues);
  }, [initialValues, form]);

  const handleSubmit = (values) => {
    if (customSubmit) {
      customSubmit(values);
    } else {
      dispatch(
        actions[resource].create({
          customResource,
          data: { ...(formatSubmit ? formatSubmit(values) : values) },
        }),
      );
    }
  };

  const onFinishFailed = () => {
    notification.error({
      message: 'Không hợp lệ',
    });
  };

  return (
    <RestForm
      footer={footer}
      onFinish={handleSubmit}
      onFinishFailed={onFinishFailed}
      form={form}
      resource={resource}
    >
      {children}
    </RestForm>
  );
};

RestCreate.propTypes = {
  children: PropTypes.node,
  resource: PropTypes.string,
  customSubmit: PropTypes.func,
  footer: PropTypes.bool,
  customResource: PropTypes.string,
  formatSubmit: PropTypes.func,
  initialValues: PropTypes.object,
};

export default RestCreate;
