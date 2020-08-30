/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useContext, useEffect } from 'react';
import { Form, Button, Icon } from 'antd';
import PropTypes from 'prop-types';
// import { validateRegex } from '@/utils/validateUtils';
// import RestInputNumber from './RestInputNumber';
import { get } from 'lodash';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { FormContext } from './RestForm';

const RestDynamicField = ({
  fieldName,
  label,
  defaultValue,
  defaulOneValue,
  getComponent,
  record,
}) => {
  const { form, source } = useContext(FormContext);

  const [fields, setFields] = useState(defaultValue);

  useEffect(() => {
    if (source) {
      setFields(get(source, record));
    }
  }, [source, record]);

  const addField = () => {
    const keys = form.getFieldValue(fieldName);
    const newKeys = [...keys, defaulOneValue];
    setFields(newKeys);
    form.setFieldsValue({
      [fieldName]: newKeys,
    });
  };

  const removeField = (currentIndex) => () => {
    const keys = form.getFieldValue(fieldName);
    const newKeys = keys.filter((item, index) => index !== currentIndex);
    setFields([...newKeys]);
    form.setFieldsValue({
      [fieldName]: [...newKeys],
    });
  };

  const formItems = fields?.map((field, index) => {
    const fieldItem = getComponent(fieldName, field, index);
    if (index !== fields.length - 1) {
      return (
        <div className="flex items-center" key={String(index)}>
          {React.cloneElement(fieldItem)}
          <Icon
            style={{ fontSize: 20 }}
            className="inline w-1/12 cursor-pointer"
            type="minus-circle-o"
            onClick={removeField(index)}
          />
        </div>
      );
    }

    if (index === 0) {
      return (
        <div key={String(index)}>
          {React.cloneElement(fieldItem)}
          <Button
            type="dashed"
            className="w-full"
            onClick={addField}
            style={{ marginTop: 10 }}
          >
            <Icon type="plus" />
            Add field
          </Button>
        </div>
      );
    }
    return (
      <div key={String(index)}>
        <div className="flex items-center">
          {fieldItem}
          <MinusCircleOutlined
            style={{ fontSize: 20 }}
            className="inline w-1/12 cursor-pointer"
            onClick={removeField(index)}
          />
        </div>
        <Button
          type="dashed"
          className="w-full"
          onClick={addField}
          style={{ marginTop: 10 }}
        >
          <PlusOutlined />
          Add field
        </Button>
      </div>
    );
  });

  return (
    <>
      <Form.Item label={label} required>
        {formItems}
      </Form.Item>
    </>
  );
};

RestDynamicField.propTypes = {
  fieldName: PropTypes.string,
  label: PropTypes.string,
  getComponent: PropTypes.func,
  defaulOneValue: PropTypes.any,
  // required: PropTypes.bool,
  // message: PropTypes.string,
  // onChange: PropTypes.func,
  // pattern: PropTypes.any,
  defaultValue: PropTypes.any,
  record: PropTypes.string,
};

RestDynamicField.defaultProps = {
  // required: true,
  // message: 'Không hợp lệ',
};

export default RestDynamicField;
