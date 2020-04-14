/* eslint-disable no-underscore-dangle */
import { Form, Select } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';

const RestSelectCards = ({
  fieldName,
  label,
  required,
  message,
  mode,
  wrapperCol,
}) => {
  const data = useSelector((state) => state.cards.items);
  return (
    <Form.Item
      label={label}
      name={fieldName}
      rules={[
        {
          required,
          message,
        },
      ]}
      wrapperCol={wrapperCol}
      labelCol={wrapperCol}
    >
      <Select
        mode={mode}
        style={{ width: 400 }}
        showArrow
        filterOption={
          (input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0
          // eslint-disable-next-line react/jsx-curly-newline
        }
      >
        {data.map((e) => (
          <Select.Option key={e.id}>{e?.name}</Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
};

RestSelectCards.propTypes = {
  fieldName: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  label: PropTypes.string,
  required: PropTypes.bool,
  message: PropTypes.string,
  mode: PropTypes.string,
  wrapperCol: PropTypes.object,
};

RestSelectCards.defaultProps = {
  required: true,
  message: 'Không hợp lệ',
  wrapperCol: { span: 24 },
};

export default RestSelectCards;
