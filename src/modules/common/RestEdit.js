/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Form, notification } from 'antd';
import PropTypes from 'prop-types';
import actions from '@/modules/actions';
import { useDispatch, useSelector } from 'react-redux';
import { PRIMARY_KEY } from 'shared/crudSlice';
import RestForm from './RestForm';

const RestEdit = ({
  initialValues,
  children,
  resource,
  customSubmit,
  formatSubmit,
  customResource,
  footer,
}) => {
  const [form] = Form.useForm();

  const dispatch = useDispatch();
  const source = useSelector((state) => state[resource].data);

  useEffect(() => {
    form.setFieldsValue(initialValues ?? source);
  }, [source]);

  const handleSubmit = (values) => {
    if (customSubmit) {
      customSubmit(values, form, source);
    } else {
      dispatch(
        actions[resource].editData({
          id: source[PRIMARY_KEY],
          customResource,
          data: {
            ...source,
            ...(formatSubmit ? formatSubmit(values) : values),
          },
        }),
      );
    }
  };

  const onFinishFailed = () => {
    notification.error({
      message: 'Không được để trống',
    });
  };

  return (
    <RestForm
      footer={footer}
      resource={resource}
      scrollToFirstError
      onFinish={handleSubmit}
      onFinishFailed={onFinishFailed}
      form={form}
      source={source}
    >
      {children}
    </RestForm>
  );
};

RestEdit.propTypes = {
  children: PropTypes.node,
  resource: PropTypes.string,
  customSubmit: PropTypes.func,
  formatSubmit: PropTypes.func,
  customResource: PropTypes.string,
  footer: PropTypes.bool,
  initialValues: PropTypes.object,
};

export default RestEdit;
